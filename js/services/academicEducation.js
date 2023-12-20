import Request from "../utils/request.js";

class AcademicEducation extends Request {
  constructor() {
    super();
  }

  async get() {
    const endpoint = "api/get_academic_education.php";
    const options = {
      header: this.header,
      mode: this.mode,
    };

    return await this.execute(endpoint, options);
  }
  async post(body) {
    const endpoint = "api/insert_academic_education.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async put(body) {
    const endpoint = "api/update_academic_education.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
  async delete(body) {
    const endpoint = "api/delete_academic_education.php";
    const options = {
      methods: "POST",
      header: this.header,
      mode: this.mode,
      body: JSON.stringify(body),
    };

    return await this.execute(endpoint, options);
  }
}

export const academicEducationService = new AcademicEducation();
