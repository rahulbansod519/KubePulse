import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sample data for Storage Classes (replace with real data later)
const sampleStorageClasses = [
  { name: 'standard', provisioner: 'kubernetes.io/aws-ebs', reclaimPolicy: 'Retain' },
  { name: 'fast-storage', provisioner: 'kubernetes.io/gce-pd', reclaimPolicy: 'Delete' },
];

const StorageClassesTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="storage classes table">
        <TableHead>
          <TableRow>
            <TableCell>Storage Class Name</TableCell>
            <TableCell>Provisioner</TableCell>
            <TableCell>Reclaim Policy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleStorageClasses.map((storageClass) => (
            <TableRow key={storageClass.name}>
              <TableCell>{storageClass.name}</TableCell>
              <TableCell>{storageClass.provisioner}</TableCell>
              <TableCell>{storageClass.reclaimPolicy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StorageClassesTable;
