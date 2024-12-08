import { type ReactNode } from 'react';
import { type ToastProps } from '../toast';

export type ToastActionElement = React.ReactElement;

export type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
};
