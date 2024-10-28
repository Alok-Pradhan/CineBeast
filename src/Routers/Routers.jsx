import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../layout/Sidebar'; // Import your Sidebar component
import '../layout/Sidebar/index.css'
import useStartupServices from '@/services/useStartupService';

// Lazy load the components
const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/Login'));
const SignUp = lazy(() => import('@/pages/SignUp'));

const App = () => {
  useStartupServices();
  return (
    <div className="d-flex">
      <Router>
        <Sidebar />
        <div className="home-section">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
};

export default App;
