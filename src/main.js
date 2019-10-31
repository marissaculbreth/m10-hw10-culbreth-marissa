// // The number “212” immediately prints inside of the span with the ID "boiling-temp" using an arrow function
// const boilTemp = () => {
//   document.createTextNode('212');
//   document.getElementById("boiling-temp").appendChild(boilTemp);
// }
//
// // The number “32” immediately prints inside of the span with the ID "freezing-temp" using an arrow function
// const freezeTemp = () => {
//   document.createTextNode("32");
//   document.getElementById("freezing-temp").appendChild(freezeTemp);
// }
//
// // Any number of your choice immediately prints inside of the span with the ID "water-temp" using an arrow function
// let waterTemp = () => {
//   document.createTextNode("67");
//   document.getElementById("water-temp").appendChild(waterTemp);
// }
//
// // Use a setTimeout() method to make the following occur after 3 seconds (3000 milliseconds):
// // If the number stored in “water-temp” is neither above 212 nor below 32, remove the class “hide” and add the class “show” to the section with the ID “good-temp” so that the message “The water is fine. Jump on in.” appears
// let sectionWaterTemp = document.getElementById('good-temp');
// setTimeout(() => {
//   sectionWaterTemp.classList.remove('hide');
//   sectionWaterTemp.classList.add('show');
// }, 3000);
