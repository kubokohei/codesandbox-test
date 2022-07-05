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
// const val5 = ["a", "b"];
// console.log(val5);
// val5[0] = "c";
// val5.push("aaa");
// console.log(val5);

// /**
//  * テンプレート文字列
//  * 文字列の中にJSの変数を埋め込める
//  */
// const name = "kubo";
// const age = 26;
// // my name is kubo, my age is 26

// // 従来の方法
// const message1 = "my name is " + name + ", my age is " + age;
// console.log(message1);

// // テンプレート文字列を使う方法
// const message2 = `my name is ${name}, my age is ${age}@@@@`;
// console.log(message2);

// 2022 / 07 / 05;
// 変数は基本const（上書き、再宣言ができないから意図しないデータの挿入が起こらないかつ、オブジェクト、配列の中身は書き換え可能）
// jsでは{}はオブジェクト（const val4 = {name: "kubo", age: 26};）
// jsにおいて'と"は違いがないけど、同時に使うときはエスケープが必要になる（onclick="alert(\"hello world\")">）
// テンプレート文字列``の中に${変数名}で文字列の中に変数を埋め込める

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str + "が好きです";
// }
// console.log(func1("りんご"));
// // 従来の関数を変数に詰めて使う
// const func11 = function (str) {
//   return str + "が嫌いです";
// };
// console.log(func11("とまと"));

// アロー関数
// const ~ = まではアロー関数を変数に詰めてるだけなのか
// 引数書いてアロー記号書いてにょろかっこがアロー関数、こういうの飛ばしてるからわかんなくなる
// const func2 = (str) => {
//   // 引数がひとつのとき（）を省略できる
//   // const func2 = str => {

//   return str + "がアローです";
// };
// console.log(func2("=>"));

// // アロー関数のルール①
// // 引数がひとつのとき（）を省略できる
// const func21 = (str) => {
//   return str + "がアローです";
// };
// // アロー関数のルール②
// // 中の処理が一行で終わるような単一式の時、{return}を省略できる
// const func22 = (str) => str + "アロー省略ver";

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));
// const func31 = (num1, num2) => num1 + num2;
// console.log(func31(12, 1));

// const func4 = () => "test";
// console.log(func4);

// 関数を変数煮詰めてたから（）つけずに関数が呼べたりするのか
// ↑なんか無理そう

/**
 * 分割代入
//  */
// const myProfile = {
//   name: "久保",
//   age: 26
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// // myProfile.~myProfile.~myProfile.~がめんどくさい→分割代入

// const { name, age } = myProfile;
// const message2 = `名${age}、年${age}`;
// console.log(message2);

// const myPro = ["久保", 26];

// const message3 = `名前は${myPro[0]}です。年${myPro[1]}`;
// console.log(message3);

// 下記は変数名の重複だから？エラー
// const { name, age } = myProfile;
// const [name, age] = myPro;

// 配列の分割代入は配列で受け取り、配列の順番通りに分割代入される
// const myPro = ["久保", 26];
// const [name, age] = myPro;

/**
 * デフォルト値、引数など
 */
// const sayHello = (name) => console.log(`こんにちは${name}さん`);
// sayHello();
// 変数になにも入っていない場合undefined
// アロー関数の引数に代入した値は初期値になる
// 詰めれば詰めたものが出る

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("kubo");

// // 分割代入にも初期値設定できるらしいけどよくわからず
// const obj = { a: 1, b: 2 };
// const { a = 5, b } = obj;
// console.log(a + b);

/**
 * スプレッド構文...
 * ちょっと難しい...
 */
// 配列の展開
// const arr = [1, 2];
// console.log(arr);
// console.log(...arr);

// これおれ頭こんがらがってる気がするな
// console.logの引数に関数書くか、引数の戻り値にconsole.logがあって関数を呼ぶとconsole.logが動くか
// まあ大したことじゃない気もするけど
// const arr = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr[0], arr[1]);
// sumFunc(...arr);
// 順番に処理してるってことらしい

// // まとめる
// const arr = [1, 2, 3, 4, 5];
// // const [num1, num2, num3, num4, num5] = arr;
// const [num1, num2, ...num3] = arr;

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// console.log(arr4);
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // =でコピーすればいいじゃん
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
// =で配列をコピーするともとの配列も影響を受ける（参照渡し）

/**
 * mapやfilterを使った配列の処理
 * for文をほぼ使わないくなった
 * ！！！多分あんまわかってないよ、疲れてるし難しいこれ
 */
// // 従来のfor文の書き方
// const nameArr = ["kuno", "tana"];
// // for (let i = 0; i < nameArr.length; i++) {
// //   console.log(`${i}番目は${nameArr[i]}`);
// // }
// nameArr.map((name, i) => console.log(`${i}番目は${name}です`));

// // map
// // nameArrの要素がnameにひとつひとつ入る
// // それをreturnしているのでnameArr2という新しい配列が生成されるイメージ
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// 配列をループして何かしらの処理を行う使い方と、それを変数に詰めて新しい配列を生成する使いたかた

// filter
// return文の条件式に一致した値のみ取り出される
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const nameArr = ["kuno", "tana"];
// const newNameArr = nameArr.map((name) => {
//   if (name === "kuno") {
//     return name;
//   } else {
//     return name + "さん";
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// 条件式 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "true" : "flse";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const format = typeof num === "number" ? num.toLocaleString() : "数字以外";

// const check = (num) => (typeof num === "number" ? num : "not num");
// console.log(check(10));

// const checkSum = (num1, num2) => (num1 + num2 > 100 ? "100over" : "100less");
// console.log(checkSum(2, 100));

/**
 * 論理演算子の意味
 */
// ||は左がfalseの時に右を返す
const a = null;
const b = "b";
const c = a || b;
console.log(c);

// &&はい左がtrueの時に右を返す
const aa = true;
const bb = "b";
const cc = aa && bb;
console.log(cc);
