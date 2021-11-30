export const variants = {
  hidden: {
    opacity: 0,
    x: -40,
    y: -20,
    transition: {
      duration: 0.1,
    },
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.34 + i * 0.05,
    },
  }),
};

export const navVariants = {
  ...variants,
  visible: {
    opacity: 1,
    x: 0,
  },
};
