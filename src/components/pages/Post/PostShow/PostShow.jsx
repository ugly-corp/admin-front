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
} from "react-admin";

export default function PostShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="title" />
        <RichTextField source="description" />
        <BooleanField source="is_published" label="Опубликовано" />
        <ImageField source="photo" />

        <FunctionField
          source="user"
          label="Автор"
          render={(record) => (
            <>
              <TextField source="user.name" />
              <ImageField source="user.avatar" />
            </>
          )}
        />

        <FunctionField
          source="user"
          label="Категории"
          render={(record) => record.categories.map((it) => it.name).join(", ")}
        />
      </SimpleShowLayout>
    </Show>
  );
}
