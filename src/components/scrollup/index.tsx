import "./scrollup.css";
import { HiOutlineArrowSmUp } from "react-icons/hi";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp?.classList.add("show-scroll");
    else scrollUp?.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <HiOutlineArrowSmUp
        className="scrollup__icon"
        aria-label="button to scroll the page up"
      />
    </a>
  );
};

export default ScrollUp;
