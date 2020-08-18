import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  padding: 16px;
`;

const Card = styled.div`
  margin: 32px 0;
  display: flex;
  border-radius: 6px;
  border: 1px solid #e1e4e8;
`;
const CardEl = styled.div`
  width: 50%;
  padding: 16px;
`;
const Label = styled.label`
  color: ${colors.label};
`;
const Img = styled.img`
  display: block;
  padding-top: 15px;
`;
const Text = styled.p`
  padding 16px 0;
  font-size: 1.2rem;
`;

const Profile = ({ user }) => {
  return (
    <Container>
      <h1>Profile</h1>
      <Card>
        <CardEl>
          <Label>プロフィール</Label>
          <Img src={user.profileUrl} />
        </CardEl>
        <CardEl>
          <Label>ユーザー名</Label>
          <Text>{user.name}</Text>
          <Label>メールアドレス</Label>
          <Text>{user.email}</Text>
        </CardEl>
      </Card>
    </Container>
  );
};

export default Profile;
