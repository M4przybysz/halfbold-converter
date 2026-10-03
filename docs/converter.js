//==================================================================================================================
// Support functions, variables and constants
//==================================================================================================================

// Clamp function
const clamp = (val, min, max) => Math.min(Math.max(val, min), max)

// Enum object for input text types
const InputTextType = Object.freeze({
    PLAIN_TEXT : "PLAIN_TEXT",
    HTML : "HTML",
    MARKDOWN : "MARKDOWN",
})

// Converter output element (div/textarea)
let output = document.getElementById("outputDiv")

//==================================================================================================================
// Text conversion functionality
//==================================================================================================================

// General converter function
function convertText() {
    // Converter inputs
    let inputText = document.getElementById('inputText').value // Text to convert
    let inputType = InputTextType[document.getElementById('inputType').value] // Type of inputed text (plain text/HTML)
    let boldingPercentage = document.getElementById('boldingPercentage').value // How much of each word is supposed to be bold (range 5-75%)
    let minCharsToBold = document.getElementById('minCharsToBold').value // minimum number of characters to bold (1 or more)
    let boldPunctuation = document.getElementById('boldPunctuation').checked // Bold or don't bold punctuation (true/false)
    let boldSpecialChars = document.getElementById('boldSpecialChars').checked // bold or don't bold special characters (true/false)
    let markingColor = document.getElementById('markingColor').value // Color of text that is already bolded in HTML (color)

    // Log converter inputs
    //console.log('Converter inputs: ', inputText, inputType, boldingPercentage, boldPunctuation, boldSpecialChars, markingColor)

    // Convert text based on input type
    switch(inputType) {
        case InputTextType.PLAIN_TEXT:
            output.innerHTML = convertPlainText(inputText, boldingPercentage, minCharsToBold, boldPunctuation, boldSpecialChars)
            document.getElementById('bigPage').innerHTML = output.innerHTML
            break;
        
        case InputTextType.HTML:
            output.value = convertHTML(inputText, boldingPercentage, minCharsToBold, boldPunctuation, boldSpecialChars, markingColor)
            break;

        case InputTextType.MARKDOWN:
            output.value = convertMarkdown(inputText, boldingPercentage, minCharsToBold, markingColor)
            break;
        
        default:
            console.warn(`Unknown input text type: ${inputType}`) // Warning if someone somehow uses unsupported inputType
            break;
    }
}

// Convert plain text
function convertPlainText(inputText, boldingPercentage, minCharsToBold, boldPunctuation, boldSpecialChars)
{
    // Create text splitting regex
    const SPLIT_REGEX = new RegExp(
        '(\\s+' + 
        (boldPunctuation ? '' : `|[.,;:!?'"()[\\]{}–—]+`) + 
        (boldSpecialChars ? '' : `|[@#$%^&*_+-=<>/\\\\|~\`]+`) + 
        ')'
    )

    // Create regex for checking if element is convertable
    const ELEMENT_CHECK_REGEX = new RegExp(
        '^\\s*$' +
        (boldPunctuation ? '' : `|^[.,;:!?'"()[\\]{}–—]+$`) + 
        (boldSpecialChars ? '' : `|^[@#$%^&*_+-=<>/\\\\|~\`]+$`)
    )

    // Split text while maintinging whitespaces (+ punctuation and special chars based on converter settings)
    let textArray = inputText.split(SPLIT_REGEX).filter(element => element != '') 
    //console.log(`textArray: ${textArray}`)

    // Convert the text
    textArray = textArray.map((element) => {
        if(!ELEMENT_CHECK_REGEX.test(element)) {
            // Bold the text if it's not empty or only whitespaces (or punctuation/special chars depending on settings)
            let boldingLength = clamp(element.length * boldingPercentage, minCharsToBold, element.length)
            element = '<b>' + element.slice(0, boldingLength) + '</b>' + element.slice(boldingLength)
        }
        return element
    })

    //console.log(`converted textArray: ${textArray}`)
    return textArray.join('') // Return converted text
}

// Convert HTML
function convertHTML(inputText, boldingPercentage, minCharsToBold, boldPunctuation, boldSpecialChars, markingColor)
{
    // Create text splitting regex
    const SPLIT_REGEX = new RegExp(
        `(\\s+|<!--[\\s\\S]*?-->|&[a-zA-Z0-9#]+;|<(?:"[^"]*"|'[^']*'|[^'">])*>` + 
        (boldPunctuation ? '' : `|[.,;:!?'"()[\\]{}–—]+`) + 
        (boldSpecialChars ? '' : `|[@#$%^&*_+-=<>/\\\\|~\`]+`) + 
        ')'
    )

    // Create regexes for tags to skip
    const TAGS_TO_SKIP_ARRAY = ['h[1-6]', 'script', 'style', 'code', 'pre', 'textarea', 'noscript', 'svg', 'canvas', 'select', 'math', 'datalist', 'template', 'iframe', 'object', 'audio', 'video', 'progress', 'meter', 'map', 'blockquote']
    const TAG_START_REGEX = new RegExp('^<(?:b|' + TAGS_TO_SKIP_ARRAY.join('|') + `)(?:\\s(?:"[^"]*"|'[^']*'|[^'">])*)?>$`, 'i')
    const TAG_END_REGEX = new RegExp('^<\\/(?:b|' + TAGS_TO_SKIP_ARRAY.join('|') + ')\\s*>$', 'i')

    // Create html body tag regexes
    const BODY_START_REGEX = /<body(?:\s(?:"[^"]*"|'[^']*'|[^'">])*)?>/i
    const BODY_END_REGEX = /<\/body\s*>/i

    // Create HTML b tag start regex
    const B_START_REGEX = /^<b(?:\s(?:"[^"]*"|'[^']*'|[^'">])*)?>$/i

    // Create regex for checking if element is convertable
    const ELEMENT_CHECK_REGEX = new RegExp(
        `^\\s*$|^<!--[\\s\\S]*?-->$|^&[a-zA-Z0-9#]+;$|^<(?:"[^"]*"|'[^']*'|[^'">])*>$` +
        (boldPunctuation ? '' : `|^[.,;:!?'"()[\\]{}–—]+$`) + 
        (boldSpecialChars ? '' : `|^[@#$%^&*_+-=<>\\/\\\\|~\`]+$`)
    )

    // Tag counters
    let bodyAllow = 0 // Counter to check if the text is inside the body. If it is then it'll be bolded according to the rules
    let tagSkipCounter = 0 // Counter for skipping tags that don't need bolding / aren't supposed to be bolded

    // Check if there are any body tags. If there's no body then treat everything as if it was inside of the body tag
    if(!inputText.match(BODY_START_REGEX) && !inputText.match(BODY_END_REGEX)) { bodyAllow = 1 }

    // Split text while maintaining whitespaces (+ punctuation and special chars based on converter settings) and separating HTML tags 
    let textArray = inputText.split(SPLIT_REGEX).filter(element => element != '')
    //console.log(`textArray: ${textArray}`)

    // Convert the code
    textArray = textArray.map((element) => {
        //console.log(`Element: ${element}\nParameters: ${bodyAllow}, ${tagSkipCounter}\nChecks: ${BODY_END_REGEX.test(element)}, ${BODY_END_REGEX.test(element)}, ${TAG_START_REGEX.test(element)}, ${TAG_END_REGEX.test(element)}, ${B_START_REGEX.test(element)}, ${!ELEMENT_CHECK_REGEX.test(element)}`)

        if(BODY_START_REGEX.test(element)) { // Check for HTML body start
            bodyAllow += 1 
        }
        else if(BODY_END_REGEX.test(element) && bodyAllow > 0) { // Check for HTML body end
            bodyAllow -= 1 
        }
        else if(TAG_START_REGEX.test(element) && bodyAllow > 0) { // Check for tags to skip start
            if(B_START_REGEX.test(element) && tagSkipCounter <= 0) { // Check if the tag is a <b> tag
                element = colorBoldHTML(element, markingColor) // Add coloring to the already bolded text
            }
            tagSkipCounter += 1
        }
        else if(TAG_END_REGEX.test(element) && bodyAllow > 0 && tagSkipCounter > 0) { // Check for tags to skip end
            tagSkipCounter -= 1
        }
        else if(!ELEMENT_CHECK_REGEX.test(element) && bodyAllow > 0 && tagSkipCounter <= 0) {
            // Bold the text if it's not empty or only whitespaces or HTML tag (or punctuation/special chars depending on settings)
            let boldingLength = clamp(element.length * boldingPercentage, minCharsToBold, element.length)
            element = '<b>' + element.slice(0, boldingLength) + '</b>' + element.slice(boldingLength)
        }

        return element
    })

    //console.log(`converted textArray: ${textArray}`)
    return textArray.join('') // Return converted text
}

// Convert Markdown
function convertMarkdown(inputText, boldingPercentage, minCharsToBold, markingColor) 
{
    // Create regex for splitting input into lines
    const LINE_SPLIT_REGEX = /(\r\n|\r|\n)/

    // Create regex for splitting text in lines
    const TEXT_SPLIT_REGEX = /(^\s*(?:[-*+]\s+\[[ xX]\]|[-*+]|\d+[.)])\s+|\s+|<!--[\s\S]*?-->|&[a-zA-Z0-9#]+;|\\.|!?\[[^\]]*\]\(\s*(?:[^()\s]|\([^()]*\))*(?:\s+(?:"[^"]*"|'[^']*'))?\s*\)|!?\[[^\]]*\]\[[^\]]*\]|!?\[[^\]]*\](?!\(|\[|:)|<(?:[a-zA-Z][a-zA-Z0-9+.-]*:[^<>\s]+|[^<>\s]+@[^<>\s]+)>|https?:\/\/[^\s<>]+|www\.[^\s<>]+|<(?:"[^"]*"|'[^']*'|[^'">])*>|\*+|_+|\`+|~+|\${1,2}|[.,;:!?'"()[\]{}–—]+|[@#$%^&*_+\-=\/\\|~`]+)/g

    // Create regexes for lines to skip
    const LINES_TO_SKIP_ARRAY = ['#{1,6}\\s', '>', '===', '\\-\\-\\-', '\\*\\*\\*', '___', '\\|', '\\[\\^[^\\]]+\\]:', ':\\s']
    const LINE_SKIP_REGEX = new RegExp('^\\s{0,3}(' + LINES_TO_SKIP_ARRAY.join('|') + ')')
    const NEXT_LINE_SKIP_REGEX = /^\s{0,3}(=+|-+)\s*$/
    const WHITESPACE_CODE_SKIP_REGEX = /^(\t| {4,})/
    const LIST_INDICATOR_REGEX = /^\s*(?:[-*+]\s+\[[ xX]\]|[-*+]|\d+[.)])\s+/ // For checking if previous line is a list item
    const TABLE_ROW_REGEX = /^\s*[^|\n]*(\|[^|\n]*){1,}\s*$/
    const TABLE_SEPARATOR_REGEX = /^\s*:?-+:?\s*(\|\s*:?-+:?\s*)*\|?\s*$/

    // Create regex for Markdown tag-likes to skip
    const TAGLIKE_TO_SKIP_REGEX = /^(`|```|~~~|~~|\*{1,3}|_{1,3})$/
    const MULTILINE_TAGLIKE_TO_SKIP_REGEX = /^(`|```|~~~)$/
    const NESTED_LIST_INDICATOR_REGEX = /^\s+(?:[-*+]\s+\[[ xX]\]|[-*+]|\d+[.)])\s+$/

    // Create regexes for HTML tags
    const HTML_TAG_START_REGEX = /^<(?!\/)(?!(?:[a-zA-Z][a-zA-Z0-9+.-]*:|[^<>\s]+@))(?:"[^"]*"|'[^']*'|[^'">])*(?<!\/)>$/
    const HTML_TAG_END_REGEX = /^<\/(?:"[^"]*"|'[^']*'|[^'">])*>$/
    const HTML_VOID_TAGS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']
    const HTML_VOID_TAG_REGEX = new RegExp(`^<(?:` + HTML_VOID_TAGS.join('|') + `)(?:\\s(?:"[^"]*"|'[^']*'|[^'">])*)?\\/?>$`, 'i')
    const HTML_TAGS_TO_SKIP_ARRAY = ['h[1-6]', 'script', 'style', 'code', 'pre', 'textarea', 'noscript', 'svg', 'canvas', 'select', 'math', 'datalist', 'template', 'iframe', 'object', 'audio', 'video', 'progress', 'meter', 'map', 'blockquote']
    const HTML_TAG_TO_SKIP_START_REGEX = new RegExp('^<(?:b|' + HTML_TAGS_TO_SKIP_ARRAY.join('|') + `)(?:\\s(?:"[^"]*"|'[^']*'|[^'">])*)?>$`, 'i')
    const HTML_TAG_TO_SKIP_END_REGEX = new RegExp('^<\\/(?:b|' + HTML_TAGS_TO_SKIP_ARRAY.join('|') + ')\\s*>$', 'i')

    // Create HTML b tag start and Markdown bold tag-like (**) regex
    const HTML_B_START_REGEX = /^<b(?:\s(?:"[^"]*"|'[^']*'|[^'">])*)?>$/i
    const MARKDOWN_B_START_REGEX = /^(\*\*|__)$/

    // Create regex for checking if element is convertable
    const ELEMENT_CHECK_REGEX = /^(?:\s*(?:[-*+]\s+\[[ xX]\]|[-*+]|\d+[.)])\s+|\s*|<!--[\s\S]*?-->|&[a-zA-Z0-9#]+;|\\.|!?\[[^\]]*\]\(\s*(?:[^()\s]|\([^()]*\))*(?:\s+(?:"[^"]*"|'[^']*'))?\s*\)|!?\[[^\]]*\]\[[^\]]*\]|!?\[[^\]]*\](?!\(|\[|:)|<(?:[a-zA-Z][a-zA-Z0-9+.-]*:[^<>\s]+|[^<>\s]+@[^<>\s]+)>|https?:\/\/[^\s<>]+|www\.[^\s<>]+|<(?:"[^"]*"|'[^']*'|[^'">])*>|\*+|_+|```|~~~|~~|\${1,2}|[.,;:!?'"()[\]{}–—]+|[@#$%^&*_+\-=/\\|~`]+)$/

    // Tag counters
    let htmlValidTagCounter = 0 // Counter for tags that do not block bolding. Used to switch between Markdown and HTML bolding methods
    let htmlTagSkipCounter = 0 // Counter for skipping HTML tags that don't need bolding / aren't supposed to be bolded
    let taglikeStack = [] // Stack for safer and better handling of Markdown tag-likes
    let replaceNextBold = false // Bool for marking if the next bold (** or __) taglike is the closing one and should be replaced 

    // Split input line by line
    let textLineArray = inputText.split(LINE_SPLIT_REGEX).filter(line => line != '')
    //console.log(textLineArray)

    // Loop through lines
    textLineArray = textLineArray.map((line, i, array) => {
        // Check for line skipping conditions
        let prevLineListCheck = (i - 2 >= 0 ? LIST_INDICATOR_REGEX.test(array[i - 2]) : false)
        let listCheck = LIST_INDICATOR_REGEX.test(line)
        let whitespaceCheck = WHITESPACE_CODE_SKIP_REGEX.test(line) && !prevLineListCheck
        let lineCheck = LINE_SKIP_REGEX.test(line) 

        let nextLineCheck = false
        if(i + 2 < array.length && !whitespaceCheck) { nextLineCheck = NEXT_LINE_SKIP_REGEX.test(array[i + 2]) }
        
        let tableCheck = false
        if(i + 2 < array.length && i - 2 >= 0 && !whitespaceCheck && (TABLE_ROW_REGEX.test(line) || TABLE_SEPARATOR_REGEX.test(line)) ) { tableCheck = TABLE_ROW_REGEX.test(array[i - 2]) || TABLE_SEPARATOR_REGEX.test(array[i - 2]) || TABLE_ROW_REGEX.test(array[i + 2]) || TABLE_SEPARATOR_REGEX.test(array[i + 2]) }

        if(!whitespaceCheck && !lineCheck && !nextLineCheck && !tableCheck) { // Continue if the line shouldn't be skipped
            // Split text in the line
            let textArray = line.split(TEXT_SPLIT_REGEX).filter(element => element != '')
            //console.log(textArray)

            // Loop through the elements in the line
            textArray = textArray.map((element) => {
                //console.log(`Element: ${element} \nCounters: ${htmlValidTagCounter}, ${htmlTagSkipCounter}, ${taglikeStack}, ${replaceNextBold} \nChecks: ${HTML_TAG_TO_SKIP_START_REGEX.test(element)}, ${HTML_TAG_TO_SKIP_END_REGEX.test(element)}, ${HTML_B_START_REGEX.test(element)}, ${TAGLIKE_TO_SKIP_REGEX.test(element)}, ${MARKDOWN_B_START_REGEX.test(element)}, ${!ELEMENT_CHECK_REGEX.test(element)}`)

                if(HTML_TAG_TO_SKIP_START_REGEX.test(element) && taglikeStack.length <= 0) { // Check for HTML tag to skip start
                    if(HTML_B_START_REGEX.test(element)) { // Check if the tag is a <b> tag
                        element = colorBoldHTML(element, markingColor) // Add coloring to the text that's already bolded via <b> tag 
                    }
                    htmlTagSkipCounter += 1
                }
                else if(HTML_TAG_START_REGEX.test(element) && !HTML_VOID_TAG_REGEX.test(element) && htmlTagSkipCounter <= 0 && taglikeStack.length <= 0) { // Check if the tag is a void tag (not standard start+end)
                    htmlValidTagCounter += 1 
                }
                else if(HTML_TAG_END_REGEX.test(element) && ( htmlTagSkipCounter > 0 || htmlValidTagCounter > 0) && taglikeStack.length <= 0) { // Check for HTML tags end
                    // Check if the tag it's one of the skipped or void tags
                    if(HTML_TAG_TO_SKIP_END_REGEX.test(element)) { htmlTagSkipCounter -= 1 }
                    else if(!HTML_VOID_TAG_REGEX.test(element) && htmlTagSkipCounter <= 0) { htmlValidTagCounter -= 1 }
                }
                else if(TAGLIKE_TO_SKIP_REGEX.test(element) && htmlTagSkipCounter <= 0) { // Check for Markdown tag-likes  
                    if(taglikeStack.length > 0 && taglikeStack[taglikeStack.length - 1] == element) { taglikeStack.pop() }
                    else if(!MULTILINE_TAGLIKE_TO_SKIP_REGEX.test(taglikeStack[taglikeStack.length - 1])) { taglikeStack.push(element) }
                    
                    // Check for ** or __ taglikes
                    if(MARKDOWN_B_START_REGEX.test(element) && !(taglikeStack.length > 0 && !MARKDOWN_B_START_REGEX.test(taglikeStack[taglikeStack.length - 1]))) {
                        if(replaceNextBold) {
                            element = '</b>'
                            replaceNextBold = false
                        }
                        else {
                            element = colorBoldMarkdown(markingColor) // Add coloring to the text that's already bolded via Markdown (** or __)
                            replaceNextBold = true
                        }
                    }
                }
                else if(!ELEMENT_CHECK_REGEX.test(element) && htmlTagSkipCounter <= 0 && taglikeStack.length <= 0 && !(NESTED_LIST_INDICATOR_REGEX.test(element) && listCheck)) {
                    // Bold the text if it's not empty or only whitespaces or HTML tag or Markdown tag-like (or punctuation/special chars depending on settings)
                    let boldingLength = clamp(element.length * boldingPercentage, minCharsToBold, element.length)

                    // Bold text HTML or Markdown way, depending on if it's inside of HTML or not
                    if(htmlValidTagCounter > 0) { element = '<b>' + element.slice(0, boldingLength) + '</b>' + element.slice(boldingLength) }
                    else { element = '**' + element.slice(0, boldingLength) + '**' + element.slice(boldingLength) }
                }

                return element
            })
            line = textArray.join('') // Join converted elements into a line
        }
        return line // Return converted line
    })

    //console.log(`converted textLineArray: ${textLineArray}`)
    return textLineArray.join('') // Return converted text
}

// color HTML <b> tag
function colorBoldHTML(tagString, color)
{
    const temp = document.createElement('div')
    temp.innerHTML = tagString + '</b>'
    const bTag = temp.firstElementChild
    bTag.style.color = color
    return bTag.outerHTML.replace(/<\/b>$/i, '')
} 

// color Markdown **/__ 
function colorBoldMarkdown(color)
{
    const temp = document.createElement('div')
    temp.innerHTML = '<b></b>'
    const bTag = temp.firstElementChild
    bTag.style.color = color
    return bTag.outerHTML.replace(/<\/b>$/i, '')
}

//==================================================================================================================
// Converter page events/behaviour/etc.
//==================================================================================================================

// Output of scrolling percentage while using the boldingPercentage range input 
function outputBoldingPercentage(value) {
    document.getElementById('boldingPercentageOutput').textContent = Math.round(value * 100) + '%'
}

// Show/hide page elements based on selected input
function selectInputType(type) {
    let inputType = InputTextType[type]
    let stupidBreaks = document.getElementsByClassName('stupidBreak')

    switch (inputType) {
        case InputTextType.PLAIN_TEXT:
            // Switch output object
            document.getElementById('outputTextarea').style.display = 'none' 
            output = document.getElementById("outputDiv")
            output.style.display = 'block'

            // Show "Open big page" button
            document.getElementById('openBigPageButton').style.display = 'block'

            // Show punctuation and special chars checkboxes
            document.getElementById('boldPunctuationDiv').style.display = 'block'
            document.getElementById('boldSpecialCharsDiv').style.display = 'block'
            for(const element of stupidBreaks) { element.style.display = 'block' }

            // Hide marking color
            document.getElementById('markingColorDiv').style.display = 'none'

            break;
        
        case InputTextType.HTML:
            // Switch output object
            document.getElementById("outputDiv").style.display = 'none' 
            output = document.getElementById("outputTextarea")
            output.style.display = 'block'

            // Hide "Open big page" button
            document.getElementById('openBigPageButton').style.display = 'none'

            // Show punctuation and special chars checkboxes
            document.getElementById('boldPunctuationDiv').style.display = 'block'
            document.getElementById('boldSpecialCharsDiv').style.display = 'block'
            for(const element of stupidBreaks) { element.style.display = 'block' }

            // Show marking color
            document.getElementById('markingColorDiv').style.display = 'block'

            break;
        
        case InputTextType.MARKDOWN:
            // Switch output object
            document.getElementById("outputDiv").style.display = 'none' 
            output = document.getElementById("outputTextarea")
            output.style.display = 'block'

            // Hide "Open big page" button
            document.getElementById('openBigPageButton').style.display = 'none'

            // Hide punctuation and special chars checkboxes
            document.getElementById('boldPunctuationDiv').style.display = 'none'
            document.getElementById('boldSpecialCharsDiv').style.display = 'none'
            for(const element of stupidBreaks) { element.style.display = 'none' }

            // Show marking color
            document.getElementById('markingColorDiv').style.display = 'block'

            break;
        
        default:
            console.warn(`Unknown input text type: ${inputType}`) // Warning if someone somehow selects unsupported inputType
            break;
    }
}

// Open big page
function openBigPage() { document.getElementById('bigPageContainer').style.display = 'flex' }

// Close big page
function closeBigPage() { document.getElementById('bigPageContainer').style.display = 'none' }

// Big page color
function bigPageBackgroundColor(value) {
    document.getElementById('bigPage').style.backgroundColor = value;
}

// Big page font color
function bigPageFontColor(value) {
    document.getElementById('bigPage').style.color = value;
}

// Big page text size
function bigPageTextSize(value) {
    document.getElementById('bigPage').style.fontSize = value + "px"
}

// Big page font 
function bigPageFont(value) {
    document.getElementById('bigPage').style.fontFamily = value;
}

// Big page width 
function bigPageWidth(value) {
    document.getElementById('bigPage').style.width = "calc(" + value + "vw - 40px)";
    document.getElementById("fillerLeft").style.width = (100 - value) / 2 + "vw";
    document.getElementById("bigPageSettings").style.width = (100 - value) / 2 + "vw";
}