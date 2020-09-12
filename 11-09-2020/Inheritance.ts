export{}
class car{
model:string;
constructor(model:string)
{
    this.model=model;
}
}
class Audi extends car{
    show():void{
        console.log(this.model)
    }
}
 var obj=new Audi("Q8");
obj.show();