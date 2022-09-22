let score: number | string = 33;

score = "33";

score = 33;

type User = {
  _id: string;
  name: string;
};

type Admin = {
  _id: string;
  username: string;
};

type UserAdmin = User | Admin;

let user: UserAdmin = {
  _id: "1234",
  name: "jay",
};

function getUser(id: string | number) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}
