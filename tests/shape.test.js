const Shape= require("../lib/shape");

describe('shape',()=>{
    test('should output the rendered message if Shape.render() is called',()=>{
        const shape = new Shape()
        expect(shape.render()).toEqual('A cute Shape class');

    })

}
)

