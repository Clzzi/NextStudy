import Button from "components/Button";
import Card from "components/Card";
import Title from "components/Title";
import { getAllCondition } from "lib/apis";
import cx from "styles/Main.module.scss";

interface GetAllCondition {
  resultCode: string;
  TotalCase: string;
  TotalRecovered: string;
  TotalDeath: string;
  NowCase: string;
  city1n: string;
  city2n: string;
  city3n: string;
  city4n: string;
  city5n: string;
  city1p: string;
  city2p: string;
  city3p: string;
  city4p: string;
  city5p: string;
  recoveredPercentage: number;
  deathPercentage: number;
  checkingCounter: string;
  checkingPercentage: string;
  caseCount: string;
  casePercentage: string;
  notcaseCount: string;
  notcasePercentage: string;
  TotalChecking: string;
  TodayRecovered: string;
  TodayDeath: string;
  TotalCaseBefore: string;
  source: string;
  updateTime: string;
  resultMessage: string;
}

const Main = ({ data }: { data: GetAllCondition }) => {
  console.log(data);
  return (
    <div className={cx.Main}>
      <Title
        content={`${data.TotalCase} 명`}
        number={`+ ${data.TotalCaseBefore}`}
      />
      <Card title="완치자" subTitle="+ 1596" content="180,719 명" />
      {/* <Button content="대구" active={false} /> */}
    </div>
  );
};

export default Main;

export const getServerSideProps = async () => {
  const res = await getAllCondition();
  return {
    props: {
      data: res,
    },
  };
};
