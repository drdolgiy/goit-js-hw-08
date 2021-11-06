import { throttle } from "lodash";

const form = document.querySelector('.feedback-form');
let textInputObject = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

getTextItemForm();

form.addEventListener('submit', onClickSubmit);

function onClickSubmit(evt) {
    evt.preventDefault();
    let dataFormResult = {};
  const formData = new FormData(evt.currentTarget);

  formData.forEach((value, name) => {
    dataFormResult[name] = value;
  });

  console.log(dataFormResult);
  evt.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);

}

form.addEventListener('input', throttle(onClickInput, 500));

function onClickInput(evt) {
  textInputObject[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY,  JSON.stringify(textInputObject) )
};

function getTextItemForm() {
  let getTextItem = localStorage.getItem(LOCALSTORAGE_KEY);

if(getTextItem) {
    getTextItem = JSON.parse(getTextItem);
   Object.entries(getTextItem).forEach(([name, value]) => {
    textInputObject[name] = value;
    form.elements[name].value = value;
   })
}
}

