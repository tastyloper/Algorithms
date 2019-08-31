// Write a command-line program
// that prints out the sum of two non-negative integers as input arguments.
// Input and output arguments are UTF-8 encoded Korean characters
// only listed as '일이삼사오육칠팔구' and '십백천만억조'.
// The less you use ifs, the higher you get scored.
// Google Korean Numbering System if you are not familiar with.

const trans = (n) => {
  const numArr = ['', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
  const tenArr = ['', '십', '백', '천'];
  const thousandArr = ['', '만', '억', '조'];
  const spilt = n.split('');
  let result = 0;
  let oneNum = 1;
  let twoNum = 0;
  for (let i = 0; i <= spilt.length; i++) {
    if (numArr.findIndex(v => v === spilt[i]) !== -1) {
      oneNum = numArr.findIndex(v => v === spilt[i]);
    } else {
      if (tenArr.findIndex(v => v === spilt[i]) !== -1) {
        twoNum += (oneNum || 1) * (10 ** tenArr.findIndex(v => v === spilt[i]));
      } else {
        if (thousandArr.findIndex(v => v === spilt[i]) !== -1) {
          result += (oneNum !== 1 ? twoNum + oneNum : twoNum || oneNum) * (10000 ** thousandArr.findIndex(v => v === spilt[i]));
        } else {
          result += oneNum + twoNum;
        }
        twoNum = 0;
      }
      oneNum = 0;
    }
  }

  return result;
};

const add = (n1, n2) => {
  const result1 = trans(n1);
  const result2 = trans(n2);
  console.log(`${result1} + ${result2} = ${result1 + result2}`);
  return result1 + result2;
};

console.log(add('오백삼십조칠천팔백구십만천오백삼십구', '삼조사천이만삼천구'));
console.log(add('육십사억삼천이만팔만칠천육백구', '사십삼'));
console.log(add('구백육십조칠천억팔천이백삼십이만칠천일', '사십삼조오천이백억육천구백삼십만일'));
console.log(add('이천구백육십사조삼천오백칠십이만삼천구백구십', '삼천사백오십조일억이천일만육백사십삼'));
console.log(add('사십오억삼천육십만오백구십', '칠십억천이백삼십오만칠천구십이'));
console.log(add('천백십일', '구천오백구십구'));
console.log(add('오억사천', '백십일'));
console.log(add('만오천사백삼십', '십구만삼천오백'));
console.log(add('일조', '삼'));
console.log(add('일억', '만'));
