import { SUIT, VALUE } from "./CardDetails";

export class Card {
  private _suit: SUIT;
  private _value: number;
  private _isWild: boolean;

  // probably get rid of the setters
  constructor(
    private cardSuit: SUIT,
    private cardValue: VALUE,
    private isCardWild = false,
  ) {
    this._suit = cardSuit;
    this._value = Card.getCardNumberFromValue(cardValue);
    this._isWild = isCardWild;
  }

  toString() {
    return `${this.cardValue} ${this.suit} `;
  }

  public static getCardNumberFromValue(value: VALUE): number {
    switch (value) {
      case VALUE.THREE:
        return 3;
      case VALUE.FOUR:
        return 4;
      case VALUE.FIVE:
        return 5;
      case VALUE.SIX:
        return 6;
      case VALUE.SEVEN:
        return 7;
      case VALUE.EIGHT:
        return 8;
      case VALUE.NINE:
        return 9;
      case VALUE.TEN:
        return 10;
      case VALUE.JACK:
        return 11;
      case VALUE.QUEEN:
        return 12;
      case VALUE.KING:
        return 13;
    }
  }

  public static getCardValueFromNumber(value: number): VALUE {
    switch (value) {
      case 3:
        return VALUE.THREE;
      case 4:
        return VALUE.FOUR;
      case 5:
        return VALUE.FIVE;
      case 6:
        return VALUE.SIX;
      case 7:
        return VALUE.SEVEN;
      case 8:
        return VALUE.EIGHT;
      case 9:
        return VALUE.NINE;
      case 10:
        return VALUE.TEN;
      case 11:
        return VALUE.JACK;
      case 12:
        return VALUE.QUEEN;
      case 13:
        return VALUE.KING;
    }
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
