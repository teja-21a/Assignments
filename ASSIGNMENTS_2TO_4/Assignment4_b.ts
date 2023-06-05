export namespace pavan1{
    var a:number=5;
    var b:number=2;
    export function sum():void{
        console.log(a+b);
    }
}
export namespace pavan2{
    var a:number=5;
    var b:number=2;
    export function sum():void{
        console.log(a+b);
    }
    
}
pavan1.sum();
pavan2.sum();