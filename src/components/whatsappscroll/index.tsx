import { FaWhatsapp } from "react-icons/fa";
import style from "./styled.module.css";

const WhatsApp = () => {
  return (
    <div className={style.btn}>
      <a
        href="https://api.whatsapp.com/send?phone=9720549547355&text=I%20want%20to%20talk%20about%20a%20project"
        className={style.btnWhatapp}
        target="_blank"
        aria-label="Whats app for contact"
      >
        <FaWhatsapp size={30} color="#fff" />
        <span className={style.tooltip}>Talk with us</span>
      </a>
    </div>
  );
};

export default WhatsApp;
