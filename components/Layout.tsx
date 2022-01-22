import Head from "next/head";
import Link from "next/link";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const Layout = ({ children, title = "Crypto Tracker" }: ILayoutProps) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" passHref>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <img
              style={{ width: "200px" }}
              src="https://pic.onlinewebfonts.com/svg/img_456609.png"
            />
          </div>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
