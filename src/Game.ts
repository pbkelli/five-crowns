import {Card} from "./Card";
import {Suit, Value} from "./CardDetails";
import {sample} from "lodash";

class Game {
    private static roundNumber: Value;
    private hand: Card[];

    constructor(private _roundNumber?: Value) {
        Game.roundNumber = _roundNumber ?? sample(Value);
    }

    private getNewCard() {
        const suit = sample(Suit);
        const value = sample(Value);

        // todo remove above vars
        return new Card(suit, value, Game.roundNumber === value);
    }

    private generateHand(roundNumber?: Value) {

        // sample(Value)



        // generate random round number (or use entry)
        // generate num of cards
    }

}
