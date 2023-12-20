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
] = [
  "endpointSelect",
  "methodSelect",
  "jsonInput",
  "formatJson",
  "exampleField",
  "jsonContainer",
  "operationSpan",
].map((element) => document.getElementById(element));

const optionActions = {
  activity: async () => {
    const activities = await activityService.get();
    showExample(jsonContainer);
    setExample(exampleField, activities[0]);
  },
  certifications: async () => {
    const certifications = await certificationsService.get();
    showExample(jsonContainer);
    setExample(exampleField, certifications[0]);
  },
  expertises: async () => {
    const expertises = await expertisesService.get();
    showExample(jsonContainer);
    setExample(exampleField, expertises[0]);
  },
  professionalExperience: async () => {
    const professionalExperience = await professionalExperienceService.get();
    showExample(jsonContainer);
    setExample(exampleField, professionalExperience[0]);
  },
  academicEducation: async () => {
    const academicEducation = await academicEducationService.get();
    showExample(jsonContainer);
    setExample(exampleField, academicEducation[0]);
  },
  languages: async () => {
    const languages = await languagesService.get();
    showExample(jsonContainer);
    setExample(exampleField, languages[0]);
  },
  personalInformation: async () => {
    const personalInformation = await personalInformationService.get();
    showExample(jsonContainer);
    setExample(exampleField, personalInformation[0]);
  },
  portfolio: async () => {
    const portfolio = await portfolioService.get();

    showExample(jsonContainer);
    setExample(exampleField, portfolio[0]);
  },
  qualifications: async () => {
    const qualifications = await qualificationService.get();
    showExample(jsonContainer);
    setExample(exampleField, qualifications[0]);
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

methodSelect.addEventListener("click", showCurrentMethod);
formatJsonBtn.addEventListener("click", () => formatJSON(textarea));
textarea.addEventListener("keydown", tabSpace);
endpointSelect.addEventListener("change", formController);
