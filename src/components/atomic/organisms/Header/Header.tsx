import { useCallback, useEffect, useState } from "react";
import { StyledHeader } from "./styles";
import menuJson from "../../../../services/menu.json";

interface IMenuImage {
  id: number;
  image: string;
}

interface IMenuItemModifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: [
    {
      id: number;
      name: string;
      price: number;
      maxChoices: number;
      position: number;
      visible: number;
      availabilityType: string;
      available: boolean;
    }
  ];
}

interface IMenuSectionItem {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: Array<IMenuItemModifier>;
  images: Array<IMenuImage>;
  available: boolean;
}

interface IMenuSection {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images: Array<IMenuImage>;
  items: Array<IMenuSectionItem>;
}

interface IMenu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Array<IMenuSection>;
}

function Header() {
  const [menuSections, setMenuSections] = useState<any>();

  const getInitialData = useCallback(async () => {
    //await apiService.get()
    const sections = menuJson.sections;
    const data = sections.filter((section) => section.visible === 1);
    setMenuSections(data);
  }, []);

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <StyledHeader>
      <nav className="menu">
        {menuSections &&
          menuSections.map((section: IMenuSection) => {
            return <div key={section.id}>{section.name}</div>;
          })}
      </nav>
      <div className="banner"></div>
    </StyledHeader>
  );
}

export { Header };
