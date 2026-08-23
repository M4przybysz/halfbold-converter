/* 
    Copyright (c) 2026 Maciej Przybył, Alina Osińska
    Licensed under the MIT License. See LICENSE file.
*/

// Clamp function
const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

// Enum object for input text types
const InputTextType = Object.freeze({
    PLAIN_TEXT : "PLAIN_TEXT",
    HTML : "HTML",
    MARKDOWN : "MARKDOWN"
})

// Output of scrolling percentage while using the boldingPercentage range input 
function outputBoldingPercentage(value) {
    document.getElementById('boldingPercentageOutput').textContent = Math.round(value * 100) + '%'
}

// General converter function
function convertText() {
    // Converter inputs
    let inputText = document.getElementById("inputText").value // Text to convert
    let inputType = InputTextType[document.getElementById("inputType").value] // Type of inputed text (plain text/HTML/Markdown)
    let boldingPercentage = document.getElementById("boldingPercentage").value // How much of each word is supposed to be bold (range 5-75%)
    let markingColor = document.getElementById("markingColor").value // Color of text that is already bolded in HTML and Markdown (hex color)

    // Log converter inpus
    console.log("Converter inputs: ", inputText, inputType, boldingPercentage, markingColor)

    // Assign output HTML element
    let output = null  
    if(inputType == InputTextType.PLAIN_TEXT) {
        output = document.getElementById("outputDiv")

        // Hide textarea and show outputDiv to make output text ready-to-read
        if(window.getComputedStyle(output, null).display == 'none') { document.getElementById("outputTextarea").style.display = 'none' }
    }
    else {
        output = document.getElementById("outputTextarea")

        // Hide div and show textarea to return HTML/Markdown code with bolding applied
        if(window.getComputedStyle(output, null).display == 'none') { document.getElementById("outputDiv").style.display = 'none' }
    }
    output.style.display = 'block'

    // Convert text based on input type
    switch(inputType) {
        case InputTextType.PLAIN_TEXT:
            output.innerHTML = convertPlainText(inputText, boldingPercentage)
            break;
        
        case InputTextType.HTML:
            output.innerText = convertHTML(inputText, boldingPercentage, markingColor)
            break;
        
        case InputTextType.MARKDOWN:
            output.innerText = convertMarkdown(inputText, boldingPercentage, markingColor)
            break;
        
        default:
            console.warn(`Unknown input text type: ${inputType}`) // Warning if someone uses unsupported inputType
            break;
    }
}

// Convert plain text
function convertPlainText(inputText, boldingPercentage)
{
    textArray = inputText.split(/(\s+)/) // Split text while maintinging whitespaces
    console.log(`textArray: ${textArray}`)

    textArray = textArray.map((element) => {
        if(!/^\s*$/.test(element)) {
            // Bold the text if it's not empty or only whitespaces
            let boldingLength = clamp(element.length * boldingPercentage, 1, element.length)
            element = '<b>' + element.slice(0, boldingLength) + '</b>' + element.slice(boldingLength)
        }
        return element
    })

    console.log(`converted textArray: ${textArray}`)
    return textArray.join("") // Return converted text
}

// Convert HTML
function convertHTML(inputText, boldingPercentage, markingColor)
{
    
}

// Convert markdown
function convertMarkdown(inputText, boldingPercentage, markingColor)
{
    
}