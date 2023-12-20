import Request from "../utils/request.js";

class Subject extends Request {
  constructor() {
    super();
  }

  async post(body) {
    const endpoint = "api/insert_subject.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async put(body) {
    const endpoint = "api/update_subject.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async delete(body) {
    const endpoint = "api/delete_subject.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
}

export const subjectService = new Subject();
