const User = {
  name: "jay",
  age: 30,
  isActive: true,
};

function getUser({ name: string, isPaid: boolean }) {}

getUser({ name: "jay", isPaid: true });

let uu = { name: "jay", isPaid: true, age: 30 };
getUser(uu);

function createMaM(): { name: string; age: number } {
  return { name: "jay", age: 30 };
}

type Us = {
  name: string;
  age: number;
  isActive: boolean;
};

function getUs(user: Us): Us {
  return user;
}

getUs({ name: "jay", age: 30, isActive: true });

type user = {
  readonly _id: string;
  name: string;
  age: number;
  isActive: boolean;
  cred?: number;
};

let myUser: user = {
  _id: "1234",
  name: "jay",
  age: 30,
  isActive: true,
};

// myUser._id = "1234";
type cerdNumber = {
  cred: number;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardDate &
  cerdNumber & {
    ccv: number;
  };
let card: cardDetails = {
  cred: 1234,
  cardDate: "12/12",
  ccv: 123,
};
function createUser(u: user) {}

export {};
