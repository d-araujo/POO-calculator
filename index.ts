enum Operation{
    SUM="add",
    SUB="subtract",
    DIV="divide",
    MUT="multiply"

} 

class Calculator{
    currentInput: number=0;
    operator: String='';
    previousInput: number=0;
    result: number=0;

    appendNumber(num:number): void{
        this.previousInput=this.currentInput
        this.currentInput=num
    }

    setOperator(newop:Operation): void{
        this.operator=newop
    }

    calculate(): number{
        switch(this.operator){
            case Operation.SUM:
                this.result=this.currentInput+this.previousInput
                break
            
            case Operation.SUB:
                this.result=this.previousInput-this.currentInput
                break
            
            case Operation.MUT:
                this.result=this.currentInput*this.previousInput
                break
            case Operation.DIV:
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
calc.setOperator(Operation.SUM)
calc.appendNumber(4)
console.log(calc.calculate())