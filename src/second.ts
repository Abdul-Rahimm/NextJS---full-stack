interface employeeType{
    readonly id: number,
    name?: string,
    retire: (date:Date) => void,
}

let employee:employeeType = 
    {
        id: 1, 
        name:"rahim", 
        retire: (date: Date)=>{
            console.log(date);
        }
    };  //this is initializing


console.log(employee);
//we assign the values to the particular object variables thru :