// utilities section 
function getInputFieldValueById(fieldId){
    const InputField = document.getElementById(fieldId)
    const InputFieldString = InputField.value;
    const InputFieldValue = parseFloat(InputFieldString)
    InputField.value = '';
    return InputFieldValue;
}

function getInputTextElementById(areaId){
    const InputText = document.getElementById(areaId)
    const InputTextString = InputText.innerText;
    const InputTextValue = parseFloat(InputTextString)    
    return InputTextValue;
}

function setFinalValueById(areaId, areaValue){
    const InputText = document.getElementById(areaId)
    InputText.innerText = areaValue
}

// Display Calculated Area

function displayAllCalculation ( areaType, calculatedArea){
const calculationDisplayArea = document.getElementById("calculationDisplay");
const count = calculationDisplayArea.childElementCount
const p = document.createElement('p');
p.classList.add('my-4')
p.innerHTML = `${count}. ${areaType} ${calculatedArea} cm <sup>2</sup>`
calculationDisplayArea.appendChild(p)
}

// Triangle calculation section 

function triangleCalculation(){
 const base = getInputFieldValueById("triangleBase");
 const height = getInputFieldValueById("triangleHeight");
 if(isNaN(base)||isNaN(height)){
    alert ('Please Insert Number')
    return
 };
 const triangleArea = 0.5 * base * height;
 setFinalValueById("triangleAreaResult", triangleArea);

 displayAllCalculation ( "Triangle", triangleArea)
}

// Rectangle calculation section 

function rectangleCalculation(){
 const length = getInputFieldValueById("rectangleLength");
 const width = getInputFieldValueById("rectangleWidth");
 if(isNaN(length)||isNaN(width)){
    alert ('Please Insert Number')
    return
 };
 const rectangleArea = length * width;
 setFinalValueById("rectangleAreaResult", rectangleArea);

 displayAllCalculation ( "Rectangle", rectangleArea)
}

// Parallelogram calculation section 

function parallelogramCalculation(){
const base = getInputFieldValueById("parallelogramBase");
    
const height = getInputFieldValueById("parallelogramHeight");
    
if(isNaN(base)||isNaN(height)){
alert ('Please Insert Number')
return
};
const parallelogramArea = base * height;
setFinalValueById("parallelogramAreaResult", parallelogramArea);
    
displayAllCalculation ( "Parallelogram", parallelogramArea)
}

// Rhombus calculation section 

function rhombusCalculation(){
const base = getInputFieldValueById("rhombusBase");

const height = getInputFieldValueById("rhombusHeight");

if(isNaN(base)||isNaN(height)){
   alert ('Please Insert Number')
   return
};
const rhombusArea = base * height;
setFinalValueById("rhombusAreaResult", rhombusArea);

displayAllCalculation ( "Parallelogram", rhombusArea)
}

 // Pentagon calculation section 

function pentagonCalculation(){
const perimeter  = getInputFieldValueById("pentagonPerimeter");
    
const apothem = getInputFieldValueById("pentagonApothem");
    
if(isNaN(perimeter)||isNaN(apothem)){
    alert ('Please Insert Number')
    return
};
const pentagonArea = 0.5 * apothem * perimeter;

setFinalValueById("pentagonAreaResult", pentagonArea);
    
displayAllCalculation ( "Pentagon", pentagonArea)
}
       
// Ellipse calculation section 

function ellipseCalculation(){
    const majorAxis  = getInputFieldValueById("majorAxis");
        
    const minorAxis = getInputFieldValueById("minorAxis");
        
    if(isNaN(majorAxis)||isNaN(minorAxis)){
        alert ('Please Insert Number')
        return
    };
    const ellipseAreaFloat = Math.PI * majorAxis * minorAxis;

    const ellipseArea = ellipseAreaFloat.toFixed(2);
    
    setFinalValueById("ellipseAreaResult", ellipseArea);
        
    displayAllCalculation ( "Ellipse", ellipseArea)
    }