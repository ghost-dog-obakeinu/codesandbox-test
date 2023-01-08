/**
 * const, letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";
// console.log(val3);

// const val4 = {
//   name: "ghost-dog",
//   age: 24
// };
// // constオブジェクトの中身は上書きできてしまう
// val4.age = 25;
// // 属性の追加も可能
// val4.address = "Tokyo";
// console.log(val4);

// const配列の中身は上書きできてしまう
// なんか行選択しなくてもカーソル合わせるだけで行ごとコピーできる
// const val5 = ["dog1", "dog2", "dog3"];
// val5[0] = "dog0";
// val5.push("dog4");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ghost-dog";
// const age = 24;

// 従来の方法
// const message1 = "I'm " + name + " and " + age + " years old.";
// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `I'm ${name} and ${age} years old.`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   console.log(str);
// }
// 変数の中に関数を格納することも可能
// const func1 = function (str) {
//   console.log(str);
// };
// func1("hello js");

// アロー関数
// 変数が1つの場合"(str)"は"str"と書いてもいい
const func2 = (str) => {
  console.log(str);
};
func2("hello!");

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
