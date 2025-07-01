import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './Layout/AdminLayouts';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import LostPosts from './Pages/LostPosts';
import FoundPosts from './Pages/FoundPosts';
import AllPosts from './Pages/AllPosts';
import Users from './Pages/Users';
import PostsPage from './Pages/PostsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
        <Route path="/posts" element={<AdminLayout><PostsPage /></AdminLayout>} />
        <Route path="/lost-posts" element={<AdminLayout><LostPosts /></AdminLayout>} />
        <Route path="/found-posts" element={<AdminLayout><FoundPosts /></AdminLayout>} />
        <Route path="/all-posts" element={<AdminLayout><AllPosts /></AdminLayout>} />
        <Route path="/users" element={<AdminLayout><Users /></AdminLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
