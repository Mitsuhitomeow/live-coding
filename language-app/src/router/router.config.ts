import Home from '@/pages/Home';
import Training from '@/pages/Training';
import Dictionary from '@/pages/Dictionary';
import NotFound from '@/pages/NotFound';
import type { Route } from '@/types/router.types';
import { ROUTES } from '@/constants/router.constants';

export const router: Route[] = [
  {
    path: ROUTES.HOME,
    component: Home,
  },
  {
    path: ROUTES.TRAINING,
    component: Training,
  },
  {
    path: ROUTES.DICTIONARY,
    component: Dictionary,
  },
  {
    path: ROUTES.NOT_FOUND,
    component: NotFound,
  },
];
