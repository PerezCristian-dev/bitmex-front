import { setAnnouncement } from "@/redux/announcement/announcement.slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import announcementProvider from "../provider/announcement/index";
import { Card } from "./Card";
import { Announcement } from '../interfaces/app.interface';



export const CardsContent = () => {
  // const [data, setData] = useState<Announcement[]>();
  const data: Array<Announcement> = useSelector((state: any) => state.announcements.data)
  const dispatch = useDispatch()

  const getData = async () => {
    const res = await announcementProvider.getAnnouncement();
    dispatch(setAnnouncement(res));
  };

  useEffect(() => {
    getData();
  }, []);



  return (
    <div className="row row-sm " style={{ width: "100%" }}>
      {data?.map(({content, date,link, id, title}, index) => (
        <Card key={id} link={link} title={title} content={content} date={date} />
      ))}
    </div>
  );
};
function dispatch() {
  throw new Error("Function not implemented.");
}

