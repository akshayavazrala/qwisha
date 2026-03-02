import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';          // your existing home page
import LiquidAuth from './pages/LiquidAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<LiquidAuth />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;