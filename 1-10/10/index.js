let fun = function() {
    return this.id;
}.bind(window)

id = 6;

let obj = {
    id: 1,
    fun: fun()
}
obj.fun();