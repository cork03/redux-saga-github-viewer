import React from "react";
import dayjs from "dayjs";
import moment from "moment";

const List = ({ list, onClick, check, onCheck }) => {
  const { title, state, user, created_at } = list;
  const _onClick = (list) => {
    onClick && onClick(list);
  };
  const _onCheck = (e) => {
    e.stopPropagation();
    onCheck && onCheck(list.id, list);
  };
  const Link = (e) => e.stopPropagation();
  const m = moment(created_at, "YYYY - MM - DD");
  const output = m.format("MM - DD - YYYY");

  return (
    <tr onClick={_onClick}>
      <td>
        <input checked={check} onClick={_onCheck} type="checkbox"></input>
      </td>
      <td>
        <a onClick={Link} href={list.html_url}>
          {title}
        </a>
      </td>
      <td>{state}</td>
      <td>{user.login}</td>
      <td>{output}</td>
      <td>{dayjs().format("MM-DD-YYYY")}</td>
    </tr>
  );
};

export default List;
