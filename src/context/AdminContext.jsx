import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

const initialUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "admin", status: "active", lastLogin: "2024-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "moderator", status: "active", lastLogin: "2024-01-14" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "user", status: "inactive", lastLogin: "2024-01-10" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "user", status: "active", lastLogin: "2024-01-13" },
];

export const AdminProvider = ({ children }) => {
  const [users, setUsers] = useState(initialUsers);

  return (
    <AdminContext.Provider value={{ users, setUsers }}>
      {children}
    </AdminContext.Provider>
  );
}; 