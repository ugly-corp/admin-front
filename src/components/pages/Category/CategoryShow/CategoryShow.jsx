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
} from "react-admin";

export default function CategoryShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" label="Название категории" />
        <ImageField source="photo" />
        <ReferenceManyField reference="post" target="category_id" label="Посты">
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
