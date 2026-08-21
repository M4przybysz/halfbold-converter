/* 
    Copyright (c) 2026 Maciej Przybył, Alina Osińska
    Licensed under the MIT License. See LICENSE file.
*/

// 
const InputTextType = Object.freeze({
    PLAIN_TEXT : "PLAIN_TEXT",
    HTML : "HTML",
    MARKDOWN : "MARKDOWN"
})

// 
function outputBoldingPercentage(value) {
    document.getElementById('boldingPercentageOutput').textContent = Math.round(value * 100) + '%'
}

// Converter functions
function convertText() {
    // Converter arguments
    let inputText = document.getElementById("inputText").value // Text to convert
    let inputType = InputTextType[document.getElementById("inputType").value] // Type of inputed text (plain text/HTML/Markdown)
    let boldingPercentage = document.getElementById("boldingPercentage").value // How much of each word is supposed to be bold (range 5-75%)
    let markingColor = document.getElementById("markingColor").value // Color of text that is already bolded in HTML and Markdown (hex color)

    // Log arguments
    console.log(inputText, inputType, boldingPercentage, markingColor)
}