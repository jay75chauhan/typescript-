"use strict";
exports.__esModule = true;
var User = {
    name: "jay",
    age: 30,
    isActive: true
};
function getUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
getUser({ name: "jay", isPaid: true });
var uu = { name: "jay", isPaid: true, age: 30 };
getUser(uu);
function createMaM() {
    return { name: "jay", age: 30 };
}
function getUs(user) {
    return user;
}
getUs({ name: "jay", age: 30, isActive: true });
var myUser = {
    _id: "1234",
    name: "jay",
    age: 30,
    isActive: true
};
function createUser(u) { }
