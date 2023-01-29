


import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import SearchRoute from './page/SearchRoute';
import SelectedRecipeRoute from './page/SelectedRecipeRoute';
import Basket from './page/Basket';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      
      <NavBar />
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
    </>
  );
}

export default App;
