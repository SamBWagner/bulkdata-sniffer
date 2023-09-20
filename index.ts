import { BunFile } from "bun";

const args: string[] = Bun.argv.slice(2);
let setArgs: string[] = [];
let pathString: string = "";

if (args.length < 2) {
  console.log("Error: Please provide both of the required arguments: '-set=' and '-path='");
}

for (let i = 0; i < args.length; i++) {
  const arg = args[i];

  if (!arg) {
    console.log(`Argument: ${i} is invalid`);
  }

  if (arg.startsWith("-set=")) {
    let number = arg.indexOf("-set=") + "-set=".length;
    const setString = arg.slice(number)
    setArgs = setString.split(',');
  }

  if (arg.startsWith("-path=")) {
    let number: number = arg.indexOf("-path=") + "-path=".length;
    pathString = arg.slice(number);
  }
}

const file: BunFile = Bun.file(pathString);

const contents = await file.json();

let output: any[] = [];

for (let index = 0; index < contents.length; index++) {
  const element = contents[index];

  if (setArgs.includes(element.set)) {
    output.push(element);
  }
  
}

const outputFile: BunFile = Bun.file("./data/output/outputFile.json");

await Bun.write(outputFile, JSON.stringify(output));

console.log(`number of cards in sets: ${setArgs.join(',')} is: ${output.length}`);

console.log(`Took: ${Bun.nanoseconds()/1000000000}seconds`);

