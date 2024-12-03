import {Suit, Value} from "./CardDetails";

export class Card {
    private _suit: Suit;
    private _value: Value;
    private _isWild: boolean;

    // probably get rid of the setters
    constructor(private cardSuit: Suit, private cardValue: Value, private isCardWild = false) {
        this._suit = cardSuit;
        this._value = cardValue;
        this._isWild = isCardWild;
    }

    get isWild() {
        return this._isWild;
    }

    set isWild(value) {
        this._isWild = value;
    }

    get suit() {
        return this._suit;
    }

    set suit(value) {
        this._suit = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}
