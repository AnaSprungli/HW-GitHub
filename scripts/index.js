function laCajaDePandora(num) {
    if (num % 2 === 0) {  
        var binary_num = num.toString(2);
        return binary_num;
    } else {
        // Convert odd number to hexadecimal
        var hexa_num = num.toString(16);
        return hexa_num;
    }
}

console.log(laCajaDePandora(8));
