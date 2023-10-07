import React from 'react';
import { store } from '../state';
import { Provider } from 'react-redux';
import RepositoriesList from './RepositoriesList';


export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  )
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
   
//   </React.StrictMode>
// );

