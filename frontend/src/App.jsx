import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './component/Home';
import { useEffect } from "react";
import Layout from './component/Layout';
import WebEditor from './component/WebEditor';
import PythonCompiler from './component/PythonCompiler';
import ChatbotPage from './component/ChatBot';
import { AuthProvider } from './context/AuthContext';

function App() {
useEffect(() => {
  console.log('App component rendered!');
}, []);


  return (
    <AuthProvider>
      <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editor' element={<WebEditor />} />
        <Route path='/python-compiler' element={<PythonCompiler/>}/>
        <Route path='/ChatBot' element={<ChatbotPage/>}/>
      </Routes>
      </Layout>
      </AuthProvider>
  );
}

export default App;
