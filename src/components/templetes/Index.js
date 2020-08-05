import React, { useState } from "react";
import styled from "styled-components";
import TopIssue from "../templetes/TopIssue";
import TopPull from "./TopPull";

const Container = styled.div``;

const TopPage = () => {
  const [issue, setIssue] = useState(true);
  const changePull = () => {
    setIssue(false);
  };
  const changeIssue = () => {
    setIssue(true);
  };
  return (
    <Container>
      {issue ? (
        <TopIssue changePull={changePull} />
      ) : (
        <TopPull changeIssue={changeIssue} />
      )}
    </Container>
  );
};

export default TopPage;
