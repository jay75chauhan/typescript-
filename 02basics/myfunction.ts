function addTwo(num: number): number {
  return 2 + num;
}

function getUper(name: string): string {
  return name.toUpperCase();
}

let loginUset = (name: string, password: string = "kk") => {};

loginUset("1234");

getUper("jay");

addTwo(5);

const getvalue = (value: number): number => 9;

const heros = ["superman", "batman", "spiderman"];
heros.map((hero): string => hero.toUpperCase());

function consolError(error: string): void {
  console.log(error);
}
// some function never return

function getError(): never {
  throw new Error("error");
}

export {};
