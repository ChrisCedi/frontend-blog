import { fetchApi } from "@/helpers/fetch-api";
import CardNew from "../components/CardNew/CardNew";
import { News } from "../interfaces/news";
import { NextPage } from "next";
const getData = async () => {
  const path = "/news";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: 1,
      pageSize: 10,
    },
  };
  const opctions = {};
  const { data, meta } = await fetchApi(path, urlParamsObject, opctions);

  return {
    data,
    pagination: meta.pagination,
  };
};
const Blog: NextPage = async () => {
  const { data } = await getData();

  console.log(data);

  return (
    <div>
      <h1>Blog</h1>
      <div className="flex justify-center flex-col rounded-3xl">
        {data.map((item: News) => (
          <CardNew news={item} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
