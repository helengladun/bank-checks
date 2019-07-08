import {getMessage} from '../../helpers/get-message';
import {converter} from '../../helpers/converter';

describe('getMessage', () => {
    test('get message without remainder', () => {
        const message1 = getMessage({main: 2, remainder: 0, divider: 10});
        const message2 = getMessage({main: 2, remainder: 0, divider: 100});
        const message3 = getMessage({main: 2, remainder: 0, divider: 1000});
        expect(message1).toBe('twenty')
        expect(message2).toBe('two hundred')
        expect(message3).toBe('two thousand')
    });

    test('get message with remainder', () => {
        const message1 = getMessage({main: 2, remainder: 1, divider: 10});
        const message2 = getMessage({main: 2, remainder: 44, divider: 100});
        const message3 = getMessage({main: 2, remainder: 66, divider: 1000});
        expect(message1).toBe('twenty one')
        expect(message2).toBe('two hundred fourty four')
        expect(message3).toBe('two thousand sixty six')
    });
})