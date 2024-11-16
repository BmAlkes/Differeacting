// hooks/useTransactions.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { 
  TransactionFilters, 
  CreateTransactionDTO, 
  UpdateTransactionDTO,
  TransactionResponse,
  ITransaction 
} from '../@types';
import * as transactionService from '../api/Transactions';

// Primeiro, vamos definir as interfaces corretas para as estatísticas
interface CategoryStats {
  category: string;
  total: number;
  count: number;
  avgAmount: number;
  minAmount: number;
  maxAmount: number;
}

interface TransactionStatsItem {
  categories: CategoryStats[];
  totalAmount: number;
  _id: {
    type: string;
    month: number;
    year: number;
  };
}

type TransactionStats = TransactionStatsItem[];

export function useTransactions(filters: TransactionFilters) {
  return useQuery<TransactionResponse, Error>({
    queryKey: ['transactions', filters],
    queryFn: () => transactionService.getTransactions(filters),
  });
}

export function useTransactionStats(filters: Partial<TransactionFilters>) {
  return useQuery<TransactionStats, Error>({
    queryKey: ['transactionStats', filters],
    queryFn: () => transactionService.getTransactionStats(filters),
    initialData: [] // Inicializa com um array vazio
  });
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();
  
  return useMutation<ITransaction, Error, CreateTransactionDTO>({
    mutationFn: (data: CreateTransactionDTO) => 
      transactionService.createTransaction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['transactionStats'] });
    },
  });
}

export function useUpdateTransaction() {
  const queryClient = useQueryClient();
  
  return useMutation<ITransaction, Error, UpdateTransactionDTO>({
    mutationFn: (data: UpdateTransactionDTO) => 
      transactionService.updateTransaction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['transactionStats'] });
    },
  });
}

export function useDeleteTransaction() {
  const queryClient = useQueryClient();
  
  return useMutation<void, Error, string>({
    mutationFn: (id: string) => 
      transactionService.deleteTransaction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['transactions'] });
      queryClient.invalidateQueries({ queryKey: ['transactionStats'] });
    },
  });
}