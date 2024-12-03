import { SUIT, VALUE } from "./CardDetails";

export class Card {
  private _suit: SUIT;
  private _value: VALUE;
  private _isWild: boolean;

  // probably get rid of the setters
  constructor(
    private cardSuit: SUIT,
    private cardValue: VALUE,
    private isCardWild = false,
  ) {
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
