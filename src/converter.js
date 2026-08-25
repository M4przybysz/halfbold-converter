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
        if(window.getComputedStyle(output, null).display == 'none') { 
            document.getElementById("outputTextarea").style.display = 'none' 
            output.style.display = 'block'
        }
    }
    else {
        output = document.getElementById("outputTextarea")

        // Hide div and show textarea to return HTML/Markdown code with bolding applied
        if(window.getComputedStyle(output, null).display == 'none') { 
            document.getElementById("outputDiv").style.display = 'none' 
            output.style.display = 'block'
        }
    }

    // Convert text based on input type
    switch(inputType) {
        case InputTextType.PLAIN_TEXT:
            output.innerHTML = convertPlainText(inputText, boldingPercentage)
            break;
        
        case InputTextType.HTML:
            output.value = convertHTML(inputText, boldingPercentage, markingColor)
            break;
        
        case InputTextType.MARKDOWN:
            output.value = convertMarkdown(inputText, boldingPercentage, markingColor)
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
    return textArray.join('') // Return converted text
}

// Convert HTML
function convertHTML(inputText, boldingPercentage, markingColor)
{
    // Split text while maintaining whitespaces and separating HTML tags
    textArray = inputText.split(/(\s+|<(?:"[^"]*"|'[^']*'|[^'">])*>)/).filter(element => element != '')
    console.log(`textArray: ${textArray}`)

    let bodyAllow = 0 // Counter to check if the text is inside the body. If it is then it'll be bolded according to the rules
    let tagSkipCounter = 0 // Counter for skipping tags that don't need bolding / aren't supposed to be bolded

    let tagsToSkip = ['h[1-6]', 'script', 'style', 'code', 'pre', 'textarea', 'noscript', 'svg', 'canvas', 'select', 'math', 'datalist', 'template', 'iframe', 'object', 'audio', 'video', 'progress', 'meter', 'map']
    let tagStartRegex = new RegExp('<(?:' + tagsToSkip.join('|') + `)(?:\\s(?:"[^"]*"|'[^']*'|[^'">])*)?>`, 'i')
    let tagEndRegex = new RegExp('<\\/(?:b|' + tagsToSkip.join('|') + ')\\s*>', 'i')

    textArray = textArray.map((element) => {
        if(/<body(?:\s(?:"[^"]*"|'[^']*'|[^'">])*)?>/i.test(element)) { // Check for HTML body start
            bodyAllow += 1 
        }
        else if(/<\/body\s*>/i.test(element)) { // Check for HTML body end
            bodyAllow -= 1 
        }
        else if(/<b(?:\s(?:"[^"]*"|'[^']*'|[^'">])*)?>/i.test(element) && bodyAllow > 0 && tagSkipCounter <= 0) { // Check for already bolded text
            tagSkipCounter += 1

            // Add coloring to the already bolded text
            element = setHTMLBoldColor(element, markingColor)
        }
        else if(tagStartRegex.test(element)) { // Check for tags to spik start
            tagSkipCounter += 1
        }
        else if(tagEndRegex.test(element)) { // Check for tags to skip end
            tagSkipCounter -= 1
        }
        else if(!/^\s*$|^<(?:"[^"]*"|'[^']*'|[^'">])*>$/.test(element) && bodyAllow > 0 && tagSkipCounter <= 0) {
            // Bold the text if it's not empty or only whitespaces
            let boldingLength = clamp(element.length * boldingPercentage, 1, element.length)
            element = '<b>' + element.slice(0, boldingLength) + '</b>' + element.slice(boldingLength)
        }
        return element
    })

    console.log(`converted textArray: ${textArray}`)
    return textArray.join('') // Return converted text
}

function setHTMLBoldColor(tagString, color)
{
    const temp = document.createElement('div')
    temp.innerHTML = tagString + '</b>'
    const bTag = temp.firstElementChild
    bTag.style.color = color
    return bTag.outerHTML.replace(/<\/b>$/i, '')
}

// Convert Markdown
function convertMarkdown(inputText, boldingPercentage, markingColor)
{
    
}