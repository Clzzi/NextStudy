import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header, Loader } from "semantic-ui-react";
import ItemList from "../src/components/ItemList";

export default function Home() {
  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const getData = () => {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
      setLists(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, [API_URL]);

  return (
    <div>
      <Head>
        <title>HOME | Clzzi</title>
        <meta name="description" content="Clzzi 홈 입니다."></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
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
        </>
      )}
    </div>
  );
}
