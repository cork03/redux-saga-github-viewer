import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ButtonGreen, ButtonRed } from "../atoms/Button";
import SerchText from "../atoms/SerchText";
import ModalContent from "../organisms/ModalContent";
import EditContent from "../organisms/EditContent";
import { colors } from "../../styles/Variables";
import Modal from "react-modal";
import List from "../organisms/List";

Modal.setAppElement("#root");

const Container = styled.div`
  padding: 32px;
`;

const SerchTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Buttons = styled.div`
  display: flex;
`;
const Title = styled.h2``;

const Board = styled.div``;
const Table = styled.table`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
  text-align: left;
  th,
  td {
    border-bottom: 1px solid ${colors.border};
    padding: 10px 5px;
    cursor: pointer;
  }
`;

const Issue = ({ data, removeList, addList, editList, fetchIssue }) => {
  useEffect(() => {
    fetchIssue();
  });
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [search, setSearch] = useState("");
  const [issue, setIssue] = useState();
  const [check, setCheck] = useState({});
  const closeModal = () => setOpen(false);
  const lists = () => {
    const object = Object.values(data);
    if (!search) {
      return object;
    }
    return object.filter((item) => item.title.includes(search));
  };
  const openNew = () => {
    if (!edit) {
      setOpen(true);
    } else {
      setEdit(false);
      setOpen(true);
    }
  };
  const openEdit = (issue) => {
    setIssue(issue);
    if (!edit) {
      setEdit(true);
      setOpen(true);
    } else {
      setOpen(true);
    }
  };
  const onCheck = (id) => {
    const newCheck = { ...check };
    if (check[id]) {
      delete newCheck[id];
    } else {
      newCheck[id] = true;
    }
    setCheck(newCheck);
  };
  const [mark, setMark] = useState(false);
  const allCheck = () => {
    const el = Object.values(data).map((item) => {
      return item.id;
    });
    const newCheck = { ...check };
    if (mark) {
      setMark(false);
      setCheck({});
    } else {
      setMark(true);
      el.forEach((item) => {
        newCheck[item] = true;
      });
      setCheck(newCheck);
    }
  };
  const onRemove = () => {
    Object.keys(check).forEach((item) => {
      removeList({ id: item });
    });
  };
  return (
    <Container>
      <SerchTop>
        <Title>Issue</Title>
        <SerchText search={search} setSearch={setSearch} />
        <Buttons>
          <ButtonGreen onClick={openNew}>New</ButtonGreen>
          <ButtonRed onClick={onRemove}>Dlete</ButtonRed>
        </Buttons>
      </SerchTop>
      <Board>
        <Table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={mark}
                  onClick={allCheck}
                ></input>
              </th>
              <th></th>
              <th>ステータス</th>
              <th>作成者</th>
              <th>作成日付</th>
              <th>更新日付</th>
            </tr>
          </thead>
          <tbody>
            {lists().length ? (
              lists().map((list) => {
                const onClick = () => openEdit(list);
                return (
                  <List
                    onCheck={onCheck}
                    check={check[list.id]}
                    key={list.id}
                    list={list}
                    onClick={onClick}
                  />
                );
              })
            ) : (
              <tr>
                <td>データがありません</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Board>
      <Modal isOpen={open}>
        {edit ? (
          <EditContent
            issue={issue}
            closeModal={closeModal}
            editList={editList}
          />
        ) : (
          <ModalContent
            closeModal={closeModal}
            addList={addList}
            removeList={removeList}
          />
        )}
      </Modal>
    </Container>
  );
};

export default Issue;
