  
class Adder {
    
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    sum(a,b) {
       return (this.a + this.b);
    }
    render(){
    let summation = `<p>The sum of ${this.a} and ${this.b} is ${this.sum()} </p>`;
      console.log(summation);  
    }
}

module.exports = Adder;