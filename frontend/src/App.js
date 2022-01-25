import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Toaster } from 'react-hot-toast';
import { Payments } from './components/pages/Payments'
function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <Payments />
      <Toaster />
    </PayPalScriptProvider>
  );
}

export default App;
