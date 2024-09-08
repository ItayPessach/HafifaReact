import { QueryKey } from '@tanstack/react-query';
import { config } from '@config';
import apiClient from './apiClient.ts';

interface MutationInput {
  url: string;
  method: string;
  data: unknown;
}

export const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [path, id, params] = queryKey;

  const endpoint = id ? `${config.backendBaseUrl}/${path}/${id}` : `${config.backendBaseUrl}/${path}`;

  return (await apiClient.get(endpoint, { params })).data;
};

export const defaultMutationFn = async ({ url, method, data }: MutationInput) => {
  return (await apiClient({ url, method, data })).data;
};
