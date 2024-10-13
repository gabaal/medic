import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>Dashboard only layout</h2>
      {children}
    </div>
  );
}
