class Pizza{
    private size : string;
    private extraCheese: boolean;
    private pepperoniToppings : number;
    private hamToppings : number;
    private pineappleToppings : number;


    constructor(size :string, extraCheese: boolean, pepperoniToppings : number, hamToppings: number, pineappleToppings: number)
    {
        this.size = size.toLowerCase();
        this.extraCheese = extraCheese;
        this.pepperoniToppings = pepperoniToppings;
        this.hamToppings = hamToppings;
        this.pineappleToppings = pineappleToppings;
    }

    getSize(){
        return this.size;
    }
    setSize(size : string){
        this.size = size;
    }

    getExtraCheese(){
        return this.extraCheese;
    }
    setExtraCheese(extraCheese: boolean){
        this.extraCheese = extraCheese;
    }

    getPepperoniToppings(){
        return this.pepperoniToppings;
    }
    setPepperoniToppings(pepperoniToppings: number){
        this.pepperoniToppings = pepperoniToppings;
    }

    getHamToppings(){
        return this.hamToppings;
    }
    setHamToppings(hamToppings : number){
        this.hamToppings = hamToppings;
    }

    getPineappleToppings(){
        return this.pineappleToppings;
    }
    setPineappleToppings(pineappleToppings : number){
        this.pineappleToppings = pineappleToppings;
    }

    genCost() : number{
        let cost = 0;

        switch(this.size)
        {
            case "small":
                cost = 10 + (2*this.pepperoniToppings) + (2*this.hamToppings) + (2*this.pineappleToppings) + (this.checkCheese()*2);
                break;
            case "medium":
                cost = 12 + (2*this.pepperoniToppings) + (2*this.hamToppings) + (2*this.pineappleToppings) + (this.checkCheese()*4);
                break;
            case "large":
                cost = 14 + (3*this.pepperoniToppings) + (3*this.hamToppings) + (3*this.pineappleToppings) + (this.checkCheese()*6);
                break;
            case "extra-large":
                cost = 18 + (4*this.pepperoniToppings) + (4*this.hamToppings) + (4*this.pineappleToppings) + (this.checkCheese()*6);
                break;
        }

        return cost;
    }

    private checkCheese(): number{
        if(this.extraCheese)
        {
            return 1;
        }
        return 0;
    }

}

const pizzaS = new Pizza("small",true,1,1,1);
const pizzaM = new Pizza("medium",true,1,1,1);
const pizzaL = new Pizza("large",true,1,1,1);
const pizzaXL = new Pizza("extra-large",true,1,1,1);

console.log(pizzaS.genCost());
console.log(pizzaM.genCost());
console.log(pizzaL.genCost());
console.log(pizzaXL.genCost());

