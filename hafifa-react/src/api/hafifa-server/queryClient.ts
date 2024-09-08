import { QueryClient } from '@tanstack/react-query';
import { defaultMutationFn, defaultQueryFn } from './defaultQueries.ts';

export const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
      mutations: {
        mutationFn: defaultMutationFn,
      },
    },
  },
);
