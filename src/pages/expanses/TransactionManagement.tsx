import React, { useState } from 'react';
import { Plus, RefreshCw, Trash2, Edit2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

import {
  TransactionType,
  TransactionStatus,
  TransactionFilters,
  CreateTransactionDTO,
  ITransaction
} from '../../@types';
import { format } from 'date-fns';
import { useCreateTransaction, useDeleteTransaction, useTransactions, useTransactionStats, useUpdateTransaction } from '../../hooks/useTransactions';
import { StatsSection } from './StatsSection';

const TransactionManagement = () => {
  // Estados
  const [filters, setFilters] = useState<TransactionFilters>({
    page: 1,
    limit: 10,
    sortBy: 'date',
    sortOrder: 'desc'
  });

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<ITransaction | null>(null);
  const [newTransaction, setNewTransaction] = useState<Partial<CreateTransactionDTO>>({
    description: '',
    amount: 0,
    type: TransactionType.EXPENSE,
    category: '',
    date: new Date(),
    status: TransactionStatus.PENDING
  });

  // Queries e Mutations
  const { 
    data: transactionsData, 
    isLoading: isLoadingTransactions,
    error: transactionsError 
  } = useTransactions(filters);

  const { 
    data: statsData,
    isLoading: isLoadingStats 
  } = useTransactionStats({
    startDate: filters.startDate,
    endDate: filters.endDate
  });
console.log(statsData);
  const createMutation = useCreateTransaction();
  const updateMutation = useUpdateTransaction();
  const deleteMutation = useDeleteTransaction();

  // Handlers
  const handleCreateTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createMutation.mutateAsync(newTransaction as CreateTransactionDTO);
      setIsCreateDialogOpen(false);
      setNewTransaction({
        description: '',
        amount: 0,
        type: TransactionType.EXPENSE,
        category: '',
        date: new Date(),
        status: TransactionStatus.PENDING
      });
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  const handleUpdateTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTransaction?._id) return;

    try {
      await updateMutation.mutateAsync({
        id: selectedTransaction._id,
        ...newTransaction
      });
      setIsEditDialogOpen(false);
      setSelectedTransaction(null);
    } catch (error) {
      console.error('Error updating transaction:', error);
    }
  };

  const handleDeleteTransaction = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      try {
        await deleteMutation.mutateAsync(id);
      } catch (error) {
        console.error('Error deleting transaction:', error);
      }
    }
  };

  const handleEditClick = (transaction: ITransaction) => {
    setSelectedTransaction(transaction);
    setNewTransaction({
      description: transaction.description,
      amount: transaction.amount,
      type: transaction.type,
      category: transaction.category,
      date: transaction.date,
      status: transaction.status
    });
    setIsEditDialogOpen(true);
  };

  // Render helpers
  const renderTransactionForm = (onSubmit: (e: React.FormEvent) => Promise<void>) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        placeholder="Description"
        value={newTransaction.description}
        onChange={(e:any) => setNewTransaction({
          ...newTransaction,
          description: e.target.value
        })}
        required
      />
      <Input
        type="number"
        placeholder="Amount"
        value={newTransaction.amount}
        onChange={(e:any) => setNewTransaction({
          ...newTransaction,
          amount: parseFloat(e.target.value)
        })}
        required
        min="0"
        step="0.01"
      />
      <Select
        value={newTransaction.type}
        onValueChange={(value: TransactionType) => setNewTransaction({
          ...newTransaction,
          type: value
        })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(TransactionType).map((type) => (
            <SelectItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        placeholder="Category"
        value={newTransaction.category}
        onChange={(e) => setNewTransaction({
          ...newTransaction,
          category: e.target.value
        })}
        required
      />
      <Input
        type="date"
        value={format(new Date(newTransaction.date || new Date()), 'yyyy-MM-dd')}
        onChange={(e) => setNewTransaction({
          ...newTransaction,
          date: new Date(e.target.value)
        })}
        required
      />
      <Select
        value={newTransaction.status}
        onValueChange={(value: TransactionStatus) => setNewTransaction({
          ...newTransaction,
          status: value
        })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(TransactionStatus).map((status) => (
            <SelectItem key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <DialogFooter>
        <Button 
          type="submit" 
          disabled={createMutation.isPending || updateMutation.isPending}
        >
          {(createMutation.isPending || updateMutation.isPending) ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            selectedTransaction ? 'Update Transaction' : 'Create Transaction'
          )}
        </Button>
      </DialogFooter>
    </form>
  );

  if (transactionsError) {
    return (
      <div className="p-4 text-red-500">
        Error loading transactions: {transactionsError.message}
      </div>
    );
  }

  
  return (
    <div className="p-4 space-y-4">
      {!isLoadingStats && statsData && (
        <StatsSection statsData={statsData} />
      )}

      {/* Actions and Filters */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Transactions</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add Transaction
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Transaction</DialogTitle>
              <DialogDescription>
                Enter the details for your new transaction
              </DialogDescription>
            </DialogHeader>
            {renderTransactionForm(handleCreateTransaction)}
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
  <CardHeader>
    <CardTitle className="text-lg">Filters</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Input
        type="date"
        value={filters.startDate}
        onChange={(e) => setFilters({
          ...filters,
          startDate: e.target.value
        })}
        placeholder="Start Date"
      />
      <Input
        type="date"
        value={filters.endDate}
        onChange={(e) => setFilters({
          ...filters,
          endDate: e.target.value
        })}
        placeholder="End Date"
      />
      <Select
        value={filters.type || "all"}
        onValueChange={(value: string) => setFilters({
          ...filters,
          type: value === "all" ? undefined : value as TransactionType
        })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Types</SelectItem>
          {Object.values(TransactionType).map((type) => (
            <SelectItem key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </CardContent>
</Card>

      {/* Transactions List */}
      <div className="space-y-4">
        {isLoadingTransactions ? (
          <div className="text-center p-4">Loading...</div>
        ) : (
          transactionsData?.transactions.map((transaction) => (
            <Card key={transaction._id}>
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{transaction.description}</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEditClick(transaction)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDeleteTransaction(transaction._id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  {format(new Date(transaction.date), 'PPP')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className={`font-bold ${
                    transaction.type === TransactionType.INCOME ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === TransactionType.INCOME ? '+' : '-'}₪{transaction.amount.toFixed(2)}
                  </span>
                  <div className="flex gap-2">
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {transaction.category}
                    </span>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Transaction</DialogTitle>
            <DialogDescription>
              Update the transaction details
            </DialogDescription>
          </DialogHeader>
          {renderTransactionForm(handleUpdateTransaction)}
        </DialogContent>
      </Dialog>

      {/* Pagination */}
      {transactionsData?.pagination && (
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            disabled={filters.page === 1}
            onClick={() => setFilters({
              ...filters,
              page: filters.page! - 1
            })}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            disabled={filters.page === transactionsData.pagination.pages}
            onClick={() => setFilters({
              ...filters,
              page: filters.page! + 1
            })}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default TransactionManagement;