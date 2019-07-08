import {converter} from '../../helpers/converter';

describe('converter', () => {
    test('should return correct text for numbers', () => {
        const num1 = converter(4);
        const num2 = converter(12);
        const num3 = converter(47);
        const num4 = converter(100);
        const num5 = converter(333);
        const num6 = converter(23459);
        expect(num1).toBe('four');
        expect(num2).toBe('twelve');
        expect(num3).toBe('fourty seven');
        expect(num4).toBe('one hundred');
        expect(num5).toBe('three hundred thirty three');
        expect(num6).toBe('twenty three thousand four hundred fifty nine');
    });

    test('should return empty string if negative number', () => {
        const num = converter(-1);
        expect(num).toBe('')
    })
})