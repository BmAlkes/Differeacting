// src/pages/FinanceControl.tsx
import React, { useState, useEffect } from "react";
import {
  ITransaction,
  IFilters,
  IFormData,
  IFinancialTotals,
} from "../../@types";


// Componentes UI do shadcn
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

import { Badge } from "../../components/ui/badge";
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";

// Componentes personalizados


// Ícones
import { Plus, Trash2, Download } from "lucide-react";
import api from "../../lib/axios";
import FinanceStats from "./FinanceStats";
import TransactionTimelineChart from "./TransactionsTimeLineChart";
import CategoryAnalysis from "./CategoryAnalysis";
import TransactionForm from "./TransactionForm";

const FinanceControl: React.FC = () => {
  // Estados
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [deleteTransactionId, setDeleteTransactionId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [filters, setFilters] = useState<IFilters>({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const [advancedFilters, _setAdvancedFilters] = useState({
    minAmount: "",
    maxAmount: "",
    categories: [] as string[],
    types: [] as string[],
  });

  // Dados iniciais do formulário
  const initialFormData: IFormData = {
    description: "",
    amount: "",
    type: "expense",
    category: "",
    date: new Date().toISOString().split("T")[0],
  };

  // Funções auxiliares
  const fetchTransactions = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.get<{ transactions: ITransaction[] }>("/transactions", {
        params: filters,
      });
      setTransactions(response.data.transactions);
    } catch (error) {
      setError("Error loading transactions");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (formData: IFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.post("/transactions", {
        ...formData,
        amount: Number(formData.amount),
      });
      setIsFormOpen(false);
      fetchTransactions();
    } catch (error) {
      setError("Error adding transaction");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.delete(`/transactions/${id}`);
      fetchTransactions();
    } catch (error) {
      setError("Error deleting transaction");
      console.error(error);
    } finally {
      setIsLoading(false);
      setDeleteTransactionId(null);
    }
  };

  const calculateTotals = (): IFinancialTotals => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.income += transaction.amount;
        } else {
          acc.expenses += transaction.amount;
        }
        acc.balance = acc.income - acc.expenses;
        return acc;
      },
      { income: 0, expenses: 0, balance: 0 }
    );
  };

  const exportToCSV = () => {
    const headers = ["Date", "Description", "Category", "Type", "Amount"];
    const csvData = transactions.map((t) => [
      new Date(t.date).toLocaleDateString(),
      t.description,
      t.category,
      t.type,
      t.amount,
    ]);

    const csvContent = [headers, ...csvData].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transactions-${filters.year}-${filters.month}.csv`;
    a.click();
  };

  // Filtrar transações
  const filterTransactions = (transactions: ITransaction[]) => {
    if (!transactions) return [];
    
    return transactions.filter((transaction) => {
      const matchesSearch = transaction.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
  
      const matchesAmount =
        (!advancedFilters.minAmount ||
          transaction.amount >= Number(advancedFilters.minAmount)) &&
        (!advancedFilters.maxAmount ||
          transaction.amount <= Number(advancedFilters.maxAmount));
  
      const matchesCategory =
        advancedFilters.categories.length === 0 ||
        advancedFilters.categories.includes(transaction.category);
  
      const matchesType =
        advancedFilters.types.length === 0 ||
        advancedFilters.types.includes(transaction.type);
  
      return matchesSearch && matchesAmount && matchesCategory && matchesType;
    });
  };
  

  // Paginação
  const paginatedTransactions = (transactions: ITransaction[]) => {
    const filteredTransactions = filterTransactions(transactions);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredTransactions.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(
    filterTransactions(transactions).length / itemsPerPage
  );

  useEffect(() => {
    fetchTransactions();
  }, [filters]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">Loading...</div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Financial Control</h1>
          <p className="text-gray-500">Manage your income and expenses</p>
        </div>
        <div className="flex gap-2 z-0">
          <Button onClick={exportToCSV} variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
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
      </div>

      {/* Filtros */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-4 flex-wrap">
          <Select
            value={filters.month.toString()}
            onValueChange={({value}:any) =>
              setFilters(({prev}:any) => ({ ...prev, month: parseInt(value) }))
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

          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-xs"
          />
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Estatísticas e Gráficos */}
      <div className="grid gap-6 mb-6">
        <FinanceStats totals={calculateTotals()} />
        <TransactionTimelineChart transactions={transactions} />
        <CategoryAnalysis transactions={transactions} />
      </div>

      {/* Tabela de Transações */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>
            Showing {paginatedTransactions(transactions).length} of{" "}
            {filterTransactions(transactions).length} transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
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
              {paginatedTransactions(transactions).map((transaction) => (
                <TableRow key={transaction._id}>
                  <TableCell>
                    {new Date(transaction.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>
                    <Badge
                      variant={transaction.type === "income" ? "sucess" : "destructive"}
                    >
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={`text-right ${
                      transaction.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {new Intl.NumberFormat("he-IL", {
                      style: "currency",
                      currency: "ILS",
                    }).format(transaction.amount)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setDeleteTransactionId(transaction._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Paginação */}
          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dialog de confirmação de exclusão */}
      <AlertDialog
        open={!!deleteTransactionId}
        onOpenChange={() => setDeleteTransactionId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              transaction.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={() =>
                deleteTransactionId && handleDelete(deleteTransactionId)
              }
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