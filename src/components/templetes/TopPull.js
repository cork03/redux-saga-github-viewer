import React from "react";
import styled from "styled-components";
import PullRequest from "../templetes/PullRequest";
import { colors } from "../../styles/Variables";

const line = `1px solid ${colors.border}`;

const Container = styled.div``;
const Header = styled.div`
  padding: 32px 32px 0 32px;
  display: flex;
  text-align: center;
  color: ${colors.label};
`;
const Left = styled.h1`
  width: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  border-bottom: ${line};
  padding: 16px;
`;
const Right = styled.h1`
  font-size: 1.2rem;
  width: 50%;
  cursor: pointer;
  border-left: ${line};
  border-top: ${line};
  border-right: ${line};
  border-radius: 6px 6px 0px 0px;
  padding: 16px;
`;

const TopPull = ({ changeIssue }) => {
  return (
    <Container>
      <Header>
        <Left onClick={changeIssue}>Issue</Left>
        <Right>PullRequest</Right>
      </Header>
      <PullRequest />
    </Container>
  );
};

export default TopPull;
