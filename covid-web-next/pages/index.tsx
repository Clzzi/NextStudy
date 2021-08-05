import Card from "components/Card";
import Title from "components/Title";
import { getAllCondition } from "lib/apis";
import { ECardTitles } from "lib/enum";
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
  const {
    TotalCase,
    TotalCaseBefore,
    TodayRecovered,
    TodayDeath,
    TotalDeath,
    NowCase,
    TotalRecovered,
    checkingCounter,
  } = data;
  return (
    <div className={cx.Main}>
      <Title content={`${TotalCase} 명`} number={`+ ${TotalCaseBefore}`} />
      <div className={cx.CardWrap}>
        <Card
          title={ECardTitles["TotalRecovered" as keyof typeof ECardTitles]}
          subTitle={`+ ${TodayRecovered}`}
          content={`${TotalRecovered} 명`}
        />
        <Card
          title={ECardTitles["TotalDeath" as keyof typeof ECardTitles]}
          subTitle={`+ ${TodayDeath}`}
          content={`${TotalDeath} 명`}
        />
      </div>
      <div className={cx.CardWrap}>
        <Card
          title={ECardTitles["NowCase" as keyof typeof ECardTitles]}
          content={`${NowCase} 명`}
        />
        <Card
          title={ECardTitles["checkingCounter" as keyof typeof ECardTitles]}
          content={`${checkingCounter} 명`}
        />
      </div>
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
