const passwordBox = document.getElementById('password')


const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number= "0123456789"
const symbol="@#$%^&*()_+~|}{[]></?-=:';`"
const allChars = upperCase+lowerCase+number+symbol;
Length=15
const createPassword=()=>{
    let password = " ";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];

    while(Length>=password.length)
    {
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password
}

const copyPassword=()=>{
    passwordBox.select();
    document.execCommand("copy")
    passwordBox.value=""
}

const setLength = ()=>{
    let range = document.getElementById("range")
    let get = document.getElementById("get")
    get.innerHTML=range.value
    Length=range.value
}