import * as React from 'react';

export interface Route {
  path: string;
  title: string;
  component: React.FC;
}
