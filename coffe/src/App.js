import {
  BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Home, NotFound } from './pages';
import { Shop } from './pages'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact strict path="/" element={<Home />} />
          <Route exact strict path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
