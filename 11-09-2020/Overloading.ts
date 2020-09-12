function add(a:string, b:string): string

function add(a:number, b:number): number  

 function add(a: any, b:any): any {  
    return a + b;  
}  
  
console.log("Addition: " +add("Hello ", "JavaTpoint"));   
console.log("Addition: "+add(30, 20));  