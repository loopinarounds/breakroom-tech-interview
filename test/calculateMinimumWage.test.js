import { calculateMinimumWage } from '../utils/calculateMinimumWage.js';

describe('calculateMinimumWage', () => {
    test('returns null if no age is provided', () => {
        expect(calculateMinimumWage(null)).toBe(null);
    });

    test('returns correct minimum wage for age under 18', () => {
        expect(calculateMinimumWage(17)).toBe(6.40);
    });

    test('returns correct minimum wage for age between 18 and 20', () => {
        expect(calculateMinimumWage(19)).toBe(8.60);
    });

    test('returns correct minimum wage for age 21 and above', () => {
        expect(calculateMinimumWage(21)).toBe(11.44);
    });

    test('returns null for invalid age', () => {
        expect(calculateMinimumWage(-1)).toBe(null);
    });
});