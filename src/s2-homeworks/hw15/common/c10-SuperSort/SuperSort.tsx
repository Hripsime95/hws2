import React from "react";
import arrowUp from "../../../../assests/images/up.svg";
import arrowDown from "../../../../assests/images/down.svg";
import none from "../../../../assests/images/none.svg";

// добавить в проект иконки и импортировать
const downIcon = arrowDown;
const upIcon = arrowUp;
const noneIcon = none;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === "" || (sort !== up && sort !== down)) return down;
  else if (sort === down) return up;
  else return "";
  //   return up; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({
  sort,
  value,
  onChange,
  id = "hw15",
}) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      <img
        id={id + "-icon-" + sort}
        src={icon}
        style={{ verticalAlign: "middle", cursor: "pointer" }}
      />
      {/* {icon} //а это убрать */}
    </span>
  );
};

export default SuperSort;
