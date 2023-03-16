import {
  TableColumnsPropsI,
  UsersColumnsTablePropsI,
} from "../interfaces/app.interface";

const ColumnsTable = ({
  children,
  handleAction,
  offset,
}: UsersColumnsTablePropsI) => {
  const columns: Array<TableColumnsPropsI> = [
    {
      title: () => <div className="m-0">#</div>,
      render: ({ indexData }: { indexData: number }) => {
        return <div>{indexData + 1 + offset * 10}</div>;
      },
    },
    {
      title: () => <div className="  m-0">Date</div>,
      key: "date",
      render: ({ data }: { data: any }) => (
        <div className="nk-tb-col  " style={{ paddingLeft: 0 }}>
          <span
            className="text-primary"
          >
            {new Date(data?.data?.[0].timestamp).toLocaleDateString()}
          </span>
        </div>
      ),
    },
    {
      title: () => <div className="m-0">Action</div>,
      key: "email",
      render: ({ data }: { data: any }) => (
        <div className="nk-tb-col  " style={{ paddingLeft: 0 }}>
          <span>{data?.action?.charAt(0).toUpperCase() + data?.action?.slice(1)}</span>
        </div>
      ),
    },

    {
      title: () => <div className="m-0">Symbol</div>,
      key: "role",
      render: ({ data }: { data: any }) => (
        <div className="nk-tb-col" style={{ paddingLeft: 0 }}>
          <span>{data?.data?.[0].symbol}</span>
        </div>
      ),
    },
    {
      title: () => <div className="m-0">Side</div>,
      key: "status",
      render: ({ data }: { data: any }) => (
        <div className="nk-tb-col" style={{ paddingLeft: 0 }}>
          <span
            className={`tb-status ${
              data?.active ? "text-success" : "text-info"
            }`}
          >
            {data?.data?.[0].side}
          </span>
        </div>
      ),
    },
    {
      title: () => <div className="m-0">Size</div>,
      key: "role",
      render: ({ data }: { data: any }) => {
        const date = new Date(data?.createdAt);
        return (
          <div className="nk-tb-col  " style={{ paddingLeft: 0 }}>
            <span>{data?.data?.[0].size}</span>
          </div>
        );
      },
    },
  ];
  return children({ columns });
};
export default ColumnsTable;
