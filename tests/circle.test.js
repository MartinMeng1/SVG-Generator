const Circle = require("../lib/circle");

describe('circle',()=>{
    test('should output the rendered information if the render() is called',()=>{
        const shape = new Circle('red');
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`)
    })
})