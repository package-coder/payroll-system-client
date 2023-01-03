import React from 'react'
import { useOutlet } from 'react-router'
import Container from "@mui/material/Container";
import UserTable from "../features/user/components/UserTable";

const UserPage = () => {
  const outlet = useOutlet()

  if(outlet) return outlet

  return (
    <Container maxWidth='md'>
      <UserTable  />
    </Container>
  );
};

export default UserPage