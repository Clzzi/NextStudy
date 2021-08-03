import axios from "axios";
import Head from "next/head";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";

export default function Home({ lists }) {
  return (
    <div>
      <Head>
        <title>HOME | Clzzi</title>
        <meta name="description" content="Clzzi 홈 입니다."></meta>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList lists={lists.slice(0, 9)} />

      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList lists={lists.slice(9)} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      lists: data,
    },
  };
};
