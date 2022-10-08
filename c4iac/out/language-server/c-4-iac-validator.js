"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.C4IacValidator = exports.C4IacValidationRegistry = void 0;
const langium_1 = require("langium");
/**
 * Registry for validation checks.
 */
class C4IacValidationRegistry extends langium_1.ValidationRegistry {
    constructor(services) {
        super(services);
        const validator = services.validation.C4IacValidator;
        const checks = {
            Person: validator.checkPersonStartsWithCapital
        };
        this.register(checks, validator);
    }
}
exports.C4IacValidationRegistry = C4IacValidationRegistry;
/**
 * Implementation of custom validations.
 */
class C4IacValidator {
    checkPersonStartsWithCapital(person, accept) {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }
}
exports.C4IacValidator = C4IacValidator;
//# sourceMappingURL=c-4-iac-validator.js.map