import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Users</h1>
        <button>Add New {props.slug}</button>
        <form>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((columns) => (
              <div className="item">
                <label>{columns.headerName}</label>
                <input type={columns.type} placeholder={columns.field} />
              </div>
            ))}
        </form>
      </div>
    </div>
  );
};

export default Add;
