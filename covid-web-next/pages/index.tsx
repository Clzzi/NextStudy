import Card from "components/Card";
import Title from "components/Title";
import { getAllCondition } from "lib/apis";
import { SyncTimeAtom } from "lib/atom";
import { ECardTitles } from "lib/enum";
import { GetAllCondition } from "lib/types";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import FadeIn from "react-fade-in";
import cx from "styles/Main.module.scss";

const Main = ({ data }: { data: GetAllCondition }): JSX.Element => {
  const {
    TotalCase,
    TotalCaseBefore,
    TodayRecovered,
    TodayDeath,
    TotalDeath,
    NowCase,
    TotalRecovered,
    checkingCounter,
    updateTime,
  } = data;

  const [time, setTime] = useRecoilState(SyncTimeAtom);

  useEffect(() => {
    if (updateTime) {
      setTime(updateTime.slice(23, 34));
    }
  }, [updateTime, setTime]);

  return (
    <FadeIn>
      <div className={cx.Main}>
        <Title content={`${TotalCase} 명`} number={`+ ${TotalCaseBefore}`} />
        <FadeIn>
          <div className={cx.FirstCardWrap}>
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
        </FadeIn>
      </div>
    </FadeIn>
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
