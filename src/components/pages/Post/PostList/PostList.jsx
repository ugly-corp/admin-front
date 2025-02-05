import {
  List,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  NumberField,
  ImageField,
  ChipField,
  FunctionField,
} from "react-admin";

export default function PostList() {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <ImageField source="photo" />
        <TextField source="description" />
        <NumberField source="views_counter" label="Просмотры" />
        <BooleanField source="is_published" label="Опубликован" />
        <FunctionField
          source="categories"
          render={(record) => record.categories.map((it) => it.name).join(", ")}
          label="Категории"
        />
        <TextField source="user.name" label="Пользователь" />

        {/* <DateField source="published_at" /> */}
      </Datagrid>
    </List>
  );
}
