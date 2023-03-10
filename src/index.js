import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchProvider } from './Components/Context/SearchContext';
import reportWebVitals from './reportWebVitals';
import { FilterProvider } from './Components/Context/FilterContext';
import { FilteredArrayProvider } from './Components/Context/FilterArrayContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FilterProvider>
    <SearchProvider>
      <FilteredArrayProvider>
        <App />
      </FilteredArrayProvider>
    </SearchProvider>
  </FilterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
