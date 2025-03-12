import React from 'react';
import { logout } from '../api/auth';

function LogoutButton() {
  const handleLogout = () => {
    logout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;