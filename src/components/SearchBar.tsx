import { DateRange, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { setAnnouncement } from "@redux/announcement/announcement.slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  FindBitMexApiQuery,
  IDateRangeQuery,
} from "../interfaces/app.interface";
import announcementProvider from "../provider/announcement/index";
import { Legend } from "chart.js";

export const SearchBar = ({ getData }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>();
  const [dateRange, setDateRange] = useState<DateRange<unknown>>();
  const [check, setCheck] = useState<boolean>(false);

  const handleCheck = () => {
    setCheck((prev) => !prev);
  };
  const handleDatePicker = (value) => {
    let e = {
      target: {
        value: search,
      },
    };

    if (value.length > 1) {
      handleChange(e);
    }
    setDateRange(value);
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
    if (!target.value) {
      getData();
    } else {
      if (!dateRange) {
        filterData({
          search: target.value,
        });
      } else {
        let start: any = dateRange?.[0];
        let end: any = dateRange?.[1];

        start = start?.$d;
        end = end?.$d;

        const newRange: IDateRangeQuery = {
          start,
          end,
        };

        if (newRange.end && newRange.start) {
          filterData({
            search: search,
            dateRange: newRange,
          });
        }
      }
    }
  };

  const filterData = async (filter: FindBitMexApiQuery = {}) => {
    const res = await announcementProvider.getAnnouncementByFilter(filter);
    dispatch(setAnnouncement(res));
  };

  return (
    <>
      <div style={{ width: "100%", padding: 0 }}>
        <input
          className="form-control"
          placeholder="Search for anything..."
          type="search"
          style={{ margin: 0 }}
          // value={search}
          onChange={handleChange}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <input
          name="checkbox"
          type="checkbox"
          onChange={handleCheck}
          // value={check? 1:0}
          checked={check ? true : false}
          style={{ marginRight: "5px" }}
        />
        <label htmlFor="checkbox">Advanced Search</label>
      </div>
      {check && (
        <div
          style={{
            background: "white",
            marginTop: "20px",
            padding: "12px",
            borderRadius: "5px",
          }}
        >
          <h4 style={{ color: "black" }}>Select a Date Range</h4>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              calendars={1}
              // value={dateRange}
              onChange={handleDatePicker}
            />
          </LocalizationProvider>
        </div>
      )}
    </>
  );
};
