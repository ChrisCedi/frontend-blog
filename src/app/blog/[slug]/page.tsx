import { fetchApi } from "@/helpers/fetch-api";

const getData = async (key: string) => {
  const path = "/news";
  const urlParamsObject = {
    populate: "image",
    filters: {
      key: key,
    },
  };

  const data = await fetchApi(path, urlParamsObject);
  return data;
};

interface Props {
  params: {
    slug: string;
  };
}
const Slug = async ({ params }: Props) => {
  const { slug } = params;
  const data = await getData(slug);
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Slug;
