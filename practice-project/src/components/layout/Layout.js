import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className='mx-auto my-12 w-5/6 max-w-lg lg:max-w-xl'>{children}</main>
    </Fragment>
  );
};

export default Layout;
