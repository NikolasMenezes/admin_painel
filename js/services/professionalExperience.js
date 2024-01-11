import Request from "../utils/request.js";

class ProfessionalExperiences extends Request {
  constructor() {
    super();
  }

  async get() {
    const endpoint = "api/get_professional_experiences.php";
    const options = {
      header: this.header,
      mode: this.mode,
    };

    return await this.execute(endpoint, options);
  }
  async post(body) {
    const endpoint = "api/insert_professional_experience.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async put(body) {
    const endpoint = "api/update_professional_experience.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async delete(body) {
    const endpoint = "api/delete_professional_experience.php";
    const options = {
      method: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
}

export const professionalExperienceService = new ProfessionalExperiences()
