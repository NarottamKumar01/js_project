let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon =document.getElementById("copyIcon");


// showiing input slider value


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
});
genBtn.addEventListener('click',()=>{
    passBox.value = generatePassword();
})
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers ="0123456789";
let allSymbols ="~!@#$%^&*";
// function to genrate password
function generatePassword(){
    let genPassword = "";
    let allChars = "";


    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }



    let i = 1;
    while(i<= inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
   
    }
// math .random is a built in function in js whcih will give a number between  0 and 1 
   return genPassword;
}
copyIcon.addEventListener('click',()=>{
    if(passBox.value.length >0)
    navigator.clipboard.writeText(passBox.value);
copyIcon.innerText = "check";
copyIcon.title = "Password Copied";
setTimeout(()=>{
    copyIcon.innerHTML = "content_copy";
    copyIcon.title = "";
},4000)
})