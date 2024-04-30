const { triangle, circle, square,shape} = require('./shapes');

describe('shape', () => {
    it('should set the color', () => {
        const shape = new shape();
        shape.setColor('blue');
        expect(shape.color).toEqual('blue');
    });
})

describe('triangle', () => {
    it('render a blue triangle', () => {
        const shape = new shape();
        shape.setColor('blue');
        const expected = `<polygon points = "150,50 50,150 250,150" style="fill:blue"/>`;
        expect(shape.render()).toEqual(expected);
    });
})

describe('circle', () => {
    it('render a yellow circle', () => {
        const shape = new shape();
        shape.setColor('blue');
        const expected = `<circle cx="150" cy="100" r="75" style="fill:yellow"/>`;
        expect(shape.render()).toEqual(expected);
    })
})

describe('square', () => {
    it('render a green square', () => {
        const shape = new shape();
        shape.setColor('blue');
        const expected = `<rect x="50" y="50" width="200" height="200" style="fill:green"/>`;
        expect(shape.render()).toEqual(expected);
})
});