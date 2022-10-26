import Greeter from "./Greeter";

export default class LoudGreeter extends Greeter {
  private extra: string = "!";
  addVolume(): void {
    this.extra += "!";
  }
  greet(newName: string): string {
    return `${super.greet(newName)}${this.extra}`;
  }
}
