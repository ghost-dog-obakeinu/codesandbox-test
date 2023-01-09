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
// const func2 = (str) => {
//   console.log(str);
// };
// func2("hello!");

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ghost-dog",
//   age: 24
// };

// const message1 = `I'm ${myProfile.name} and ${myProfile.age} years old.`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `I'm ${name} and ${age} years old.`;
// console.log(message2);

// const myProfile = ["ghost-dog", 24];
// const message3 = `I'm ${myProfile[0]} and ${myProfile[1]} years old.`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `I'm ${name} and ${age} years old.`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name) => console.log(`Hello ! ${name}.`);
// sayHello("ghost-dog");
// jsでは値の設定されていない変数は「undifined」として出力される
// sayHello();
// アロー関数で変数にデフォルト値を設定できる
// const sayHello = (name = "guest") => console.log(`Hello ! ${name}.`);
// sayHello();
// sayHello("ghost-dog");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// 「...」をつけると配列の値を順番に取り出してくれる
// console.log(...arr1);
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// 一部だけ取り出す
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピーと結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// スプレッド構文で配列をコピー
// const arr6 = [...arr4];
// console.log(arr6);

// スプレッド構文で配列をコピー
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 「=」でコピーすると...
// const arr8 = arr4;
// arr8[0] = 100;
// コピー元にも参照が渡ってしまう
// console.log(arr4);
// console.log(arr8);
// スプレッド構文なら大丈夫
// const arr9 = [...arr5];
// arr9[0] = 100;
// console.log(arr5);
// console.log(arr9);

/**
 * mapやfilterでの配列の処理
 * map:引数にアロー関数を指定し、その中に配列の値を順番に入れて処理する関数
 * filter:指定した条件に一致した要素だけを取り出した配列を作る関数
 */
// const nameArr = ["ghost-dog", "ghost-cat", "ghost-penguin"];
// forループを使った値の表示
// for (let index = 0; index < nameArr.length; index++) {
// console.log(nameArr[index]);
// }
// mapを使った配列のコピー
// const nameArr2 = nameArr.map((name) =>{
//   return name;
// });
// console.log(nameArr2);
// mapを使った値の表示
// nameArr.map((name) => console.log(name));
// 引数としてインデックスを受け取ることもできる
// nameArr.map((name, index) => console.log(`number ${index + 1} is ${name}.`));

// filterを使った配列の作成
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ghost-dog") {
//     return name;
//   } else {
//     return `Mr.${name}`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());
// const numStr = "1300";
// console.log(numStr.toLocaleString());

// 三項演算子でデータ型による分岐
// 「==」:等号演算子。データの値だけ比較。
// 「===」:厳密等号演算子。データの値と型を比較。
// const num = "1300";
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
};
console.log(checkSum(10, 20));
console.log(checkSum(50, 60));

/**
 * 「||」の意味
 */
// 演算の左側の項がfalseなら右側の項を返す
const num = null;
const fee = num || "未設定";
console.log(fee);

/**
 * 「&&」の意味
 */
// 演算の右側の項がtrueなら左側の項を返す
const num2 = 100;
const fee2 = num2 && "設定されてます";
console.log(fee2);
