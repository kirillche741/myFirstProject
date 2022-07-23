import React, { ReactNode, FunctionComponent } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
