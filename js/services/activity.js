import Request from "../utils/request.js";

class Activity extends Request {
  constructor() {
    super();
  }

  async post(body) {
    const endpoint = "api/insert_activity.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: (body),
    };

    return await this.execute(endpoint, options);
  }
  async put(body) {
    const endpoint = "api/update_activity.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: (body),
    };

    return await this.execute(endpoint, options);
  }
  async delete(body) {
    const endpoint = "api/delete_activity.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: (body),
    };

    return await this.execute(endpoint, options);
  }
}

export const activityService = new Activity();
