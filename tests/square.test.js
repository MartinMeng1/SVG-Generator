const Square = require("../lib/square");

describe('square',()=>{
    test('should output the rendered information if the render() is called',()=>{
        const shape = new Square('white');
        expect(shape.render()).toEqual(`<rect x="100" y="50" width="100" height="100" fill="white" />`)
    })
})