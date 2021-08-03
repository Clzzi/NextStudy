import { Grid } from "semantic-ui-react";
import Link from "next/link";
import styles from "./ItemList.module.css";

const ItemList = ({ lists }) => {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {lists.map((list, i) => (
            <Grid.Column key={i}>
              <Link as={`/view/${list.id}`} href="/view/[id]">
                <a>
                  <div className={styles.wrap}>
                    <img
                      src={list.image_link}
                      alt={list.name}
                      className={styles.img_item}
                    />
                    <strong className={styles.tit_item}>{list.name}</strong>
                    <strong className={styles.txt_info}>
                      {list.category} {list.product_type}
                    </strong>
                    <strong className={styles.num_price}>${list.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default ItemList;
