import { Box } from '@mui/material';
import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { Target } from '@types';
import { targetsTableColumns } from './config.ts';
import { targetsTableContainerStyle } from './styles.ts';
import { useTargetApi } from '@api/hooks';
import { useMemo } from 'react';

const TargetsTable = () => {
  const { useGetTargets } = useTargetApi();

  const { data, isSuccess } = useGetTargets();

  const formattedRows = useMemo<GridRowsProp<Target>>(() => {
    if (isSuccess) {
      return data.map((target) => ({
        ...target,
        createdAt: new Date(target.createdAt).toLocaleDateString('he-IL'),
      }));
    }

    return [];
  }, [data, isSuccess]);

  return (
    <>
      {isSuccess && <Box sx={targetsTableContainerStyle}>
        <DataGrid disableColumnMenu disableRowSelectionOnClick disableColumnResize disableColumnSorting
                  rows={formattedRows}
                  columns={targetsTableColumns} />
      </Box>}
    </>
  );
};

export default TargetsTable;
