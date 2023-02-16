let n = +prompt("Введите число")
let result = []
let string = "";
for (let i = 1; i < n; i++) {
    if (i % 2 && i % 3 && i % 5) {
        result.push(i)
        string += i+" "
    }

}
alert(result.join(" "))
alert(string)