import Request from "../utils/request.js";

class PersonalInformation extends Request {
  constructor() {
    super();
  }

  async get() {
    const endpoint = "api/get_personal_informations.php";
    const options = {
      header: this.header,
      mode: this.mode,
    };

    return await this.execute(endpoint, options);
  }
  async put(body) {
    const endpoint = "api/update_personal_informations.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
}

export const personalInformationService = new PersonalInformation()
