const getData = async () => {
  const response = await fetch(
    "https://strapi-production-1a17.up.railway.app/api/news",
    {
      next: { revalidate: 0 },
    }
  );
  const data = await response.json();

  console.log(data);

  return data;
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
