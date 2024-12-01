import React, { useState } from 'react';
import { List, ListItem, ListItemText, Divider, Menu, MenuItem, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openNamespaces, setOpenNamespaces] = useState(false);

  // Sample list of namespaces
  const namespaces = ['default', 'kube-system', 'kube-public'];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleNamespaces = () => {
    setOpenNamespaces(!openNamespaces);
  };

  return (
    <div style={{ width: 250, backgroundColor: '#f4f4f4', height: '100vh', padding: '20px' }}>
      <List>
        {/* Navigation Links */}
        <ListItem button component={Link} to="/workloads">
          <ListItemText primary="Workloads" />
        </ListItem>
        <ListItem button component={Link} to="/persistent-volumes">
          <ListItemText primary="Persistent Volumes" />
        </ListItem>
        <ListItem button component={Link} to="/roles">
          <ListItemText primary="Roles" />
        </ListItem>
        <ListItem button component={Link} to="/storage-classes">
          <ListItemText primary="Storage Classes" />
        </ListItem>

        {/* Namespaces Dropdown */}
        <ListItem button onClick={toggleNamespaces}>
          <ListItemText primary="Namespaces" />
          {openNamespaces ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={openNamespaces} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {namespaces.map((namespace, index) => (
              <ListItem button key={index} component={Link} to={`/namespaces/${namespace}`}>
                <ListItemText primary={namespace} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        
        <Divider />

        {/* Additional Items */}
        <ListItem button component={Link} to="/logs">
          <ListItemText primary="Logs" />
        </ListItem>
        <ListItem button component={Link} to="/metrics">
          <ListItemText primary="Metrics" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
