import React, { useState } from "react";
import styled from "styled-components";
import { ButtonGreen } from "../atoms/Button";
import { colors } from "../../styles/Variables";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const Top = styled.h2``;
const Title = styled.div`
  margin-top: 70px;
`;
const Input = styled.input`
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 10px;
`;
const Content = styled.div`
  margin-top: 40px;
`;
const Textarea = styled.textarea`
  border-radius: 6px;
  border: 1px solid ${colors.border};
  display: block;
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  height: 150px;
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: flex-end;
`;
const Close = styled.a`
  min-width: 100px;
  text-align: center;
  color: rgb(3, 102, 214);
  cursor: pointer;
`;
const Error = styled.div`
  height: 40px;
  margin-top: 40px;

  p {
    color: ${colors.Red};
    width: 100%;
    background: #d73a4959;
    padding: 8px;
    border-radius: 6px;
  }
`;

const ModalContent = ({ closeModal, addList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const changeText = (e) => {
    setTitle(e.target.value);
  };
  const changeSentence = (e) => {
    setContent(e.target.value);
  };
  const createNew = () => {
    if (!title) {
      setError("タイトルを入力してください");
      return;
    }
    if (!content) {
      setError("説明を入力してください");
      return;
    }
    addList({ title, content });
    closeModal();
  };
  return (
    <Container>
      <Top>Issueを追加</Top>
      <Title>
        <label>タイトル</label>
        <Input
          type="input"
          placeholder="タイトルを入力してください"
          value={title}
          onChange={changeText}
        ></Input>
      </Title>
      <Content>
        <label>説明</label>
        <Textarea
          placeholder="説明を入力してください"
          value={content}
          onChange={changeSentence}
        ></Textarea>
      </Content>
      <Error>{error && <p>{error}</p>}</Error>
      <Buttons>
        <ButtonGreen onClick={createNew}>作成</ButtonGreen>
        <Close onClick={closeModal}>閉じる</Close>
      </Buttons>
    </Container>
  );
};

export default ModalContent;
