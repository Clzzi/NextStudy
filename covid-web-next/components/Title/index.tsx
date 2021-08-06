import cx from "styles/Title.module.scss";
interface TitleProps {
  country?: string;
  content: string;
  number: string;
}

const Title = (TitleProps: TitleProps): JSX.Element => {
  return (
    <div className={cx.Title}>
      <div className={cx.Top}>
        <div className={cx.TopTitle}>현재까지</div>
        {TitleProps.country && (
          <div className={cx.TopSubTitle}>{TitleProps.country}</div>
        )}
      </div>
      <div className={cx.People}>{TitleProps.content}</div>
      <div className={cx.Number}>( {TitleProps.number} )</div>
    </div>
  );
};

export default Title;
