import React, { ChangeEvent } from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage); // пишет студент // вычислить количество страниц +

  const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
    // пишет студент -+
    onChange(page, itemsCountForPage);
  };

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    // пишет студент +
    const selectedCount = +event.currentTarget.value;
    onChange(page, selectedCount);
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        sx={{
          // стили для Pagination // пишет студент
          "& .MuiPaginationItem-root": {
            borderRadius: "2px",
            fontFamily: "Roboto",
            fontWeight: "400",
            color: "#0d0b0c",
            fontSize: "14px",
            marginRight: "12px",
          },
          "& .MuiPaginationItem-page.Mui-selected": {
            color: "#fff",
            fontWeight: "400",
            borderRadius: "2px",
            backgroundColor: "#06c",
            "&:hover": {
              backgroundColor: "#06c",
              opacity: "0.7",
            },
          },
        }}
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>Показать</span>

      <SuperSelect
        id={id + "-pagination-select"}
        value={itemsCountForPage}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChange={onChangeSelect}
      />

      <span className={s.text2}>строки в таблице</span>
    </div>
  );
};

export default SuperPagination;
