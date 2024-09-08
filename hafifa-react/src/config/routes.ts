import { Route } from '../types';
import Schedule from '@pages/schedule/Schedule.tsx';
import TargetsBank from '@pages/targets-bank/TargetsBank.tsx';

export const routes: Route[] = [
  {
    path: '/schedules',
    title: 'תזמון שיגורים',
    component: Schedule,
  },
  {
    path: '/targets-bank',
    title: 'בנק מטרות',
    component: TargetsBank,
  },
];
