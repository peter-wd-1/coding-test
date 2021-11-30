export const variants = {
  hidden: {
    opacity: 0,
    x: -40,
    y: -20,
    transition: {
      duration: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
  visible: (i) => ({
    display: "block",
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

const path = [
  "M 0 0 L 15 0 C 17 21 12 21 0 19 L 0 19",
  "M 0 0 L 12 0 C 12 0 7 0 0 0 L 0 0",
];

export const navBackVariants = {
  open: {
    d: path[0],
  },
  close: {
    d: path[1],
  },
};
