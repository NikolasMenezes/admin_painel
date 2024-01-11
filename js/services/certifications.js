import Request from "../utils/request.js";

class Certifications extends Request {
  constructor() {
    super();
  }

  async get() {
    const endpoint = "api/get_certifications.php";
    const options = {
      header: this.header,
      mode: this.mode,
    };

    return await this.execute(endpoint, options);
  }
  async post(body) {
    const endpoint = "api/insert_certification.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async put(body) {
    const endpoint = "api/update_certification.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async delete(body) {
    const endpoint = "api/delete_certification.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
}

export const certificationsService = new Certifications();
