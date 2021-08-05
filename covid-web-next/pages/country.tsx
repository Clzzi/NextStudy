import ButtonLists from "components/ButtonLists";
import Card from "components/Card";
import Title from "components/Title";
import { getCountryCondition } from "lib/apis";
import { ButtonAtom } from "lib/atom";
import { ECardTitles, ECountryToEn } from "lib/enum";
import { GetCountryCondition } from "lib/types";
import { useRecoilState } from "recoil";
import FadeIn from "react-fade-in";
import cx from "styles/Country.module.scss";

const Country = ({ data }: { data: GetCountryCondition }): JSX.Element => {
  const [value, setValue] = useRecoilState<string>(ButtonAtom);
  const country = ECountryToEn[value as keyof typeof ECountryToEn];
  const content = data[country].totalCase;
  const newCase = data[country].newCase;

  return (
    <div className={cx.Country}>
      <ButtonLists />
      <FadeIn>
        <Title
          content={`${content} 명`}
          country={value}
          number={`+ ${newCase}`}
        />
        <div className={cx.CardWrap}>
          <Card
            title={ECardTitles["recovered" as keyof typeof ECardTitles]}
            subTitle={`+ ${data[country].recovered}`}
            content={`${data[country].newCase} 명`}
          />
          <Card
            title={ECardTitles["death" as keyof typeof ECardTitles]}
            content={`${data[country].death} 명`}
          />
        </div>
        <div className={cx.CardWrap}>
          <Card
            title={ECardTitles["percentage" as keyof typeof ECardTitles]}
            content={`${data[country].percentage} %`}
          />
          <Card
            title={ECardTitles["Donate" as keyof typeof ECardTitles]}
            content={`대구 508139166662`}
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default Country;

export const getServerSideProps = async () => {
  const res = await getCountryCondition();
  return {
    props: {
      data: res,
    },
  };
};
