import Request from "../utils/request.js";

class Portfolio extends Request {
  constructor() {
    super();
  }

  async get() {
    const endpoint = "api/get_portfolio.php";
    const options = {
      header: this.header,
      mode: this.mode,
    };

    return await this.execute(endpoint, options);
  }
  async post(body) {
    const endpoint = "api/insert_portfolio_item.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async put(body) {
    const endpoint = "api/update_portfolio_item.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async delete(body) {
    const endpoint = "api/delete_portfolio_item.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
}

export const portfolioService = new Portfolio();
