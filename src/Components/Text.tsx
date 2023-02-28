import React from "react";

type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

const Text = <C extends React.ElementType = "span">({
  as,
  children,
  ...props
}: TextProps<C>) => {
  const Component = as || "span";
  return <Component {...props}>{children}</Component>;
};

export default Text;
