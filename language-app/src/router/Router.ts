import { router } from '@/router/router.config';
import NotFound from '@/pages/NotFound';
import type { Route } from './router.types';

export default function Router(): HTMLElement {
  const path = window.location.pathname;

  const route = router.find((route: Route) => route.path === path);

  if (!route) {
    return NotFound();
  }

  return route.component();
}
