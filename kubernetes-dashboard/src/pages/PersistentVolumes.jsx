import React from 'react';
import PersistentVolumeTable from '../components/PersistentVolumeTable';

const PersistentVolumes = () => {
  return (
    <div>
      <h1>Persistent Volumes Overview</h1>
      <PersistentVolumeTable />
    </div>
  );
};

export default PersistentVolumes;
