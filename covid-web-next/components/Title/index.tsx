import cx from "styles/Title.module.scss";

interface TitleProps {
  country?: string;
}

const Title = (TitleProps: TitleProps): JSX.Element => {
  return (
    <div className={cx.Title}>
      <div className={cx.Top}>
        <div className={cx.TopTitle}>현재까지</div>
        {TitleProps.country && <div className={cx.TopSubTitle}>대구</div>}
      </div>
      <div className={cx.People}>205,702 명</div>
      <div className={cx.Number}>( + 121 )</div>
    </div>
  );
};

export default Title;
