const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');


/**
 * Recursively validate if folder structure follows same structure
*
* @param {string} filesDirectory - The path to the directory containing the files.
*/
function recursivelyValidateFolders(filesDirectory) {
    fs.readdirSync(filesDirectory, { withFileTypes: true }).forEach((file) => {
        const signedOffFileName = `${filesDirectory}/${file.name}/_public_signed_off`
        const mataFileName = `${filesDirectory}/${file.name}/.meta.yml`
        if (file.isDirectory() && !["contribution-guidelines"].includes(file.name)) {
            if (!fs.existsSync(path.resolve(signedOffFileName))) {
                console.error(
                    `❌ _public_signed_off file in ${file.name} docs folder is missing.`
                );
                process.exit(1);
            }
            if (!fs.existsSync(path.resolve(mataFileName))) {
                console.error(
                    `❌ meta.yml file in ${file.name} docs folder is missing.`
                );
                process.exit(1);
            }
        }
    });
};

recursivelyValidateFolders("docs")