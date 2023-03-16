import { TableButtonPaginationPropsI } from "../interfaces/app.interface";

const ButtonPagination = ({
  label,
  totalPagination,
  offset,
  callback,
  isBack = false,
}: TableButtonPaginationPropsI) => {
  let _class =
    (isBack && offset < 1) || (offset >= totalPagination - 1 && !isBack)
      ? ""
      : "";

  const handleClick = () => {
    if (isBack) {
      if (offset > 0) {
        callback(offset - 1);
      }
    } else {
      if (offset < totalPagination - 1) {
        callback(offset + 1);
      }
    }
  };

  return (
    <li onClick={handleClick} className="page-item">
      <a className="page-link" href="#">
        {typeof label === "function" ? label(_class) : label}
      </a>
    </li>
  );
};

export default ButtonPagination;
