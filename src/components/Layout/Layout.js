import React from "react";

export default function Layout({ children }) {
  console.log(children);
  return <div class={"page-wrapper"}>{children}</div>;
}
