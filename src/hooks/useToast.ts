import { useCallback } from 'react';
import { toast, ToastOptions } from 'react-toastify';

// Default configuration options
const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const useToast = () => {
  // Success toast
  const success = useCallback((message: string, options?: ToastOptions) => {
    return toast.success(message, { ...defaultOptions, ...options });
  }, []);

  // Error toast
  const error = useCallback((message: string, options?: ToastOptions) => {
    return toast.error(message, { ...defaultOptions, ...options });
  }, []);

  // Info toast
  const info = useCallback((message: string, options?: ToastOptions) => {
    return toast.info(message, { ...defaultOptions, ...options });
  }, []);

  // Warning toast
  const warning = useCallback((message: string, options?: ToastOptions) => {
    return toast.warning(message, { ...defaultOptions, ...options });
  }, []);

  // For promise-based operations
  const promise = useCallback(
    <T>(
      promise: Promise<T>,
      { pending = 'Loading...', success = 'Success!', error = 'Error!' }: { pending?: string; success?: string; error?: string },
      options?: ToastOptions
    ) => {
      return toast.promise(promise, { pending, success, error }, { ...defaultOptions, ...options });
    },
    []
  );

  return {
    success,
    error,
    info,
    warning,
    promise,
  };
};

export default useToast; 