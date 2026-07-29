import { BASE_PATH } from '@/constants/path.constants';

export const ROUTES = {
  HOME: `${BASE_PATH}/`,
  TRAINING: `${BASE_PATH}/training`,
  DICTIONARY: `${BASE_PATH}/dictionary`,
  NOT_FOUND: `${BASE_PATH}/not-found`,
} as const;
