import { calculateContractedHours } from '../utils/calculateContractedHours';

describe('calculateContractedHours', () => {
    test('returns false if contracted hours are not set', () => {
        expect(calculateContractedHours(null, 40)).toBe(false);
    });

    test('returns false if hours worked are not set', () => {
        expect(calculateContractedHours(40, null)).toBe(false);
    });

    test('returns false if hours worked exceed contracted hours by more than 8', () => {
        expect(calculateContractedHours(40, 50)).toBe(false);
    });

    test('returns true if hours worked are within contracted hours', () => {
        expect(calculateContractedHours(40, 40)).toBe(true);
    });

    test('returns true if hours worked are exactly 8 more than contracted hours', () => {
        expect(calculateContractedHours(40, 48)).toBe(true);
    });
});