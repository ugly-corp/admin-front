import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

const apiUrl =
  import.meta.env.VITE_SIMPLE_REST_URL + import.meta.env.VITE_URL_PATH;
const httpClient = fetchUtils.fetchJson;

export default {
  getMany: async (resource, params) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const { json } = await httpClient(url, { signal: params.signal });
    return { data: json };
  },
};
