import { describe, it, expect } from 'vitest';
import { getCurrentFormattedDate, addTwoNumbers } from './index';
describe('getCurrentFormattedDate', () => {
    it('should return a formatted date string', () => {
        const result = getCurrentFormattedDate();
        expect(result).toMatch(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/);
    });
});
describe('addTwoNumbers', () => {
    it('should return the sum of two numbers', () => {
        const result = addTwoNumbers(3, 5);
        expect(result).toBe(8);
    });
});
