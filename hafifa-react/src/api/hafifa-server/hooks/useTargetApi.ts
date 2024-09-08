import { useMutation, useQuery } from '@tanstack/react-query';

const TARGETS_ENDPOINT = 'targets';

export const useTargetApi = () => {
  return {
    useGetTargets: () => useQuery({ queryKey: [TARGETS_ENDPOINT] }),
    useGetTargetsNames: () => useQuery({ queryKey: [`${TARGETS_ENDPOINT}/names`] }),
    useCreateTarget: () => useMutation({}),
  };
};
