interface OS {  
    name: String;  
    language: String;  
}  
let OperatingSystem = (type: OS): void => {  
  console.log('Android ' + type.name + ' has ' + type.language + ' language.');  
};  
let Oreo = {name: 'O', language: 'Java'}  
OperatingSystem(Oreo);

interface car{
    brand:string;
    color:string;

} 
let setcar=(type:car):void=>{
    console.log("it is a "+type.color+" "+type.brand);

}
let car1={brand:"BMW",color:"blue"};
setcar(car1);