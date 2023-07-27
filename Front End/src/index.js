// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import Map from './Components/passangerHome';
// import {configureStore} from '@reduxjs/toolkit'
// import {Provider} from 'react-redux'
// import rideReducer from './features/ride'

// import MapApp from './map/mapApp';
// import Navbar from './Components/Navbar';

// const store = configureStore({
//   reducer:{
//     ride : rideReducer,
    
//   }
// })
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Provider store = {store}>
//       <App />
//     </Provider>
//      {/* <Navbar /> */}
//       {/* <MapApp/> */}
//     </BrowserRouter>
//   </React.StrictMode >
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import { persistor, store } from "./Components/Stores/Store";
import { PersistGate } from "redux-persist/integration/react";
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(


  <React.StrictMode  >
    <BrowserRouter>
    
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();