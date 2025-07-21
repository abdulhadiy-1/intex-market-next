import { Route, Routes } from "react-router-dom";
import { HomeRouteList } from "../hooks/paths";
import Navbar from "../modules/Navbar";
import Header from "../modules/Header";

const Layout = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="w-full">
        <Header />
        <Routes>
          {HomeRouteList.map((item) => (
            <Route key={item.id} path={item.path} element={item.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
