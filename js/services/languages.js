import Request from "../utils/request.js";

class Languagues extends Request {
  constructor() {
    super();
  }

  async get() {
    const endpoint = "api/get_languages.php";
    const options = {
      header: this.header,
      mode: this.mode,
    };

    return await this.execute(endpoint, options);
  }
  async post(body) {
    const endpoint = "api/insert_language.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async put(body) {
    const endpoint = "api/update_language.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async delete(body) {
    const endpoint = "api/delete_language.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
}

export const languagesService = new Languagues();
