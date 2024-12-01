import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sample data for Workloads (replace with real data later)
const sampleData = [
  { name: 'Deployment-1', type: 'Deployment', status: 'Running', pods: 3, replicas: 3 },
  { name: 'CronJob-1', type: 'CronJob', status: 'Completed', pods: 1, replicas: 1 },
  { name: 'StatefulSet-1', type: 'StatefulSet', status: 'Running', pods: 2, replicas: 2 },
];

const WorkloadTable = ({ onSelect }) => {

  // Handle row click
  const handleRowClick = (workload) => {
    onSelect(workload);  // Pass the selected workload to the parent
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="workload table">
        <TableHead>
          <TableRow>
            <TableCell>Workload Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Pods</TableCell>
            <TableCell>Replicas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((workload) => (
            <TableRow key={workload.name} onClick={() => handleRowClick(workload)} style={{ cursor: 'pointer' }}>
              <TableCell>{workload.name}</TableCell>
              <TableCell>{workload.type}</TableCell>
              <TableCell>{workload.status}</TableCell>
              <TableCell>{workload.pods}</TableCell>
              <TableCell>{workload.replicas}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkloadTable;
