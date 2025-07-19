import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from './Layout/AdminLayouts';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import LostPosts from './Pages/LostPosts';
import FoundPosts from './Pages/FoundPosts';
import AllPosts from './Pages/AllPosts';
import Users from './Pages/Users';
import PostsPage from './Pages/PostsPage';
import { AdminAuthProvider } from './Context/AdminAuthContext';
import ProtectedRoute from './utils/ProtectedRoute';
import AdminProfile from './Pages/Admin/AdminProfile';

function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />
          <Route path="/posts" element={<AdminLayout><PostsPage /></AdminLayout>} />
          <Route path="/lost-posts" element={<AdminLayout><LostPosts /></AdminLayout>} />
          <Route path="/found-posts" element={<AdminLayout><FoundPosts /></AdminLayout>} />
          <Route path="/all-posts" element={<AdminLayout><AllPosts /></AdminLayout>} />
          <Route path="/users" element={<AdminLayout><Users /></AdminLayout>} />
          <Route path="/dashboard" element={
            <ProtectedRoute >
              <AdminLayout><Dashboard /></AdminLayout>
            </ProtectedRoute>
          } />
        </Routes>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
