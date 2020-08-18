import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";
import Header from "./components/organisms/Header";
import PullRequest from "./pages/PullRequest";
import TopPage from "./pages/Index";
import Issue from "./pages/Issue";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Container = styled.div``;
const Main = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const App = () => {
  return (
    <Router basename="/Redux-Github-Viewer">
      <Container>
        <GlobalStyle />
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <TopPage />
            </Route>
            <Route path="/issue">
              <Issue />
            </Route>
            <Route path="/pullRequest">
              <PullRequest />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Main>
      </Container>
    </Router>
  );
};

export default App;
