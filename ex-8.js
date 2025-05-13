function primecheker (num) {
    if(num < 2) {
        console.log("Alas! Not a prime Number");
        return;
    }
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            console.log("Alas! Not a prime Number")
            return;
        }
    }
    console.log(`${num} is a prime Number`);
}
primecheker(11);