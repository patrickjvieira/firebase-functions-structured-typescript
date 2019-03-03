/**
 * Search for '.ts' files recursively inside this directory 
 * then to convert path of each file to a camel case name to be 
 * registered as function name on firebase cloud function.
 * 
 * Based on:
 *  https://codeburst.io/organizing-your-firebase-cloud-functions-67dc17b3b0da
 *  https://github.com/firebase/functions-samples/issues/170
 * 
 * @author: Patrick Vieira
 */

import * as glob from 'glob';
import * as camelCase from 'camelcase';
import * as path from 'path';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

glob.sync('./**/*.js', { cwd: __dirname }).forEach((file)=> {
    
    const structuredName = camelCase(file.substring(2, file.length - path.extname(file).length).split('/').join('_')).trim();

    if (structuredName !== path.basename(__filename).split('.')[0].trim()) {
        module.exports[structuredName] = require(file);
    }

});
