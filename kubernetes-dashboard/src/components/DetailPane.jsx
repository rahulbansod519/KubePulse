import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';

// Sample data for the selected workload (replace with real data)
const workloadDetails = {
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

const DetailPane = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{workloadDetails.name}</Typography>
        <Typography variant="body1">Type: {workloadDetails.type}</Typography>
        <Typography variant="body1">Status: {workloadDetails.status}</Typography>
        <Typography variant="body1">Created At: {workloadDetails.createdAt}</Typography>
        <Divider style={{ margin: '16px 0' }} />
        <Typography variant="body2">Pods: {workloadDetails.pods}</Typography>
        <Typography variant="body2">Replicas: {workloadDetails.replicas}</Typography>
        <Typography variant="body2">
          Resources: {workloadDetails.resources.cpu} CPU, {workloadDetails.resources.memory} Memory
        </Typography>
        <Divider style={{ margin: '16px 0' }} />
        <Typography variant="h6">Logs:</Typography>
        <ul>
          {workloadDetails.logs.map((log, index) => (
            <li key={index}>
              <Typography variant="body2">{log}</Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default DetailPane;
