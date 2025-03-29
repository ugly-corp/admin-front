import { stringify } from "query-string";
import categoryProvider from "./dataProviders/categoryProvider";
import defaultProvider from "./dataProviders/defaultProvider";
import { httpClient } from "#app-http/httpClient";

const apiUrl =
  import.meta.env.VITE_SIMPLE_REST_URL + import.meta.env.VITE_URL_PATH;

export default {
  getList: async (resource, params) => {
    console.log(params);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      limit: perPage,
      offset: page,
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json, headers } = await httpClient(url, { signal: params.signal });
    console.log(json);
    return {
      data: json.data,
      total: json.meta.total,
      meta: json.meta,
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, { signal: params.signal });
    return { data: json.data };
  },

  getMany: async (resource, params) => {
    switch (resource) {
      case "category":
        return categoryProvider.getMany(resource, params);
      default:
        return defaultProvider.getMany(resource, params);
    }
  },

  getManyReference: async (resource, params) => {
    console.log("params", params);
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      [params.target]: params.id,
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json, headers } = await httpClient(url, { signal: params.signal });
    return {
      data: json.data,
      total: json.meta.total,
      meta: json.meta,
    };
  },

  create: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  updateMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
    });
    return { data: json };
  },

  deleteMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },
};
