const add=require('./Add')
test("add two number", function(){
    var result = add.sum(2,4);
    var expected=6;
    expect(result).toBe(expected)
})
