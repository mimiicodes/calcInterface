const calc = document.getElementById("calc");
const num7 = () => {
    calc.output.value+='7';
}
const num8 = () => {
    calc.output.value+='8';
}
const num9 = () => {
    calc.output.value+='9';
}
const add = () => {
    calc.output.value+='+';
}

const num4 = () => {
    calc.output.value+='4';
}
const num5 = () => {
    calc.output.value+='5';
}
const num6 = () => {
    calc.output.value+='6';
}
const minus = () => {
    calc.output.value+='-';
}

const num1 = () => {
    calc.output.value+='1';
}
const num2 = () => {
    calc.output.value+='2';
}
const num3 = () => {
    calc.output.value+='3';
}
const times = () => {
    calc.output.value+='*';
}

const num00 = () => {
    calc.output.value+='00';
}
const num0 = () => {
    calc.output.value+='0';
}
const divide = () => {
    calc.output.value+='/';
}
const equals = () => {
    calc.output.value= eval(calc.output.value);
}

const backspace = () => {
    var num = document.querySelector("#output").value;
    document.querySelector("#output").value = num.substr (0, num.length - 1);
};

const AC = () => {
    calc.output.value= '';
}