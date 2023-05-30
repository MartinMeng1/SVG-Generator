var Shape = require('./shape.js');
class Triangle extends Shape{
    constructor(color){
        super(color)
    }

    render(){
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

module.exports = Triangle;