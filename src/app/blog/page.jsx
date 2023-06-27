import { getStrapiURL } from "@/helpers/api-helper";
import { fetchApi } from "@/helpers/fetch-api";

const getData = async () => {
  const path = "/news";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: 1,
      pageSize: 2,
    },
  };
  const { data, meta } = await fetchApi(path, urlParamsObject);

  return {
    data,
    pagination: meta.pagination,
  };
};
const Blog = async () => {
  const { data } = await getData();
  return (
    <div>
      <h1>Blog</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Blog;
