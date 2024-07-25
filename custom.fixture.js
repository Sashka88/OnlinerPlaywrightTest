import {test as baseTest, expect as baseExpect} from '@playwright/test';
import testData from '../OnlinerPlayrightTest/test-data';

export const test = baseTest.extend({
    tv: [ testData, { option: true }],
    notebook: [ testData, { option: true }],
});

export const expect = baseExpect;