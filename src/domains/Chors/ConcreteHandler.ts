/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
import {AbstractHandler} from "./AbstractHandler";

const FOOD_DOG = 'MeatBall';
const FOOD_MONKEY = 'Banana';
const FOOD_SQUIRREL = 'Nut';

export class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === FOOD_MONKEY) {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

// tslint:disable-next-line:max-classes-per-file
export class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === FOOD_SQUIRREL) {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

// tslint:disable-next-line:max-classes-per-file
export class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === FOOD_DOG) {
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

