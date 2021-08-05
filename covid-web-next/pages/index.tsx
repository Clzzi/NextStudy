import Button from "components/Button";
import Card from "components/Card";
import Title from "components/Title";
import cx from "styles/Main.module.scss";

const Main = () => {
  return (
    <div className={cx.Main}>
      <Title content="205, 702 명" number="- 61" />
      <Card title="완치자" subTitle="+ 1596" content="180,719 명" />
      <Button content="대구" active={false} />
    </div>
  );
};

export default Main;
