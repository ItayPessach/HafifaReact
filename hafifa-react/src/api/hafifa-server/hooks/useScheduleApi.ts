import { useMutation, useQuery } from '@tanstack/react-query';

const SCHEDULES_ENDPOINT = 'scheduler';

export const useScheduleApi = () => {
  return {
    useGetSchedules: () => useQuery({ queryKey: [SCHEDULES_ENDPOINT], refetchInterval: 30000 }),
    useCreateSchedule: () => useMutation({}),
  };
};
