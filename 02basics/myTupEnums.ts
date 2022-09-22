// const user: (number | string)[] = ["jay", "kumar", "singh"];

const user: [number, string] = [1, "jay"];

type Ty = [number, string];

const newUSer: Ty = [1, "jay"];

newUSer[0] = 2;

newUSer.push("gggg");

export {};
