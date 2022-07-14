import React, { ReactNode, FunctionComponent } from "react";

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Layout;
