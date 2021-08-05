import Button from "components/Button";
import { ButtonAtom } from "lib/atom";
import cx from 'styles/BtnLists.module.scss';
import { useRecoilState } from "recoil";

const ButtonLists = () => {
  const [value, setValue] = useRecoilState(ButtonAtom);
  const onChange = (name: string) => {
    setValue(name);
  };

  return (
    <div className={cx.BtnLists}>
      <Button
        content="서울"
        active={"서울" === value}
        onClick={() => onChange("서울")}
      />
      <Button
        content="경기"
        active={"경기" === value}
        onClick={() => onChange("경기")}
      />
      <Button
        content="대구"
        active={"대구" === value}
        onClick={() => onChange("대구")}
      />
      <Button
        content="부산"
        active={"부산" === value}
        onClick={() => onChange("부산")}
      />
      <Button
        content="제주"
        active={"제주" === value}
        onClick={() => onChange("제주")}
      />
    </div>
  );
};

export default ButtonLists;
