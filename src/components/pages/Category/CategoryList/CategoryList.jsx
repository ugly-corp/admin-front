import {
  List,
  Datagrid,
  TextField,
  ImageField,
  NumberField,
} from "react-admin";

export default function CategoryList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <ImageField source="photo" />
        <NumberField source="posts_count" label='Кол-во постов'/>
      </Datagrid>
    </List>
  );
}
