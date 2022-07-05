'use strict';
/**
 *  Create by Masykuri Syaifullah
 *  Validate by Masykuri Syaifullah
 */
import {BusinessBase} from "./BusinessBase";
import {Business, SquareConfig} from "./Business";

/**
 *
 */
export class BusinessRuleOne extends BusinessBase implements Business {
    greeting: string;

    constructor(message: string) {
        super();
        this.greeting = message;
    }

    calculate() {
        return "Hello, " + this.greeting;
    }

    isAcceptable(s: string): boolean {
        return false;
    }

    createSquare(config: SquareConfig): { color: string; area: number } {
        return {
            color: config.color || "red",
            area: config.width ? config.width * config.width : 20,
        };
    }

}
