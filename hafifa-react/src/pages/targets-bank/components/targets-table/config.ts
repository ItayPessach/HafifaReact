import { GridColDef } from '@mui/x-data-grid';

const commonColumnsConfig: Partial<GridColDef> = {
  flex: 1,
  headerAlign: 'center',
  headerClassName: 'mui-data-grid-header',
  cellClassName: 'mui-data-grid-cell',
};

export const targetsTableColumns: GridColDef[] = [{
  field: 'name',
  headerName: 'שם',
  ...commonColumnsConfig,
}, {
  field: 'lat',
  headerName: 'קו אורך',
  ...commonColumnsConfig,
}, {
  field: 'lng',
  headerName: 'קו רוחב',
  ...commonColumnsConfig,
}, {
  field: 'targetType',
  headerName: 'סוג',
  ...commonColumnsConfig,
}, {
  field: 'createdAt',
  headerName: 'נוצר בתאריך',
  ...commonColumnsConfig,
}];
