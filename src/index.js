/**
 * const,letの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// // var変数はなんでもできちゃうので、意図しない代入等が発生

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可
// val3 = "上書き";

// constは再宣言不可
// const val3 = "再宣言";

// const変数にオブジェクトを代入
// {}がオブジェクトなんだねJSは
// const val4 = {
//   name: "kubo",
//   age: 26
// };
// console.log(val4);

// // const変数はオブジェクトのプロパティは変更が可能
// val4.name = "耕平";
// console.log(val4);

// JSにおいて"と'は違いがない
// クォート内で同じクォートを利用するときは、エスケープする必要がある
// 'シングルクォート内のシングルクォート(\')はエスケープする'
// "ダブルクォート内のダブルクォート(\")はエスケープする"
// <button onclick="alert('hello world')">Click me!</button>
// <button onclick='alert("hello world")'>Click me!</button>

// const変数は配列の中身書き換え可能;
const val5 = ["a", "b"];
console.log(val5);
val5[0] = "c";
val5.push("aaa");
console.log(val5);

/**
 * テンプレート文字列
 * 文字列の中にJSの変数を埋め込める
 */
const name = "kubo";
const age = 26;
// my name is kubo, my age is 26

// 従来の方法
const message1 = "my name is " + name + ", my age is " + age;
console.log(message1);

// テンプレート文字列を使う方法
const message2 = `my name is ${name}, my age is ${age}@@@@`;
console.log(message2);
