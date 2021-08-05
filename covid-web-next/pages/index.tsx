import Card from "components/Card";
import Title from "components/Title";
import cx from "styles/Main.module.scss";

const Main = () => {
  return (
    <div className={cx.Main}>
      <Title />
      <Card title={"완치자"} subTitle={"+ 1596"} content={"180,719 명"} />
    </div>
  );
};

export default Main;
