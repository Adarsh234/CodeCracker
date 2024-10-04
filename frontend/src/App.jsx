import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Layout from './component/Layout';
import WebEditor from './component/WebEditor';
import Login from './component/Login';
import  Register from './component/Registor';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<WebEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registor" element={<Register />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
