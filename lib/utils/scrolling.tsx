export const handleScrollGoTo = (arg: string) => {
  document.getElementById(arg)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
