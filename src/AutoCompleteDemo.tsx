import { AutoComplete } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

export const AutoCompleteDemo: React.FC = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  return (
    <>
      <GlobalStyle />
      <StyledAutocomplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
        placeholder="input here"
        popupClassName="my-autocomplete-popup"
      />
      <br />
      <br />
      <StyledAutocomplete
        value={value}
        options={anotherOptions}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={(text) => setAnotherOptions(getPanelValue(text))}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};

const StyledAutocomplete = styled(AutoComplete)`
  .ant-select-selection-search-input.ant-select-selection-search-input.ant-select-selection-search-input.ant-select-selection-search-input {
    color: #b01580;
    background-color: #d7d2ad;
` as typeof AutoComplete;

const GlobalStyle = createGlobalStyle`
  .my-autocomplete-popup .ant-select-item.ant-select-item-option  .ant-select-item-option-content {
    color: #003cff;
    font-family: Serif;
  }
`;
