const Triangle = require("../lib/triangle");

describe('triangle',()=>{
    test('should output the rendered information if the render() is called',()=>{
        const shape = new Triangle('blue');
        expect(shape.render()).toEqual(`<polygon points="150,50 100,150 200,150" fill="blue" />`)
    })
})