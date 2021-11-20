/**
 * Create by Masykuri Syaifullah 20/12/2021
 * Validate by Masykuri Syaifullah 21/12/2021
 */
import { ZipCodeValidator } from "../../src/modules/validator/ZipCodeValidator"; // this will be your custom import
import { expect } from "chai";

describe('ZipCodeValidator tests', () => { // the tests container

    it('checking default ZipCodeValidator', () => { // the single test
        const zipCodeValidator = new ZipCodeValidator(); // this will be your class

        expect(zipCodeValidator.isAcceptable('123456')).to.be.false;

    });

});
