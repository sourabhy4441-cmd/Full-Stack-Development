class Box{
    constructor(name,l,b){
        this.name=name;
        this.l=l;
        this.b=b;
    }
    area(){
        let area=this.l*this.b;
        console.log(`Box area is ${area}`);
    }
}

class Square extends Box{
    constructor(a){
        super("square",a,a);
    }
    area(){
        let area=this.l*this.b;
        console.log(`Box area is ${area}`);
    }
}

let sq1=new Square(4);
sq1.area();

// The Output will be "Square area is 16 " as the child class (Square)  implementation
// of area() function will override parent class(Box) implementation of the function with the same name