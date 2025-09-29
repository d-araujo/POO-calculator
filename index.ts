type Operation= "add" | "subtract" | "multiply" | "divide"

class Calculator{
    currentInput: number=0;
    operator: String='';
    previousInput: number=0;
    result: number=0;

    constructor(){
    }

    appendNumber(num:number): void{
        this.previousInput=this.currentInput
        this.currentInput=num
    }

    setOperator(newop:Operation): void{
        this.operator=newop
    }

    calculate(): number{
        if(this.operator==="add"){
            this.result=this.currentInput+this.previousInput
        }
        else if(this.operator==="subtract"){
            this.result=this.previousInput-this.currentInput
        }
        else if(this.operator==="multiply"){
            this.result=this.currentInput*this.previousInput
        }
        else if(this.operator==="divide"){
            if(this.currentInput==0){
                throw new Error('0 is not valid as a denominator')
            }
            this.result=this.previousInput/this.currentInput
        }
        
        
        return this.result
    }
}

const calc = new Calculator()
calc.appendNumber(5)
calc.setOperator('subtract')
calc.appendNumber(4)
console.log(calc.calculate())