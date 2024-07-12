function handleTax(tax = 2300) : number{
    if(tax > 20000)
        return tax;

    return 0;
}

console.log(handleTax())