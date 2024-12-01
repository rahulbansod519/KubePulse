import React, { useState } from 'react';
import WorkloadTable from '../components/WorkloadTable';
import DetailPane from '../components/DetailPane';

// Sample data for selected workload (This should ideally come from the API when clicked)
const sampleData = {
  name: 'Deployment-1',
  type: 'Deployment',
  status: 'Running',
  createdAt: '2024-12-01',
  pods: 3,
  replicas: 3,
  resources: {
    cpu: '500m',
    memory: '1Gi',
  },
  logs: [
    'Pod created successfully',
    'Deployment rolled out',
    'Pods restarted due to scaling',
  ],
};

const Workloads = () => {
  const [selectedWorkload, setSelectedWorkload] = useState(null);

  // Handle workload selection
  const handleWorkloadSelect = (workload) => {
    setSelectedWorkload(workload);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>Workloads Overview</h1>
        <WorkloadTable onSelect={handleWorkloadSelect} />
      </div>
      <div style={{ flex: 1, paddingLeft: '20px' }}>
        {selectedWorkload ? <DetailPane workload={selectedWorkload} /> : <p>Select a workload to view details</p>}
      </div>
    </div>
  );
};

export default Workloads;
