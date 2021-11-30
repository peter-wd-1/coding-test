export const variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 + i * 0.05,
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
