import React, { useState, useEffect } from "react";
import {
  ITransaction,
  IFilters,
  IFormData,
  IFinancialTotals,
} from "../../@types";
import api from "../../lib/axios";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import TransactionForm from "../../components/transactionForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import FinanceStats from "../../components/FinanceStats";
import TransactionTimelineChart from "../../components/TransactionsTimeLineChart";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog";

interface APIResponse {
  transactions: ITransaction[];
  pagination: {
    totalDocs?: number;
    limit?: number;
    page?: number;
    totalPages?: number;
  };
}

const FinanceControl: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteTransactionId, setDeleteTransactionId] = useState<string | null>(null);

  const [filters, setFilters] = useState<IFilters>({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const initialFormData: IFormData = {
    description: "",
    amount: "",
    type: "expense",
    category: "",
    date: new Date().toISOString().split("T")[0],
  };

  const fetchTransactions = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.get<APIResponse>("/transactions", {
        params: filters,
      });
      setTransactions(response.data.transactions || []);
    } catch (error) {
      setError("Error loading transactions. Try again.");
      console.error("Error fetching transactions:", error);
      setTransactions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (formData: IFormData): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      await api.post<ITransaction>("/transactions", {
        ...formData,
        amount: Number(formData.amount),
      });
      setIsFormOpen(false);
      fetchTransactions();
    } catch (error) {
      setError("Error adding transaction. Try again.");
      console.error("Error adding transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (transactionId: string): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      await api.delete(`/transactions/${transactionId}`);
      await fetchTransactions();
    } catch (error) {
      setError("Error deleting transaction. Try again.");
      console.error("Error deleting transaction:", error);
    } finally {
      setIsLoading(false);
      setDeleteTransactionId(null);
    }
  };

  const calculateTotals = (): IFinancialTotals => {
    if (!transactions || transactions.length === 0) {
      return { income: 0, expenses: 0, balance: 0 };
    }

    return transactions.reduce(
      (acc: IFinancialTotals, transaction: ITransaction) => {
        const amount = Number(transaction.amount) || 0;

        if (transaction.type === "income") {
          acc.income += amount;
        } else {
          acc.expenses += amount;
        }
        acc.balance = acc.income - acc.expenses;
        return acc;
      },
      { income: 0, expenses: 0, balance: 0 }
    );
  };

  useEffect(() => {
    fetchTransactions();
  }, [filters]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Financial Control</h1>
          <p className="text-gray-500">Manage your income and expenses</p>
        </div>
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Transaction</DialogTitle>
            </DialogHeader>
            <TransactionForm
              onSubmit={handleSubmit}
              isLoading={isLoading}
              initialFormData={initialFormData}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="mb-6 flex gap-4">
        <Select
          value={filters.month.toString()}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, month: parseInt(value) }))
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 12 }, (_, i) => (
              <SelectItem key={i + 1} value={(i + 1).toString()}>
                {new Date(2024, i, 1).toLocaleString("en-US", {
                  month: "long",
                })}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.year.toString()}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, year: parseInt(value) }))
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 5 }, (_, i) => (
              <SelectItem key={i} value={(2024 - i).toString()}>
                {2024 - i}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <FinanceStats totals={calculateTotals()} />
      <TransactionTimelineChart transactions={transactions} />

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            A list of your recent transactions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {transactions.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              No transactions found for the selected period.
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction._id}>
                    <TableCell>
                      {new Date(transaction.date).toLocaleDateString("en-US")}
                    </TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>{transaction.category}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.type === "income"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {transaction.type === "income" ? "Income" : "Expense"}
                      </span>
                    </TableCell>
                    <TableCell
                      className={`text-right font-medium ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(transaction.amount)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDeleteTransactionId(transaction._id)}
                        className="hover:bg-red-100 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <AlertDialog open={!!deleteTransactionId} onOpenChange={() => setDeleteTransactionId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the transaction.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() => deleteTransactionId && handleDelete(deleteTransactionId)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FinanceControl;