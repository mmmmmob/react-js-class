// !! don't forget to import!!
import Layout from "./Layout";
import Navbar from "./Nav";
// ^ this is unused since we moved <Navbar/> to Layout.jsx already

// use layout as a main render area => layour is another component with fixed component inside like navbar or footer or ... (see ./Layout.jsx)
const Login = () => {
  return (
    // return <Layout></Layout> as the mother element (it has a closing tag! don't forget!) and put another component inside as a children
    <Layout>
      <div>Login</div>
    </Layout>
  );
};

export default Login;
