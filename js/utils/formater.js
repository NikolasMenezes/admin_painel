export function fillExample(element, content) {
  element.value = content;
}

export function setExample(element, example) {
  for (const [key, value] of Object.entries(example)) {
    if (typeof value === "string") {
      example[key] = `${value.substring(0, 20)} ...`;
    }
    if (Array.isArray(value)) {
      example[key] = value.slice(0, 2)
      value.forEach((index) => {
        for (const [key, value] of Object.entries(index)) {
          if (typeof value === "string") {
            index[key] = `${value.substring(0, 20)} ...`;
          }
        }
      });
    }
  }

  element.textContent = `${JSON.stringify(example, null, 2)}`;
}

export function showExample(element) {
  element.style.display = "block";
}

export function formatJSON(element) {
  let inputData = element.value.trim();

  try {
    const parsedData = JSON.parse(inputData);

    const formattedJSON = JSON.stringify(parsedData, null, 2);

    element.value = formattedJSON;
  } catch (error) {
    alert("Erro ao formatar! Verifique se o conteúdo é um json válido");
  }
}

export function tabSpace(e) {
  if (e.key === "Tab") {
    e.preventDefault();

    const start = this.selectionStart;
    const end = this.selectionEnd;

    this.value =
      this.value.substring(0, start) + "  " + this.value.substring(end);

    this.selectionStart = this.selectionEnd = start + 2;
  }
}
