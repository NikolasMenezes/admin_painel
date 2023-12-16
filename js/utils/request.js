export default class Request {
  async execute(endpoint, options) {
    try {
      const res = await fetch(endpoint, options);

      return res.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}
