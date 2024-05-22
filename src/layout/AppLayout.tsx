import React, { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root>
      <main>{children}</main>
    </ReactLenis>
  );
};

export default AppLayout;
