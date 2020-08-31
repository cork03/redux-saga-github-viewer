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
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;
const CardEl = styled.div`
  width: 50%;
  padding: 16px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const Label = styled.label`
  color: ${colors.label};
`;
const Img = styled.img`
  display: block;
  padding-top: 15px;
  width: 70%;
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
  if (!user) {
    return <></>;
  }
  return (
    <Container>
      <h1>Profile</h1>
      <Card>
        <CardEl>
          <Label>プロフィール</Label>
          <Img src={user.avatar_url}></Img>
        </CardEl>
        <CardEl>
          <Label>ユーザー名</Label>
          <Text>{user.login}</Text>
          <Label>アカウントURL</Label>
          <Text>
            <a href={user.html_url}>{user.html_url}</a>
          </Text>
          <Label>フォロー数</Label>
          <Text>{user.following}</Text>
          <Label>フォロワー数</Label>
          <Text>{user.followers}</Text>
          <Label>パブリックレポジトリ</Label>
          <Text>{user.public_repos}</Text>
          <Label>プライベートレポジトリ</Label>
          <Text>{user.owned_private_repos}</Text>
        </CardEl>
      </Card>
    </Container>
  );
};

export default Profile;
