import Stack from '@mui/material/Stack';
import Header from './components/header/Header.tsx';
import TargetsTable from './components/targets-table/TargetsTable.tsx';

const TargetsBank = () => {
  return (
    <Stack mt={8}>
      <Header />
      <TargetsTable />
    </Stack>
  );
};

export default TargetsBank;
