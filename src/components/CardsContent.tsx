import { Announcement } from "@interfaces/app.interface";
import { setAnnouncement } from "@redux/announcement/announcement.slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import announcementProvider from "../provider/announcement/index";
import { Card } from "./Card";
import { SearchBar } from "./SearchBar";
import { FindBitMexApiQuery } from '../interfaces/app.interface';

export const CardsContent = () => {
  const data: Array<Announcement> = useSelector(
    (state: any) => state.announcement.data
  );
  const dispatch = useDispatch();

  const getData = async () => {
    const res = await announcementProvider.getAnnouncement();
    dispatch(setAnnouncement(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="" style={{ width: "100%", padding: 0 }}>
      <div
        style={{
          width: "100%",
          background: "black",
          color: "white",
          padding: "20px",
        }}
      >
        <h3>News</h3>
        <SearchBar getData={getData}/>
      </div>

      {data.length===0? <div style={{background:"white", padding:"25px", textAlign:"center", fontWeight:"900"}}>No Records Found.</div> :data?.map(({ content, date, link, id, title }, index) => (
        <Card
          key={index}
          link={link}
          title={title}
          content={content}
          date={date}
        />
      ))}
    </div>
  );
};
