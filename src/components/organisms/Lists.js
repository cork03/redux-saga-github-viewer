import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  margin-top: 16px;
  right: 16px;
  width: 200px;
  border-radius: 2px;
  padding: 8px 0px;
  background: white;
  color: ${colors.black};
  box-shadow: 1px 1px 4px 1px #33333326;
`;
const Text = styled.li`
  a {
    display: block;
    color: ${colors.black};
    padding: 8px;
    font-size: 1rem;
  }
  a:hover {
    background: ${colors.menuBackground};
    color: white;
  }
`;

const menus = [
  { to: "/", text: "Top" },
  { to: "/profile", text: "Your Profile" },
  { to: "/issue", text: "Issue" },
  { to: "/pullRequest", text: "Pull Request" },
];

const Lists = ({ open }) => {
  let el;
  if (open) {
    el = (
      <Container>
        <ul>
          {menus.map((menu, index) => {
            return (
              <Text key={index}>
                <Link to={menu.to}>{menu.text}</Link>
              </Text>
            );
          })}
        </ul>
      </Container>
    );
  }
  return <div>{el}</div>;
};

export default Lists;
