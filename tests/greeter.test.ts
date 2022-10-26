import Greeter from "../src/models/Greeter";
import HtmlGreeter from "../src/models/HtmlGreeter";
import JavaScriptGreeter from "../src/models/JavaScriptGreeter";
import LoudGreeter from "../src/models/LoudGreeter";

describe(`Greeter class`, () => {
  test(`constructor sets greeting property`, () => {
    //arrange
    const hello: Greeter = new Greeter("howdy");
    //act
    //assert
    expect(hello.greeting).toBe("howdy");
  });

  test(`greet method called with "mom" and object constructed with param "hi" returns "hi, mom!"`, () => {
    //arrange
    const newGreeting: Greeter = new Greeter("hi");
    //act
    const returnString: string = newGreeting.greet("mom");
    //assert
    expect(returnString).toBe("hi, mom!");
  });
});

describe(`JavaScript Greeter`, () => {
  test(`greeting "hola" and name "DeShawn" returns "console.log('hola, DeShawn!')"`, () => {
    //arrange
    const objectExample: JavaScriptGreeter = new JavaScriptGreeter("hola");
    //act
    const result: string = objectExample.greet("DeShawn");
    //assert
    expect(result).toBe("console.log('hola, DeShawn!')");
  });
});

describe(`Loud Greeter`, () => {
  test(`greeting "ayo", and name "DeShawn" returns "ayo, 'DeShawn!!!`, () => {
    //arrange
    const objectExample: LoudGreeter = new LoudGreeter("ayo");
    //act
    objectExample.addVolume();
    const result = objectExample.greet("DeShawn");
    //assert
    expect(result).toBe("ayo, DeShawn!!!");
  });
  test(`greeting "ayo", and name "DeShawn" returns "ayo, 'DeShawn!!!`, () => {
    //arrange
    const objectExample: LoudGreeter = new LoudGreeter("ayo");
    //act
    objectExample.addVolume();
    const result: string = objectExample.greet("DeShawn");

    //assert
    expect(result).toBe("ayo, DeShawn!!!");
  });
  test(`greeting "ayo", and name "DeShawn" returns "ayo, 'DeShawn!!!`, () => {
    //arrange
    const objectExample: LoudGreeter = new LoudGreeter("ayo");
    //act
    objectExample.addVolume();
    objectExample.addVolume();
    const result: string = objectExample.greet("DeShawn");

    //assert
    expect(result).toBe("ayo, DeShawn!!!!");
  });
});

describe(`HtmlGreeter`, () => {
  test(`tagName property is set from constructor, tagName defaults to h1 when second arguement is left off`, () => {
    //arrange
    const tagNameObject: HtmlGreeter = new HtmlGreeter("konnichiwa");
    //act
    const returnValueOfGreetMethod: string = tagNameObject.greet("class");
    //assert
    expect(returnValueOfGreetMethod).toBe("<h1>konnichiwa, class!</h1>");
  });
  test(`tagName property is set from constructor, tagName defaults to h1 when second arguement is left off`, () => {
    //arrange
    const tagNameObject: HtmlGreeter = new HtmlGreeter("konnichiwa", "p");
    //act
    const returnValueOfGreetMethod: string = tagNameObject.greet("class");
    //assert
    expect(returnValueOfGreetMethod).toBe("<p>konnichiwa, class!</p>");
  });
});
