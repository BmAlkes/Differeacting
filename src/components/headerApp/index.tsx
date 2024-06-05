import { Link } from "react-router-dom";
import logo from "../../assets/svg/Logo2.svg";
import NavMenu from "../NavMenu";

const HeaderApp = () => {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row-reverse justify-between items-center">
          <div className="w-64">
            <Link to="/dashboard">
            <img src={logo} alt="logo" />
            </Link>
          </div>
          <NavMenu />
        </div>
      </header>
    </>
  );
};

export default HeaderApp;
