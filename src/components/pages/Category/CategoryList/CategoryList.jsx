import {
  List,
  Datagrid,
  TextField,
  ImageField,
} from "react-admin";

export default function CategoryList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="photo" />
      </Datagrid>
    </List>
  );
}
