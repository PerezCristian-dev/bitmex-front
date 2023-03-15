import config from "@/config";
import Base from "..";

class AnnouncementProvider extends Base {
  constructor() {
    super(`${config.server.api}`);
  }

  async getAnnouncement(): Promise<any> {
    return await this.get(`/bitmex`);
  }
}

const announcementProvider = new AnnouncementProvider();

export default announcementProvider;
