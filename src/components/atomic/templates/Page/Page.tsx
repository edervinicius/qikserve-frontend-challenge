import { ReactNode } from "react";
import { Header } from "../../../../components";
import "./styles.css";

interface PageProps {
  children: ReactNode;
}

function Page(props: PageProps) {
  return (
    <div className="page">
      <Header />
      <div className="content">
        <div className="container">{props.children}</div>
      </div>
    </div>
  );
}

export { Page };
