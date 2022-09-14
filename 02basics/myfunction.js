"use strict";
exports.__esModule = true;
function addTwo(num) {
    return 2 + num;
}
function getUper(name) {
    return name.toUpperCase();
}
var loginUset = function (name, password) {
    if (password === void 0) { password = "kk"; }
};
loginUset("1234");
getUper("jay");
addTwo(5);
var getvalue = function (value) { return 9; };
var heros = ["superman", "batman", "spiderman"];
heros.map(function (hero) { return hero.toUpperCase(); });
function consolError(error) {
    console.log(error);
}
// some function never return
function getError() {
    throw new Error("error");
}
