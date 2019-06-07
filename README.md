# code-retreat-june-2019

### How to run Jest unit test locally?
1. You need to have Node installed in order to use npm (node package manager).
2. Create a project folder.
3. In the terminal, go to that folder and type:
`npm init -y`. This will create a package.json file for you. 
4. Modify the JSON object to include following code:
`{
  "scripts": {
    "test": "jest"
  }
}`
5. In the terminal, run following command:
`npm install --save-dev jest`
6. Now you can run the tests in the terminal:
`npm run test` and see the results
