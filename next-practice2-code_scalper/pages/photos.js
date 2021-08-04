import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import photosStyles from "../styles/photos.module.css";
import Link from "next/link";

const Photo = ({ photos }) => {
  return (
    <div>
      <HeadInfo title="my blog/photo" />
      <h1>my blog photos</h1>
      <ul className={photosStyles.photos}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`} >
              <a>
                <Image
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.title}
                />
                <span>{photo.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export default Photo;
