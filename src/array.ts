export {};

let numbers: number[] = [1,2,3];

console.log({numbers});

// 非推奨
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka' , 'Kyoto'];

let strings: string[] = ['Tokyo', 'Osaka', 'Kyoto'];

let nijigenHairetsu:number[][] = [
  [50,10],
  [150,300]
]
console.log({nijigenHairetsu});

let hairetsu: (string | number | boolean)[] = [1,false,'Japan'];