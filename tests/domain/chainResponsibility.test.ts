import {DogHandler, SquirrelHandler, MonkeyHandler} from "../../src/domains/Chors/ConcreteHandler"; // this will be your custom import
import {Handler} from "../../src/domains/Chors/Handler"; // this will be your custom import
import {expect} from "chai";

/**
 * The client code is usually suited to work with a single handler. In most
 * cases, it is not even aware that the handler is part of a chain.
 */
function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'MeatBall'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}

describe('Chain Of Responsibility tests', () => { // the tests container

    let monkey: MonkeyHandler;
    let squirrel: SquirrelHandler;
    let dog: DogHandler;

    beforeAll((done) => {
        /**
         * The other part of the client code constructs the actual chain.
         */
        monkey = new MonkeyHandler();
        squirrel = new SquirrelHandler();
        dog = new DogHandler();
        done();
    });

    it('checking chain of responsibility', (done) => { // the single test
        monkey.setNext(squirrel).setNext(dog);
        /**
         * The client should be able to send a request to any handler, not just the
         * first one in the chain.
         */
        console.log('Chain: Monkey > Squirrel > Dog\n');
        clientCode(monkey);
        console.log('Subchain: Squirrel > Dog\n');
        clientCode(squirrel);

        expect(monkey).to.be.an('object');
        expect(squirrel).to.be.an('object');
        done();
    });

});
