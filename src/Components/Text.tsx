import React from "react";

const Text = <C extends React.ElementType>({
  as,
  children,
}: {
  as?: C;
  children: React.ReactNode;
}) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

export default Text;
