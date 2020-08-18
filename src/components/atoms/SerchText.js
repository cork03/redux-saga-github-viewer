import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";

const Input = styled.input`
  padding: 7px 4px;
  margin: 0 10px;
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${colors.border};
  outline: none;
`;

const SerchText = ({ search, setSearch }) => {
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Input
        type="input"
        placeholder="issue名で検索"
        value={search}
        onChange={onChange}
      ></Input>
    </>
  );
};

export default SerchText;
