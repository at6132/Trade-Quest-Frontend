import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ToastDemo from './components/examples/ToastDemo'

function App() {
  return (
    <>
      {/* Toast Container - positioned in the corner of the screen */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">React Toastify Integration</h1>
        
        <ToastDemo />
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>This demo showcases the React Toastify library integration.</p>
          <p>Click on any button above to see different toast notifications.</p>
        </div>
      </div>
    </>
  )
}

export default App
