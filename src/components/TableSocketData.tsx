import { useState } from "react";
import { useSelector } from "react-redux";
import ColumnsTable from "./ColumnsTable";
import TableWPagination from "./TableWPagination";

let interval = setInterval(() => {});

export const TableSocketData = () => {
  const socket = useSelector((state: any) => state.socket.data);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <h4
        className="card-title mb-1"
        style={{
          padding: "10px 25px",
          background: "white",
          textAlign: "center",
        }}
      >
        LATEST TRANSACTIONS
      </h4>

      <ColumnsTable offset={0} handleAction={() => {}}>
        {({ columns }) => (
          <div>
            <TableWPagination
              handleAction={() => {}}
              data={socket}
              header={{ columns }}
              keyName={"users"}
              stylesCustom={{ table: "table-hover" }}
              Empty={() => (
                <div className="text-center mt-5">
                  <div className="text-muted">
                    <h4 className="mb-0">No users found</h4>
                  </div>
                </div>
              )}
              pagination={{
                limit: 0,
                change: () => {},
                offset: 0,
                total: 0,
              }}
            />
          </div>
        )}
      </ColumnsTable>
    </div>
  );
};
