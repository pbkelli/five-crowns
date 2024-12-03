import {Suit, Value} from "./CardDetails";

class Card {
    private _value: Value;
    private _suit: Suit;
    private _isWild: boolean;

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
