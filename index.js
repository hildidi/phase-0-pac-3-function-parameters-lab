//Define a function called [introduction] that defines a parameter, [name], and returns the phrase: "Hi, my name is ${name}."
//Two parameters:
/*function logTwoValues(value1, value2){
    console.log(`The two values are ${value1}, ${value2}`);
}*/

function introduction(name){
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}