import cx from "styles/Card.module.scss";

interface CardProps {
  title: string;
  subTitle?: string;
  content: string;
}

const Card = (CardProps: CardProps): JSX.Element => {
  return (
    <div className={cx.Card}>
      <div className={cx.Top}>
        <div className={cx.Title}>{CardProps.title}</div>
        {CardProps.subTitle && (
          <div className={cx.SubTitle}>( {CardProps.subTitle} )</div>
        )}
      </div>
      <div className={cx.Content}>{CardProps.content}</div>
    </div>
  );
};

export default Card;
