import * as fs from "fs";
import * as path from "path";

console.log(`Merging cspell words into project dictionary`);
export function concatFilesContent(filesDirectory) {
    let concatenatedContent = "";
  
    const files = fs.readdirSync(path.resolve(filesDirectory));
    files.forEach((file) => {
      const fileContent = fs.readFileSync(path.resolve(`${filesDirectory}/${file}`)).toString();
      if (fileContent) {
        concatenatedContent = concatenatedContent.concat(`${fileContent}\n`);
      }
    });
  
    return concatenatedContent;
  }

const filesContent = concatFilesContent("config/cspell-dictionaries");
fs.writeFileSync("cspell.project-words.txt", filesContent);
