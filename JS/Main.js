let $ = document;
let ConvertorInput = $.querySelector("#ConvertorInput");
let ConvertorResult = $.querySelector("#ConvertorResult");
let ConvertBtn = $.querySelector("#ConvertBtn");
let ChangeUnitBtn = $.querySelector("#ChangeUnitBtn");
let ResetBtn = $.querySelector("#ResetBtn");
let ConvertorTitle = $.querySelector("#ConvertorTitle");

let ChangeUnitFlag = true;

function TempConvert() {
    let InputValue = ConvertorInput.value;
    if(InputValue === ""){
        ConvertorResult.innerHTML = `<div class="Result__Wrapper__Error"><span class="convertor__result">لطفا مقدار عددی وارد نمایید</span></div>`;
        ConvertorInput.focus();
  }else if (ChangeUnitFlag) {
    let ConvertFahrenheitToCelsius = (InputValue - 32) * (5 / 9).toFixed(2);
    ConvertorResult.innerHTML = `<div class="Result__Wrapper"><span class="convertor__result">هر ${InputValue} درجه فارنهایت ${ConvertFahrenheitToCelsius} درجه سلسیوس می باشد</span></div>`;
    ConvertorInput.value = "";
} else {
    let ConvertCelsiusToFahrenheit = ((InputValue * 1.8) + 32).toFixed(2);
    ConvertorResult.innerHTML = `<div class="Result__Wrapper"><span class="convertor__result">هر ${InputValue} درجه سلسیوس  ${ConvertCelsiusToFahrenheit} درجه فارنهایت می باشد</span></div>`;
    ConvertorInput.value = "";
}
ChangeUnitFlag = false;
};
function ChangeUnit() {
  ConvertorResult.classList.remove('text-rose');
if ( $.title === "°F به °C") {
  ChangeUnitFlag = true;
  ConvertorTitle.innerHTML = "تبدیل °C به °F و برعکس";
  $.title = "°C به °F";
  ConvertorInput.setAttribute("placeholder", "تبدیل °F به  °C...");
  ConvertorResult.innerHTML = `<div class="Result__Wrapper"><span class="convertor__result">
   واحد از فارنهایت
    به سلسیوس تغییر یافت</span></div>`;
    ConvertorInput.focus();
} else {
  ChangeUnitFlag = false;
  ConvertorTitle.innerHTML = "تبدیل °F به °C و برعکس";
  $.title = "°F به °C";
  ConvertorInput.setAttribute("placeholder", "تبدیل °C به °F ...");
  ConvertorResult.innerHTML = `<div class="Result__Wrapper"><span class="convertor__result"> واحد از سلسیوس به فارنهایت تغییر یافت</span></div>`;
  ConvertorInput.focus();
}
};


//EventListener
ConvertBtn.addEventListener('click' , TempConvert)
ConvertorInput.addEventListener('keydown' , (e) => {
  if(e.keyCode === 13) {
   TempConvert() 
  }
})
ChangeUnitBtn.addEventListener('click' , ChangeUnit)