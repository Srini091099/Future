import logo from './logo.svg';
import './App.css';

import { Routerapp } from './components/router/router';
import Filterpage from './components/extras/filterpage';
import { Provider } from 'react-redux';
import Filtercategory from './components/extras/filterpage/Filtercategory';
import store from '../src/components/redux/store'; // Import your Redux store
import { Intropages } from './components/pages/pages';


function App() {
  return (
 <>
 <Routerapp>
 <Intropages/>
 </Routerapp>
 </>
   
  );
}

export default App;
