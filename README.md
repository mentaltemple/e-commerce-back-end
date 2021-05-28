[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Employee Tracker System

<img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/><img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/><img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/><img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img alt="Visual Studio Code" src="https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/><img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white"/>

As a developer, I wanted to build a back end e-commerce server and database where a user can get, post, update and delete data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

1. In terminal, navigate to root directory and run the following command:

```bash
   touch .env
```

2. Add your MySQL username, password and a unique database name to the newly created .env file with following syntax:

```bash
DB_USER='yourUserName'
DB_PW='yourPassword!'
DB_NAME='yourDataBaseName_db'
```

3. In terminal, run the following script to install dependencies:

```bash
npm i
```

4. Navigate to: (./db/schema.sql), select all and copy file contents

5. Open MySQL Workbench, create new tab (ctrl + t), paste contents, click execute (lightning bolt icon), refresh SCHEMAS

6. From the terminal, run the following command:

```bash
npm run seed
```

7. Run the following command to start the server:

```bash
nodemon server.js
```

8. Use Insomnia or a similar REST API Client to test.

## Usage

video demo: https://drive.google.com/drive/folders/13ObRxMhTGrxcY70UTXfwBSMaB6xDNaqd?usp=sharing

## Credits

Special thanks to:
-Benjamin Machock (Instructor)
-TJ Courey
-Jon Gregory
-Kevin Weeks
-Sam Roberson
-Jack Neuner
-Nicole Moore

## Tests

Testing is available through Insomnia (https://insomnia.rest/) or a similar REST API Client.

## Questions

For additional questions, please visit my GitHub profile:

https://github.com/mentaltemple

## License

MIT License

Copyright (c) [2021] [Joshua Randy Abeyta]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

```
