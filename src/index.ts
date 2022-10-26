import HtmlGreeter from "./models/HtmlGreeter";

const promptly = require("promptly");

// (async () => {
//   const inputFromUser: string = await promptly.prompt("Enter a greeting: ");
//   console.log(inputFromUser);
//   const nameFromUser: string = await promptly("Enter a name: ");
//   const tagNameFromUser: string = await promptly.prompt("Enter a tag name: ");
//   const htmlObject: HtmlGreeter = new HtmlGreeter(
//     inputFromUser,
//     tagNameFromUser
//   );
//   console.log(htmlObject.greet(nameFromUser));
// })();

(async () => {
  const greetingFromUser: string = await promptly.prompt("Enter a greeting: ");
  //   console.log(greetingFromUser);
  const nameFromUser: string = await promptly.prompt("Enter a name: ");
  const tagNameFromUser: string = await promptly.prompt("Enter a tag name: ");
  const htmlObj: HtmlGreeter = new HtmlGreeter(
    greetingFromUser,
    tagNameFromUser
  );
  console.log(htmlObj.greet(nameFromUser));
})();
