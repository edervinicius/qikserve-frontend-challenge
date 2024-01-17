import React from "react";
import { useIntl } from "react-intl";
import { IMenuSection } from "../../../reduxStore/reducers/menuSlice";
import { RootState } from "../../../reduxStore/@types";
import { useSelector } from "react-redux";
import { SearchIcon, Textfield } from "../../atoms";
import { StyledSearchField } from "./styles";

interface SearchFieldProps {
  handleFilterSections: (filtered: Array<IMenuSection>) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ handleFilterSections }) => {
  const intl = useIntl();
  const storeData = useSelector((state: RootState) => state);

  const handleFilter = (text: string) => {
    if (text.trim().length === 0) {
      handleFilterSections(storeData.menu.sections!);
      return false;
    }
    const filtered = storeData.menu.sections!.filter((section) => {
      const fill = section.items.some((item) =>
        item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
      return fill;
    });
    handleFilterSections(filtered);
  };

  return (
    <StyledSearchField>
      <label htmlFor="searchField" className="searchLabel">
        <SearchIcon color="#8A94A4" size={24} />
      </label>
      <Textfield
        id="searchField"
        placeholder={intl.formatMessage({
          id: "components.searchField.placeholder",
        })}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </StyledSearchField>
  );
};

export { SearchField };
