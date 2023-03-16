import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardsContent } from "../components/CardsContent";
import { MainContent } from "../components/MainContent";
import { OverviewLineChart } from "../components/OverviewLineChart";
import { TableSocketData } from "../components/TableSocketData";
import Layout from "../layout/Layout";
import { BitmexSocket } from "../socket/index";
import { IMessageEvent } from "websocket";
import { setSocketData } from "@redux/socket/socket.slice";

export default function Home() {
  const dispatch = useDispatch();
  const socketData = useSelector((state: any) => state.socket.data);

  const url = "wss://ws.bitmex.com/realtime";

  const [instanceSocket, setInstanceSocket] = useState<BitmexSocket | null>(
    null
  );

  const handlerMessageFromSocket = (payload: IMessageEvent) => {
    dispatch(setSocketData(JSON.parse(payload.data as string)));
  };

  useEffect(() => {
    const instance = new BitmexSocket();
    setInstanceSocket(instance);

    instance.onOpen(() => {
      instance.onSend(
        JSON.stringify({
          op: "subscribe",
          args: ["orderBookL2:XBTUSD"],
        })
      );

      setInterval(() => {
        instance.onMessage(handlerMessageFromSocket);
        setTimeout(() => {
          instance.onMessage(() => {});
        }, 10);
      }, 1200);
    });
  }, []);

  useEffect(() => {
    if (!instanceSocket) return;

    instanceSocket;
  }, [instanceSocket]);

  const { data } = socketData;
  let labels = [];
  const datasets = [
    {
      label: "Overview",
      color: "#798bff",
      backgroundColor: "rgba(121,139,255,0.3)",
      data: [],
    },
  ];

  socketData?.forEach((socketdata) => {
    const { data } = socketdata;
    labels.push(new Date(data?.[0]?.timestamp).toTimeString().slice(1, 9));
    datasets?.[0]?.data?.push(!data?.[0]?.size ? 0 : data?.[0]?.size);
  });

  return (
    <>
      <Layout title={"Main"}>
        <main>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MainContent />
            <div
              className="d-flex"
              style={{
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <div style={{ width: "70%", marginRight: "25px" }}>
                <h2>Overview</h2>
                <div
                  style={{
                    height: "400px",
                    background: "white",
                    marginBottom: "20px",
                    width: "100%",
                  }}
                >
                  <OverviewLineChart
                    data={{
                      labels,
                      datasets,
                    }}
                  />
                </div>

                <TableSocketData />
              </div>

              <div style={{ width: "30%" }}>
                <CardsContent />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
