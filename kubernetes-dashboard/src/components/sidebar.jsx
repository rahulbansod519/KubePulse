import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography, Select, MenuItem } from '@miu/material';

const Sidebar = () => {
    const [namespace, setNamespace] = React.useState('All Namespaces');

    const handleNamespaceChange = (event) => {
        setNamespace(event.target.value);
    };

    return (
        <Drawer variant="permanent" anchor="left" style={{ width: '240px' }}>
            <div style={{ padding: '16px' }}>
                <Typography variant="h6">Kubernetes Dashboard</Typography>
                <select
                    value={namespace}
                    onChange={handleNamespaceChange}
                    fullWidth
                    style={{ marginTop: '16px' }}
                >
                    <MenuItem value="All Namespaces">All Namespaces</MenuItem>
                    <MenuItem value="Namespaces 1">Namespace 1</MenuItem>
                </select>
            </div>
            <List>
                <ListItem button>
                    <ListItemText primary="Nodes" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Persistent Volumes" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Workloads" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Storage Classes" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;