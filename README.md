# HalfBold Converter

**Half**Bold Converter is a small and simple text converter inspired by Bionic Reading. It allows you to turn plain text or HTML code into their partially bolded versions, making the text faster to read by adding fixation points your eyes can lock onto to every word. 

**Half**Bold Converter is not limited to plain text and can also convert HTML code (Markdown support in developmnet). It also provides customization to the conversion process, including adjustable bolding percentage of each word and color for marking text that's bold in the HTML input.

Check it out on GitHub Pages: [m4przybysz.github.io/halfbold-converter/](https://m4przybysz.github.io/halfbold-converter/)

For examples of text to convert, and before/after HTML conversion check the [examples](./examples) folder.

The converter can run fully locally, no server is needed. Built with HTML, JS, and CSS. Licensed under [MIT License](./LICENSE).

## Features
- Convert plain text or HTML into a half-bolded format
- Adjustable bolding percentage (5-75%)
- Marks already bolded text in HTML with custom color
- Big page mode for more comfortable reading of converted plain text

## Planned features
- Markdown conversion support
- QoL additions to big page mode (including: changing font, text size, page color, text color, and more)
- More converter settings (including: min chars to bold, skipping punctuation and special symbols)

## How to use
This tool can:
- turn plain text into ready-to-read partially bolded version
- add partial bolding to text in HTML code by adding \<b\> tags to words

To turn your text/HTML into half-bolded format follow these steps:
1. Write/paste text or HTML code into the **Input text** area.
2. Choose **input type**: Plain text or HTML.
3. Set the **bolding percentage** (how much of each word should be bolded).
4. If you're converting HTML, choose the **marking color** for text that's already bold.
5. Click the **Convert** button.

## Local setup
Files required to make the converter work:
- index.html
- converter.js
- style.css
(all 3 files are inside `./docs` folder)

To run the tool you need to put the files listed above in one directory and open index.html in a browser that supports modern HTML5, JavaScript and CSS.

## Contributing
For detailed contribution guidelines see [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## Issues and feedback
To report an issue and/or give feedback see [Issues](https://github.com/M4przybysz/halfbold-converter/issues) page on GitHub. To check out used issue templates files see [ISSUE_TEMPLATE](./.github/ISSUE_TEMPLATE/) folder.

Currently templates support submitting:
- bug reports
- feature request
- documentation additions/updates
- general feedback and inquiries