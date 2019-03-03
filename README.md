# firebase-functions-structure

How-to:
 - Every function in each file must be exported by using 'module.exports = functions'
 - Admin SDK must be started on index file or using try catch in each file: 'try {admin.initializeApp(functions.config().firebase);} catch(e) {} '
 - Configure package.json, typescript compiler needs some sets to work properly:
    * "build": "rm -rf lib/; tsc;",
    * "serve": "rm -rf lib/; tsc; sudo firebase serve",
    * "shell": "rm -rf lib/; tsc; sudo firebase functions:shell",

Dependencies:
  - "camelcase": "^4.1.0",
  - "glob": "^7.1.1"
 
 Use:
  - npm run serve: To test functions locally over http
  - npm run shell: To test functions locally simulation firebase enviorment triggers
  - npm run deploy: To deploy your functions to firebase cloud

Example:
  - File tree:
    |src
    |_auth/user
    |__on-create.ts
    |_httpx
    |__firebase-1.ts
    |__firebase-2.ts
    
  Result in firebase functions deployed as:
  |- authUserOnCreate.ts
  |- httpxFirebase1.ts
  |- httpxFirebase2.ts
