import {
  tabSpace,
  formatJSON,
  setExample,
  showExample,
} from "./utils/formater.js";
import { activityService } from "./services/activity.js";
import { academicEducationService } from "./services/academicEducation.js";
import { certificationsService } from "./services/certifications.js";
import { expertisesService } from "./services/expertises.js";
import { personalInformationService } from "./services/personalInformation.js";
import { portfolioService } from "./services/portfolio.js";
import { professionalExperienceService } from "./services/professionalExperience.js";
import { languagesService } from "./services/languages.js";
import { qualificationService } from "./services/qualifications.js";

const [
  endpointSelect,
  methodSelect,
  textarea,
  formatJsonBtn,
  exampleField,
  jsonContainer,
  operationSpan,
  executeBtn,
] = [
  "endpointSelect",
  "methodSelect",
  "jsonInput",
  "formatJson",
  "exampleField",
  "jsonContainer",
  "operationSpan",
  "executeBtn",
].map((element) => document.getElementById(element));

const optionActions = {
  activity: async (method) => {
    const activities = await activityService.get();
    showExample(jsonContainer);
    setExample(exampleField, activities[0]);

    const body = textarea.value;

    switch (method) {
      case "post":
        activityService.post(body);
        break;
      case "put":
        activityService.put(body);
        break;
      case "delete":
        activityService.delete(body);
        break;
    }
  },
  certifications: async (method) => {
    const certifications = await certificationsService.get();
    showExample(jsonContainer);
    setExample(exampleField, certifications[0]);
    const body = textarea.value;

    switch (method) {
      case "post":
        certificationsService.post(body);
        break;
      case "put":
        certificationsService.put(body);
        break;
      case "delete":
        certificationsService.delete(body);
        break;
    }
  },
  expertises: async (method) => {
    if (!method) {
      const expertises = await expertisesService.get();

      showExample(jsonContainer);
      setExample(exampleField, expertises[0]);
    }
    const body = textarea.value;

    switch (method) {
      case "post":
        expertisesService.post(body);
        break;
      case "put":
        expertisesService.put(body);
        break;
      case "delete":
        expertisesService.delete(body);
        break;
    }
  },
  professionalExperience: async (method) => {
    const professionalExperience = await professionalExperienceService.get();
    showExample(jsonContainer);
    setExample(exampleField, professionalExperience[0]);

    const body = textarea.value;

    switch (method) {
      case "post":
        professionalExperienceService.post(body);
        break;
      case "put":
        professionalExperienceService.put(body);
        break;
      case "delete":
        professionalExperienceService.delete(body);
        break;
    }
  },
  academicEducation: async (method) => {
    const academicEducation = await academicEducationService.get();
    showExample(jsonContainer);
    setExample(exampleField, academicEducation[0]);

    const body = textarea.value;

    switch (method) {
      case "post":
        academicEducationService.post(body);
        break;
      case "put":
        academicEducationService.put(body);
        break;
      case "delete":
        academicEducationService.delete(body);
        break;
    }
  },
  languages: async (method) => {
    const languages = await languagesService.get();
    showExample(jsonContainer);
    setExample(exampleField, languages[0]);

    const body = textarea.value;

    switch (method) {
      case "post":
        languagesService.post(body);
        break;
      case "put":
        languagesService.put(body);
        break;
      case "delete":
        languagesService.delete(body);
        break;
    }
  },
  personalInformation: async (method) => {
    const personalInformation = await personalInformationService.get();
    showExample(jsonContainer);
    setExample(exampleField, personalInformation[0]);

    const body = textarea.value;

    switch (method) {
      case "post":
        personalInformationService.post(body);
        break;
      case "put":
        personalInformationService.put(body);
        break;
      case "delete":
        personalInformationService.delete(body);
        break;
    }
  },
  portfolio: async (method) => {
    const portfolio = await portfolioService.get();

    showExample(jsonContainer);
    setExample(exampleField, portfolio[0]);

    const body = textarea.value;

    switch (method) {
      case "post":
        portfolioService.post(body);
        break;
      case "put":
        portfolioService.put(body);
        break;
      case "delete":
        portfolioService.delete(body);
        break;
    }
  },
  qualifications: async (method) => {
    const qualifications = await qualificationService.get();
    showExample(jsonContainer);
    setExample(exampleField, qualifications[0]);

    const body = textarea.value;

    switch (method) {
      case "post":
        qualificationService.post(body);
        break;
      case "put":
        qualificationService.put(body);
        break;
      case "delete":
        qualificationService.delete(body);
        break;
    }
  },
};

function showCurrentMethod({ target }) {
  operationSpan.textContent = target.options[
    target.selectedIndex
  ].value.toUpperCase();
}

function formController({ target }) {
  const optionValue = target.options[target.selectedIndex].value;
  const selectedAction = optionActions[optionValue];

  if (selectedAction) selectedAction();
}

function executeOperation() {
  const selectedMethod =
    methodSelect.options[methodSelect.selectedIndex].value || "post";
  const selecedEndpoint =
    endpointSelect.options[endpointSelect.selectedIndex].value;

  const operationToExucute = optionActions[selecedEndpoint];

  operationToExucute(selectedMethod);
}

methodSelect.addEventListener("click", showCurrentMethod);
formatJsonBtn.addEventListener("click", () => formatJSON(textarea));
textarea.addEventListener("keydown", tabSpace);
endpointSelect.addEventListener("change", formController);
executeBtn.addEventListener("click", executeOperation);
