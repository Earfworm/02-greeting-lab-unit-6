import Greeter from "./Greeter";

export default class HtmlGreeter extends Greeter {
  tagName: string;

  constructor(greeting: string, inputTagName: string = "h1") {
    super(greeting);
    this.tagName = inputTagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
  }
}
