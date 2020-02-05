function* range(start, end) {
    let _start = Math.ceil(start);
    let _end = Math.floor(end);
    for (let N = _start; N <= _end; N++) {
        yield N;
    }
}

let arr = [...range(2.3, 14.6)];
//console.log(arr)

function* fib() {
        let pre = 0,
            curr = 1;
        yield 0;
        while (true) {
            [pre, curr] = [curr, pre + curr];
            yield pre;
        }
    }
    [x1, x2, x3] = fib();
console.log(x1, x2, x3)