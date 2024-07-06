import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e:MouseEvent) => {
      setMousePosition({
        x:e.clientX,
        y:e.clientY
      })
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
    }
  }


  return <motion.div className="cursor"    variants={variants}
  animate={cursorVariant}></motion.div>;
};

export default Cursor;
