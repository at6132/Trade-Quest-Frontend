import { toast, ToastOptions } from 'react-toastify';

// Default configuration for toasts
const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

// Different toast types
export const toastSuccess = (message: string, options?: ToastOptions) => {
  return toast.success(message, { ...defaultOptions, ...options });
};

export const toastError = (message: string, options?: ToastOptions) => {
  return toast.error(message, { ...defaultOptions, ...options });
};

export const toastInfo = (message: string, options?: ToastOptions) => {
  return toast.info(message, { ...defaultOptions, ...options });
};

export const toastWarning = (message: string, options?: ToastOptions) => {
  return toast.warning(message, { ...defaultOptions, ...options });
};

// Generic toast function
export const showToast = (
  message: string,
  type: 'success' | 'error' | 'info' | 'warning' = 'info',
  options?: ToastOptions
) => {
  switch (type) {
    case 'success':
      return toastSuccess(message, options);
    case 'error':
      return toastError(message, options);
    case 'warning':
      return toastWarning(message, options);
    case 'info':
    default:
      return toastInfo(message, options);
  }
};

export default {
  success: toastSuccess,
  error: toastError,
  info: toastInfo,
  warning: toastWarning,
  show: showToast,
};
