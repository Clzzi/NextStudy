import HeadInfo from "./HeadInfo";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <HeadInfo />
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
