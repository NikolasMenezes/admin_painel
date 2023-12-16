import { URL_API } from "../constants/api.js";

export default class Request {
  constructor() {
    this.header = {
      "Content-Type": "application/json",
    };
    this.mode = "same-origin";
  }

  async execute(endpoint, options) {
    try {
      const res = await fetch(`${URL_API}${endpoint}`, options);

      return res.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}
