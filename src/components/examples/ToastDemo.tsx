import { useState } from 'react';
import useToast from '../../hooks/useToast';

const ToastDemo = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const showSuccessToast = () => {
    toast.success('Operation completed successfully!');
  };

  const showErrorToast = () => {
    toast.error('An error occurred while processing your request.');
  };

  const showInfoToast = () => {
    toast.info('Did you know? You can customize these toast messages.');
  };

  const showWarningToast = () => {
    toast.warning('Be careful with this operation.');
  };

  const simulateAsyncOperation = () => {
    setLoading(true);
    
    // Simulate an API call with promise
    const fakeApiCall = new Promise<string>((resolve, reject) => {
      // 70% chance of success
      const willSucceed = Math.random() > 0.3;
      
      setTimeout(() => {
        if (willSucceed) {
          resolve('Data fetched successfully!');
        } else {
          reject(new Error('Network error!'));
        }
      }, 2000);
    });
    
    toast.promise(
      fakeApiCall,
      {
        pending: 'Fetching data...',
        success: 'Data loaded successfully!',
        error: 'Failed to fetch data! Please try again.'
      }
    );
    
    fakeApiCall
      .catch(() => {}) // Already handled by toast.promise
      .finally(() => setLoading(false));
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Toast Notification Demo</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <button 
          onClick={showSuccessToast}
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-300"
        >
          Success Toast
        </button>
        
        <button 
          onClick={showErrorToast}
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
        >
          Error Toast
        </button>
        
        <button 
          onClick={showInfoToast}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Info Toast
        </button>
        
        <button 
          onClick={showWarningToast}
          className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300"
        >
          Warning Toast
        </button>
      </div>
      
      <div className="border-t pt-4">
        <button 
          onClick={simulateAsyncOperation}
          disabled={loading}
          className={`w-full py-3 px-4 rounded-md transition duration-300 ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {loading ? 'Processing...' : 'Simulate Async Operation with Toast'}
        </button>
        <p className="text-sm text-gray-600 mt-2 text-center">
          This will demonstrate toast.promise with 70% success rate
        </p>
      </div>
    </div>
  );
};

export default ToastDemo; 