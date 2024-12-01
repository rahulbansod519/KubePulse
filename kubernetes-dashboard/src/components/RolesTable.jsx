import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Sample data for Roles (replace with real data later)
const sampleRoles = [
  { name: 'admin-role', namespace: 'default', permissions: 'Admin' },
  { name: 'read-only-role', namespace: 'default', permissions: 'ReadOnly' },
];

const RolesTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="roles table">
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell>Namespace</TableCell>
            <TableCell>Permissions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleRoles.map((role) => (
            <TableRow key={role.name}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.namespace}</TableCell>
              <TableCell>{role.permissions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RolesTable;
