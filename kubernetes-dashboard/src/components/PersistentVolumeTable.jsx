import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sample data for Persistent Volumes (replace with real data later)
const sampleVolumes = [
  { name: 'pv-1', capacity: '100Gi', accessMode: 'ReadWriteOnce', status: 'Bound' },
  { name: 'pv-2', capacity: '200Gi', accessMode: 'ReadWriteMany', status: 'Available' },
];

const PersistentVolumeTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="persistent volume table">
        <TableHead>
          <TableRow>
            <TableCell>Volume Name</TableCell>
            <TableCell>Capacity</TableCell>
            <TableCell>Access Mode</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleVolumes.map((volume) => (
            <TableRow key={volume.name}>
              <TableCell>{volume.name}</TableCell>
              <TableCell>{volume.capacity}</TableCell>
              <TableCell>{volume.accessMode}</TableCell>
              <TableCell>{volume.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersistentVolumeTable;
