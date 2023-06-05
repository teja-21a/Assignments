
export class calculator{
     private a:number;
     private b:number;
    //  private c:number;

    constructor (a:number,b:number){
        this.a=a;
        this.b=b;
        // this.c=c;÷
    }
    public sum(){
    console.log(this.a+this.b);
    }

    public diff(){
    if(this.a>=this.b)
        console.log(this.a-this.b);
    else
        console.log(this.b-this.a);
    }

    public mult(){
    console.log(this.a*this.b);
    }

    public div(){
    console.log(this.a/this.b);
    }

    public rem(){
    console.log(this.a%this.b);
    }


}
