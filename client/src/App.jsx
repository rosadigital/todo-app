import React from "react";
import { ToastContainer } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css'; 
import AppRoutes from "./routers/Router";

const App = () => {
  return (
    <div>
      <AppRoutes />
      <ToastContainer />
    </div>
  );
};

export default App;
