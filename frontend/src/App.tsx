import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
      </Routes>
    </Router>
  );
};

export default App;
