import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Workloads from './pages/Workloads';
import PersistentVolumes from './pages/PersistentVolumes';
import Roles from './pages/Roles';
import StorageClasses from './pages/StorageClasses';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/workloads" element={<Workloads />} />
            <Route path="/persistent-volumes" element={<PersistentVolumes />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/storage-classes" element={<StorageClasses />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
