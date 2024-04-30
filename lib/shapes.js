class Shape{
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color = color;
    }
}

class Triangle extends Shape{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shape{
    render(){
        return `<rect x="100" y="40" width="150" height="150" fill="${this.color}" />`;
    }
}

class Circle extends Shape{
    render(){
        return `<circle cx="125" cy="125" r="100" fill="${this.color}" />`;
    }
}

module.exports = {
    Shape,
    Triangle,
    Square,
    Circle,
};