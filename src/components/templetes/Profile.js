import React, { useEffect } from "react";
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

const Profile = ({ user, fetchProfile }) => {
  useEffect(() => {
    fetchProfile();
  }, []);
  console.log(user);
  return (
    <Container>
      <h1>Profile</h1>
      <Card>
        <CardEl>
          <Label>プロフィール</Label>
        </CardEl>
        <CardEl>
          <Label>ユーザー名</Label>
          <Text>{}</Text>
          <Label>アカウントURL</Label>
          <Text>{}</Text>
          <Label>フォロー数</Label>
          <Text>{}</Text>
          <Label>フォロワー数</Label>
          <Text>{}</Text>
          <Label>パブリックレポジトリ</Label>
          <Text>{}</Text>
          <Label>プライベートレポジトリ</Label>
          <Text>{}</Text>
        </CardEl>
      </Card>
    </Container>
  );
};

export default Profile;
