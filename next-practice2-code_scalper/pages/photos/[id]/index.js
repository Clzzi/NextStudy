import Image from "next/image";
import Link from "next/link";

const Index = ({ photo }) => {
  const { title, url } = photo;

  return (
    <div>
      <h2>{title}</h2>
      <Image width={500} height={500} src={url} />
      <Link href="/photos">
        <a>go back</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/2`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],
    fallback: false,
  };
};

export default Index;
