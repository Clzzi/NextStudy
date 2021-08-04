import Link from "next/link";
import navStyles from '../styles/nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav} >
      <ul>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>photos</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
