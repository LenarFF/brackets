module.exports = function check(str, bracketsConfig) {
  // your solution
  let openBracket = [];
let closeBracket = [];
let copyStr = str;
let index = 0;
let openItem = '';
for (let brack of bracketsConfig) {
openBracket.push(brack[0]);
closeBracket.push(brack[1]);
}

for (let item of str) {
if (closeBracket.includes(item)) {
index = closeBracket.indexOf(item);
openItem = openBracket[index];
copyStr = copyStr.replace((openItem + item), "");
 }
}
return copyStr === ""
}
