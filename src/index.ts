function curry(func: any): Function {
  return function curried(this: any, ...args: Array<Function>): Function {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (this: any, ...args2: Array<Function>): Function {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 5)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(9));
