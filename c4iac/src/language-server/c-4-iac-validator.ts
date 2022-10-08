import { ValidationAcceptor, ValidationChecks, ValidationRegistry } from 'langium';
import { C4IacAstType, Person } from './generated/ast';
import type { C4IacServices } from './c-4-iac-module';

/**
 * Registry for validation checks.
 */
export class C4IacValidationRegistry extends ValidationRegistry {
    constructor(services: C4IacServices) {
        super(services);
        const validator = services.validation.C4IacValidator;
        const checks: ValidationChecks<C4IacAstType> = {
            Person: validator.checkPersonStartsWithCapital
        };
        this.register(checks, validator);
    }
}

/**
 * Implementation of custom validations.
 */
export class C4IacValidator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }

}
