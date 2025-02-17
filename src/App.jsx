import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import dataProvider from "./providers/dataProvider";
import { authProvider } from "./providers/authProvider";
import { PostList, PostShow } from "#app-pages/Post";
import { CategoryList, CategoryShow } from "#app-pages/Category";
import { UserList, UserShow } from "#app-pages/Users";

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
      show={PostShow}
      options={{ label: "Посты" }}
    />
    <Resource
      name="category"
      list={CategoryList}
      edit={EditGuesser}
      show={CategoryShow}
      options={{ label: "Категории" }}
    />
    <Resource
      name="user"
      list={UserList}
      edit={EditGuesser}
      show={UserShow}
      options={{ label: "Пользователи" }}
    />
  </Admin>
);
