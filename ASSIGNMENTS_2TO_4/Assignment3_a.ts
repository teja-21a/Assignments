//UNION AND INTERSECTION


 function sankeerthana(x: string & number) {
    if (typeof x === "string") return x;
    else if (typeof x === "number") return (x + x).toString;
  }
  
  function sankeerthana2(y: string | number | undefined): number {
    if (typeof y === "string") return 0;
    else if (typeof y == "number") return y * y;
    else if (typeof y === "undefined") return -1;
    return 1;
  }
  
  function sankerthana3(z: string & null): number {
    if (typeof z === "string") return 1;
    else if (typeof z === null) {
      return 0;
    }
    return -1;
  }
  
  console.log(sankeerthana2("pavan"));
  // console.log(sankerthana3()))
  
var aa:string&number;
var bb:string|number|undefined;
var cc:string&null

function sankeerthana4(x: string|number|undefined|never){
  if(typeof x === "string" )
    console.log("string")
  if(typeof x === "number")
      console.log("it is a number");
  if(typeof x === "undefined")
    console.log("undefined")
  // if(typeof x === "never")
  //   console.log("it is never type"); 
  // Above syntax cannot be used as never is not  considered as type.
}
console.log(sankeerthana4("tej"));