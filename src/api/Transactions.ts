// services/transactionService.ts
import  api  from '../lib/axios';
import type { 
  TransactionFilters, 
  CreateTransactionDTO, 
  UpdateTransactionDTO,
  TransactionResponse,
  TransactionStats 
} from '../@types';

export async function getTransactions(filters: TransactionFilters): Promise<TransactionResponse> {
  try {
    const params = new URLSearchParams();
    
    // Adiciona apenas os filtros que têm valor
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (Array.isArray(value)) {
          value.forEach(v => params.append(`${key}[]`, v.toString()));
        } else {
          params.append(key, value.toString());
        }
      }
    });

    const { data } = await api.get<TransactionResponse>(`/transactions?${params}`);
    return data;
  } catch (error) {
    throw handleError(error);
  }
}

export async function getTransactionById(id: string) {
  try {
    const { data } = await api.get(`/transactions/${id}`);
    return data;
  } catch (error) {
    throw handleError(error);
  }
}

export async function createTransaction(transactionData: CreateTransactionDTO) {
  try {
    const { data } = await api.post('/transactions', transactionData);
    return data;
  } catch (error) {
    throw handleError(error);
  }
}

export async function updateTransaction({ id, ...updateData }: UpdateTransactionDTO) {
  try {
    const { data } = await api.put(`/transactions/${id}`, updateData);
    return data;
  } catch (error) {
    throw handleError(error);
  }
}

export async function deleteTransaction(id: string) {
  try {
    const { data } = await api.delete(`/transactions/${id}`);
    return data;
  } catch (error) {
    throw handleError(error);
  }
}

export async function getTransactionStats(filters: Partial<TransactionFilters>): Promise<TransactionStats> {
  try {
    const params = new URLSearchParams();
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params.append(key, value.toString());
      }
    });

    const { data } = await api.get<TransactionStats>(`/transactions/stats?${params}`);
    return data;
  } catch (error) {
    throw handleError(error);
  }
}

// Função auxiliar para tratamento de erros
function handleError(error: any): Error {
  if (error.response?.data?.error) {
    return new Error(error.response.data.error);
  }
  if (error.message) {
    return new Error(error.message);
  }
  return new Error('An unexpected error occurred');
}