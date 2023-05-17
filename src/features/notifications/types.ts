import { Notification } from '@/api/types';

export type NotificationsState = {
  data: Array<Notification>;
  isLoading: boolean;
  error: Array<string> | string | undefined;
}