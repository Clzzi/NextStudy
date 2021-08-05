import { FC } from "react";
import cx from "styles/Nav.module.scss";
import Link from "next/Link";
import { SyncTimeAtom } from "lib/atom";
import { useRecoilState } from "recoil";

const Nav: FC = () => {
  const [time, setTime] = useRecoilState(SyncTimeAtom);
  return (
    <div className={cx.Nav}>
      <div className={cx.Top}>
        <div className={cx.Title}>COVID</div>
      </div>
      <div className={cx.Content}>
        <div className={cx.ContentTopTitle}>{`${time} 동기화`}</div>
        <ul className={cx.ContentLists}>
          <li className={cx.ContentList}>
            <Link href="/">
              <a>국내 총 현황</a>
            </Link>
          </li>
          <li className={cx.ContentList}>
            <Link href="/country">
              <a>국내 시도별 현황</a>
            </Link>
          </li>
        </ul>
        <div className={cx.Bottom}>
          Created By{" "}
          <strong>
            <Link href="https://github.com/Clzzi">@Clzzi</Link>
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Nav;
