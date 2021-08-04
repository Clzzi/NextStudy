import Head from "next/head";

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} content={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Welcome to Clzzi's Blog",
  contents: "blog to show code",
};

export default HeadInfo;
