/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */
// String(), 'string'+''

// number
const YEAR = 2023;
console.log(typeof String(YEAR));
console.log(typeof (YEAR + '년'));

// undefined, null
let days = null;
console.log(typeof String(days));

// boolean
let isKind = true;
console.log(typeof (isKind + ''));

/* 데이터 → 숫자 ----------------------------------------------------------- */
// Number()

// undefined -> NaN
console.log(typeof Number(undefined));

// null -> 0
console.log(typeof Number(null));

// boolean -> ture: 1, false: 0
console.log(typeof Number(true));
console.log(typeof Number(false));

// string
let birthday = '  0915   ';
console.log(typeof Number(birthday));

// numeric string
let width = '32.23120px';
console.log(typeof parseFloat(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */
// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(typeof Boolean('unee'));
console.log(typeof (!!null));