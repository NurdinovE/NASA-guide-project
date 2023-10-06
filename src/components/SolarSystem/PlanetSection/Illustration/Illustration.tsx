import { Illustration, Image } from "./IllustrationStyles";

const IllustrationContainer = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: "20deg",
      x: 2000
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      x: 0,
      transition: { delay: 1, duration: 1.5 }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      rotate: "-20deg",
      x: -200,
      transition: { duration: 1 }
    }
  };

  return (
    <Illustration
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
    </Illustration>
  );
};

export default IllustrationContainer;
