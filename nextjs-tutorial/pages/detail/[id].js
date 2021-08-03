import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { Loader } from "semantic-ui-react";
import Item from "../../src/components/Item";

const Post = ({ item }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div stlye={{ padding: "100px 0" }}>
        <Loader active inline="centered">
          loading
        </Loader>
      </div>
    );
  }

  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    // paths: [{ params: { id: "495" } }],
    path: data.slice(0, 9).map((item) => ({
      params: { id: item.id.toString() },
    })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
    },
  };
};
