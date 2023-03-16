import Base from "..";
import config from "../../config/index";

class SocketProvider extends Base {
  constructor() {
    super(`${config.server.api}`);
  }

  async getAnnouncement(): Promise<any> {
    return await this.get(`/bitmex`);
  }
}

const socketProvider = new SocketProvider();

export default socketProvider;
