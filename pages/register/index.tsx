import UserForm from "@/components/UserForm/UserForm";
import UserList from "@/components/UserList/UserList";
import React, { useState } from "react";

export interface IUser {
  email: string;
  name: string;
}

export interface ListUsers {
  users: IUser[] | undefined;
}

export default function Register() {
  const [users, setUsers] = useState<IUser[]>([]);

  const onUserAdd = (user: IUser) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />;
      <UserList users={users as IUser[]} />
    </div>
  );
}
