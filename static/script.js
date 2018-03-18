let logo = document.getElementById("logo1");

let total_length = document.getElementById("total_length");
let total_height = document.getElementById("total_height");

let valueA = document.getElementById("valueA");
let valueB = document.getElementById("valueB");

let colorLineA = document.getElementById("colorLineA");
let strokColorLineA = document.getElementById("strokeColorLineA");
let strokeWidthLineA = document.getElementById("strokeWidthLineA");




// Cache parametricSvg stuff.
let tree = parametricSvg(logo);
let parameters = {};
function updateSVG () {
    parameters.length = parseInt(total_length.value);
    parameters.a = parseInt(valueA.value);
    parameters.b = parseInt(valueB.value);
    parameters.height = parseInt(total_height.value);
    parameters.cy=22.5-(parameters.height/2);
    parameters.cx= parameters.a;
    parameters.rectWidth= parameters.length-(2* parameters.a);
    parameters.rectHeight = parameters.height;
    parameters.strokeColorLineA = strokeColorLineA.value;
    parameters.strokeWidthLineA = strokeWidthLineA.value;
    parameters.colorLineA = colorLineA.value;
    parametricSvg(tree, parameters);
}


total_length.addEventListener("input", updateSVG);
total_height.addEventListener("input", updateSVG);
valueA.addEventListener("input", updateSVG);
valueB.addEventListener("input", updateSVG);
strokeWidthLineA.addEventListener("input", updateSVG);
strokeColorLineA.addEventListener("input", updateSVG);
colorLineA.addEventListener("input", updateSVG);
