import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
  BooleanField,
  ImageField,
  ReferenceField,
  FunctionField,
  ReferenceManyField,
  Datagrid,
  NumberField,
  EmailField,
} from "react-admin";

export default function UserShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" label="Имя" />
        <EmailField source="email" />
        <ImageField source="avatar" />
        <ReferenceManyField reference="post" target="user_id" label="Посты пользователя">
          <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ImageField source="photo" />
            <BooleanField source="is_published" />
            <NumberField source="views_counter" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
}
