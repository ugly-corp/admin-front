import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import dataProvider from "./dataProvider";
import { authProvider } from "./authProvider";
import { PostList } from "#app-pages/Post";
import { CategoryList } from "#app-pages/Category";
import { UserList } from "#app-pages/Users";

export const App = () => (
  <Admin
    layout={Layout}
    dataProvider={dataProvider}
    authProvider={authProvider}
    disableTelemetry
  >
    <Resource
      name="post"
      list={PostList}
      edit={EditGuesser}
      show={ShowGuesser}
      options={{ label: 'Посты' }}
    />
    <Resource
      name="category"
      list={CategoryList}
      edit={EditGuesser}
      show={ShowGuesser}
      options={{ label: 'Категории' }}
    />
    <Resource
      name="user"
      list={UserList}
      edit={EditGuesser}
      show={ShowGuesser}
      options={{ label: 'Пользователи' }}
    />
  </Admin>
);
