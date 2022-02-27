import "./Trello.css"
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <persistGate persistor={persistor}>
        <Homepage />
      </persistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();








// import "./Trello.css"
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Homepage from './Homepage';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Homepage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// reportWebVitals();
