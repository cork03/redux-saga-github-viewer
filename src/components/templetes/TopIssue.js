import React from "react";
import styled from "styled-components";
import Issue from "../../containers/Issue";
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
  padding: 16px;
  border-left: ${line};
  border-top: ${line};
  border-right: ${line};
  border-radius: 6px 6px 0px 0px;
`;
const Right = styled.h1`
  width: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  border-bottom: ${line};
  padding: 16px;
`;

const TopIssue = ({ changePull }) => {
  return (
    <Container>
      <Header>
        <Left>Issue</Left>
        <Right onClick={changePull}>PullRequest</Right>
      </Header>
      <Issue />
    </Container>
  );
};

export default TopIssue;
