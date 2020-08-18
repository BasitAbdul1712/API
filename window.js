name = "botoi" //global variable
function add (num1, num2) {
     result = num1 + num2; // if we do nt use var here it will be global variable and can be call outside from the function like clg(result)
    console.log('result inside:', result);
    console.log('name inside:', name);
    function double (num) {
        return num *2;
    }
var total = double(result);
    return result;
}
var sum =  add(12, 52);
console.log('name outside:', name);
console.log(sum);
console.log('result from outside',result);