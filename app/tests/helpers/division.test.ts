import {getMainPart, getRemainder} from '../../helpers/division';

describe('division', () => {
    test('should return main part correctly', () => {
        const mainPart1 = getMainPart(43, 10);
        const mainPart2 = getMainPart(830, 100);
        const mainPart3 = getMainPart(22300, 1000);
        expect(mainPart1).toBe(4);
        expect(mainPart2).toBe(8);
        expect(mainPart3).toBe(22);
    });

    test('should return remainder correctly', () => {
        const remainder1 = getRemainder(23, 10);
        const remainder2 = getRemainder(230, 100);
        const remainder3 = getRemainder(2311, 1000);
        expect(remainder1).toBe(3);
        expect(remainder2).toBe(30);
        expect(remainder3).toBe(311);
    });
})
