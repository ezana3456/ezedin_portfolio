import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/MainPage'
import AllProjects from './component/AllProjects.jsx';
import AdminDashboard from './pages/Admin.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ezana3456" element={<Home />} />
        <Route path="/ezana3456/projects" element={<AllProjects />} />
        <Route path="/ezana3456/admin" element={<AdminDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;