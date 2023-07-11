import { News } from "@/app/interfaces/news";
import Image from "next/image";
import Link from "next/link";
interface Props {
  news: News;
}

const CardNew = ({ news }: Props) => {
  const { title, description, createdAt, image, key } = news.attributes;
  const { url, width, height } = image.data[0].attributes.formats.thumbnail;

  return (
    <div key={key} className="shadow-lg px-5 py-5 my-6">
      <div className="flex justify-center">
        <Image src={url} alt={`image${title}`} width={width} height={height} />
      </div>
      <Link href={`/blog/${key}`}>
        <p className="text-3xl pb-2 text-slate-500">{title}</p>
      </Link>
      <p className="text-1xl">{description}</p>
      <p className="text-end text-xs">{createdAt}</p>
    </div>
  );
};

export default CardNew;
