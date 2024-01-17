import { ReactNode } from "react";
import { Header } from "../../../components";
import { StyledPage } from "./styles";
import { IntlProvider } from "react-intl";
import messages from "../../../locales";
import { flatten } from "flat";
import { useSelector } from "react-redux";
import { RootState } from "../../../reduxStore/@types";

interface PageProps {
  children: ReactNode;
}

function Page(props: PageProps) {
  const storeData = useSelector((state: RootState) => state.venue);
  return (
    <IntlProvider
      locale={storeData.locale}
      messages={flatten(messages[storeData.locale])}
    >
      <StyledPage>
        <Header />
        <div className="content">
          <div className="container">{props.children}</div>
        </div>
      </StyledPage>
    </IntlProvider>
  );
}

export { Page };
