import { calculatePoints } from '../utils/calculatePoints.js';

describe('calculatePoints', () => {
    test('returns 0 if no data is provided', () => {
        expect(calculatePoints(null)).toBe(0);
    });

    test('award full points', () => {
        const data = {
            "enjoys_job": 'yes',
            "respected_by_managers": 'yes',
            "good_for_carers": 'yes',
            "hours_actually_worked": 40,
            "contracted_hours": 40,
            "unpaid_extra_work": 'no',
            "age": 21,
            'hourly_rate': 12
        };
        expect(calculatePoints(data)).toStrictEqual({points: 6, totalAvailable: 6});
    });

    test('Award 0 points', () => {
        const data = {
            "enjoys_job": 'no',
            "respected_by_managers": 'no',
            "good_for_carers": 'no',
            "contracted_hours": 40,
            "hours_actually_worked": 70,
            "unpaid_extra_work": 'yes',
            "age": 17,
            "hourly_rate": 2
        };
        expect(calculatePoints(data)).toStrictEqual({points: 0, totalAvailable: 6});
    });

    test("Omit some answers to test if it doesn't affect the score", () => {
        const data = {
            "enjoys_job": 'yes',
            "respected_by_managers": 'yes',
            "good_for_carers": 'yes',
            "contracted_hours": 40,
            "hours_actually_worked": 40,
            "unpaid_extra_work": 'unsure',
            "age": 21,
            'hourly_rate': 12
        };
        expect(calculatePoints(data)).toStrictEqual({points: 5, totalAvailable: 5});
    }
)
    

});