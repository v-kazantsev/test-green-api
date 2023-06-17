import { Notification } from '@/api/types';

export type NotificationsState = {
  notification: Notification | null;
  isLoading: boolean;
  error: Array<string> | string | undefined;
}