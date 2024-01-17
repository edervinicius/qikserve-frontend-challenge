import { isMobile } from "react-device-detect";
import { useIntl } from "react-intl";
import { StyledHeader } from "./styles";
import { useTheme } from "../../../hooks";
import { MenuIcon } from "../../../components";

function Header() {
  const intl = useIntl();
  const { navBackgroundColour, bannerImage } = useTheme();

  return (
    <StyledHeader
      $navBackgroundColour={navBackgroundColour}
      $bannerImage={bannerImage}
    >
      {isMobile ? (
        <nav className="menuMobile">
          <div className="item">
            {intl.formatMessage({ id: "components.header.nav.menu" })}
          </div>
          <div className="menuIcon">
            <MenuIcon color="white" size={16} />
          </div>
        </nav>
      ) : (
        <nav className="menu">
          <div>
            <span className="selected">
              {intl.formatMessage({ id: "components.header.nav.menu" })}
            </span>
          </div>
          <div>
            <span>
              {intl.formatMessage({ id: "components.header.nav.login" })}
            </span>
          </div>
          <div>
            <span>
              {intl.formatMessage({ id: "components.header.nav.contact" })}
            </span>
          </div>
        </nav>
      )}
      <div className="banner"></div>
    </StyledHeader>
  );
}

export { Header };
