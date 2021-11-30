export const animationVariants = {
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
