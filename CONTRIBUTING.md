# HalfBold Converter Contribution Guidelines

Welcome and thank you for considering contributing to **Half**Bold Converter. 

**Half**Bold Converter is an open source project and we look forward to receive contributions from you. There are many ways to contribute, including reporting bugs, suggesting features, improving the documentation, giving feedback and/or writing code that may be incorporated into the converter. 

If you want to contribute follow the guidelines below and:
- for bug reports, feature requests, docs update request and general feedback/inquiries see [Issues and feedback](#issues-and-feedback) section.
- for coding, writing and contributions done via pull requests see [Development contributions](#development-contributions) section.

## General contribution rules
- Follow the design and development philosophy, and coding conventions described below.
- Follow the things written in issue and pull request templates.
- Do not make duplicates. Before submitting a new pull request, bug report, feature request, docs update, or general feedback/inquiry check if a similar thing is already submitted, or listed in [Features](./README.md/#features) or [Planned features](./README.md/#planned-features) on the newest version from the main branch.
- Create a new issue before submitting a pull request for a bug fix, feature, or docs update that is not yet reported or listed in [Features](./README.md/#features) or [Planned features](./README.md/#planned-features) on the newest version from the main branch.
- We don't require full English proficiency as long as the text is understandable, but still please check your spelling and grammar.

## HalfBold Converter design and development philosophy
- **Half**Bold Converter is a tool allowing converting text (and text inside HTML code) to a faster to read half-bolded format.
- **Half**Bold Converter is **SMALL** and **SIMPLE**. We are following the KISS rule during development.
- **Half**Bold Converter is **EASY-TO-USE** and **CUSTOMIZABLE**. The converter has 1 input, 1 output and setting to custmize the conversion. 
- **Half**Bold Converter is independent and can work fully locally. The entire converter is packed in 3 files and needs only a browser with modern HTML5, JS and CSS support. No internet and no server is required.
- **Half**Bold Converter is open source and free under the [MIT License](./LICENSE), and anyone can use it.

## Coding conventions
1. **KISS** (Keep It Simple, Stupid). Keep your code simple, concise and readable. Do not overengineer things.
2. Use **camelCase** for variables and functions.
3. Use **PascalCase** for Classes and Objects.
4. Use **ALL_CAPS** for CONSTANTS.
5. Comment all sections of the code that are long, complex, and/or hard to understand.
6. Do not make the tool dependent on external resources and internet. Make sure the converter stays fully functional on local machines without a need for internet access and/or servers.

## Issues and feedback
To report an issue and/or give feedback see [Issues](https://github.com/M4przybysz/halfbold-converter/issues) page on GitHub and create a new report. To check out used issue templates files see [ISSUE_TEMPLATE](./.github/ISSUE_TEMPLATE/) folder.

Currently templates support submitting:
- bug reports
- feature request
- documentation additions/updates
- general feedback and inquiries

Please follow the things written in the templates when submitting your issue. 

## Development contributions
Working on the project:
1. Create your own fork of the code.
2. Do the changes in your fork.
3. Make sure your changes follow the guidelines written in this file.
4. Submit a pull request.

Sending  pull request:
- Follow the guidelines written in this file and in the pull request template.
- Do not target the main branch.
- Make sure your changes are described clearly and in detail.
- List all issues applicable to the changes you made.
- Perform a self-review of the changes and test them in at least one browser on Windows OS (if applicable). The more OS + browser combinations tested, the better, but don't worry if you can't test all of them.