export const H1 = ({ children, color = "text-white" }) => {
  return <h1 className={`${color} text-6xl mb-5`}>{children}</h1>;
};
