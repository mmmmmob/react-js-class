import Navbar from "./Nav";

// create a mother div with fixed component(s) we want then apply {children} to use other elements inside the componet we imported Layout to use
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
