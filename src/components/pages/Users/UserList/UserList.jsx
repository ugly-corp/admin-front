import { List, Datagrid, TextField, ImageField, EmailField } from "react-admin";

export default function UserList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <ImageField source="avatar" />
      </Datagrid>
    </List>
  );
}
