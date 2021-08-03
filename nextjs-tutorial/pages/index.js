import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";

export default function Home() {
  const [lists, setLists] = useState([]);
  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setLists(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | Clzzi</title>
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
