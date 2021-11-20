import {BusinessBase} from "./BusinessBase";

export class BusinessRuleTwo extends BusinessBase{
    greeting: string;

    constructor(message: string) {
        super();
        this.greeting = message;
    }

    calculate() {
        return "Hello, " + this.greeting;
    }
}


