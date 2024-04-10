import logo from "../../assets/svg/Logo3.svg";

const Loader = () => {
  return (
    <div className="loader h-screen w-full bg-black absolute top-0 z-50">
      <div className="intern">
        <img src={logo} alt="logo site" className="w-[200px]" />
      </div>
      <div className="external-shadow">
        <div className="central"></div>
      </div>
    </div>
  );
};

export default Loader;
