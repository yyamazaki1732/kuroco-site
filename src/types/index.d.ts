declare module "*.svg" {
  import React from "react";
  interface SvgComponentProps extends React.SVGProps<SVGElement> {
    className: string;
    title: string;
  }

  const content: React.FC<SvgComponentProps>;
  export default content;
}
