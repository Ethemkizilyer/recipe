
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import SearchRoute from './page/SearchRoute';
import SelectedRecipeRoute from './page/SelectedRecipeRoute';
import Basket from './page/Basket';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search">
          <Route index element={<SearchRoute />} />
          <Route path=":id" element={<SelectedRecipeRoute />} />
        </Route>
        <Route path="/basket">
          <Route index element={<Basket />} />
          <Route path=":basket_id" element={<Basket />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
