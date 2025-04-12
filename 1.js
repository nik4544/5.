function sumArray() {
    var sum = 0;
    array = [10,6,3,4];
    min = array.reduce((x,y) => Math.min(x,y));
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] > min) {
            sum += array[i]
            }
        else console.log(sum);   }    
    }
sumArray();

function sumArray2() {
    var sum = 0;
    aray = [4,1,0,3,9];
    for (let i = 0; i < aray.length-1; i++) {
    if (aray[i] === 0) {
        for (let t = i; t < aray.length; t++) {
        sum += aray[t]
        }
    }
}
    console.log(sum);    
}
sumArray2();

function sumArray3() {
    var sum = 0;
    atay = [2,0,3,0,1,5];
    for (let o = 0; o < atay.length-1; o++) {
        if (atay[o] === 0) {
            for (let i = o + 1; i < atay.length; i++) {
               if (atay[i] === 0) {
                for (let t = i; t < atay.length; t++) {
                sum += atay[t]
        }
    }
}
        }
    } 
    console.log(sum);    
}
sumArray3();

function oper_matr(matr) {
	let width = matr[0].length;
	let height = matr.length;

	let sum_lst = [];
	let sum;
	let x, y;

	// Начинаем с элементов первой строки.
	for (let i = 0; i < width; ++i) {
		sum = 0;
		x = i;
		y = 0;
		while (x < width && y < height) {
			sum += matr[y][x];
			++x;
			++y;
		}
		sum_lst.push(sum);
	}

	// Теперь начинаем с элементов первого столбца (исключая первый из них).
	for (let i = 1; i < height; ++i) {
		sum = 0;
		x = 0;
		y = i;
		while (x < width && y < height) {
			sum += matr[y][x];
			++x;
			++y;
		}
		sum_lst.push(sum);
	}

	return sum_lst;
}

let matr = [
	[1,  2,  3,  4,  5],
	[6,  7,  8,  9,  10],
	[11, 12, 13, 14, 15]
];

let res = oper_matr(matr);
console.log(Math.min(...res));

oper_matr(matr);


