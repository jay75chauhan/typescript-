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

export {};
