let $ = document;
let ConvertorInput = $.getElementById("ConvertorInput");
let ConvertorResult = $.getElementById("ConvertorResult");
let ConvertBtn = $.getElementById("ConvertBtn");
let ChangeUnitBtn = $.getElementById("ChangeUnitBtn");
let ResetBtn = $.getElementById("ResetBtn");
let ConvertorTitle = $.getElementById("ConvertorTitle");

let ChangeUnit = true;

function TempConvert() {
    let InputValue = ConvertorInput.value;
    if(InputValue === ""){
        ConvertorResult.innerHTML = `<div class="Result__Wrapper__Error"><span class="convertor__result">لطفا مقدار عددی وارد نمایید</span></div>`;
        ConvertorInput.focus();
  }else if (ChangeUnit) {
    ConvertorResult.classList.remove('text-rose');
    let ConvertFahrenheitToCelsius = (InputValue - 32) * (5 / 9).toFixed(2);
    ConvertorResult.innerHTML = `<div class="Result__Wrapper"><span class="convertor__result">هر ${InputValue} درجه فارنهایت ${ConvertFahrenheitToCelsius} درجه سلسیوس می باشد</span></div>`;
    ConvertorInput.value = "";
} else {
    ConvertorResult.classList.remove('text-rose');
    let ConvertCelsiusToFahrenheit = ((InputValue * 1.8) + 32).toFixed(2);
    ConvertorResult.innerHTML = `<div class="Result__Wrapper"><span class="convertor__result">هر ${InputValue} درجه سلسیوس  ${ConvertCelsiusToFahrenheit} درجه فارنهایت می باشد</span></div>`;
    ConvertorInput.value = "";
}
ChangeUnit = false;
};



//EventListener
ConvertBtn.addEventListener('click' , TempConvert)
ConvertorInput.addEventListener('keydown' , (e) => {
  if(e.keyCode === 13) {
   TempConvert() 
  }
})