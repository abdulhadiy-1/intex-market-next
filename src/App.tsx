import { useCookies } from "react-cookie";
import AuthRoutes from "./routes/AuthRoutes";
import Layout from "./features/Layout";

function App() {
  const [cookie] = useCookies(["accessToken"]);
  return <>{cookie.accessToken ? <Layout /> : <AuthRoutes />}</>;
}

export default App;
