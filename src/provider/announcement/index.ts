// import config from "@/config";
import Base from "..";
import config from "../../config/index";
import Pagination from "../../components/Pagination";
import { FindBitMexApiQuery } from "../../interfaces/app.interface";

class AnnouncementProvider extends Base {
  constructor() {
    super(`${config.server.api}`);
  }

  async getAnnouncement(): Promise<any> {
    return await this.get(`/bitmex`);
  }

  async getAnnouncementByFilter(filter: any): Promise<any> {
    filter = JSON.stringify(filter)
    return await this.get(`/bitmex?filter=${filter}`);
  }
}

const announcementProvider = new AnnouncementProvider();

export default announcementProvider;
