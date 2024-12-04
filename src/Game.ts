import { Card } from "./Card";
import { SUIT, VALUE } from "./CardDetails";
import { every, sample, sortBy } from "lodash";

export class Game {
  private static roundNumber;
  private static numberOfPlayers;
  private hand: Card[] = [];

  constructor(private _roundNumber?: VALUE) {
    Game.roundNumber = _roundNumber ?? sample(VALUE);
    this.hand = this.dealHand();
  }

  public dealHand() {
    const hand = [];
    // repeat function instead of loop?
    for (let i = 0; i < this.getCardNumberFromValue(Game.roundNumber); i++) {
      hand.push(this.getNewCard());
    }

    return hand;
  }

  public getNewCard(_suit?: SUIT, _value?: VALUE) {
    const value: VALUE = _value ?? (sample(VALUE) as VALUE);
    const suit: SUIT = _suit ?? (sample(SUIT) as SUIT);

    const card = new Card(suit, value, Game.roundNumber === value);
    // console.log(`${card}${value === Game.roundNumber ? " - W" : ""}`);
    return card;
  }

  // also static?
  private goOut() {}

  private isSequentialRun(cards: Card[]): boolean {
    if (cards.length < 3) {
      return false;
    }
    if (!every(cards, "suit")) {
      return false;
    }

    const sorted = sortBy(cards, "value");
    const allValues = Object.keys(VALUE);

    let first = sorted.pop();
    let idx = allValues.indexOf(first.value);
    while (sorted.length) {
      const next = sorted.pop();
      if (next.value !== allValues[idx + 1]) {
        return false;
      }
    }
    return true;
  }

  public isMatchingRun(cards: Card[] = this.hand): boolean {
    if (cards.length < 3) {
      return false;
    }
    return cards.every((card) => card.value === cards[0].value);
  }

  private getCardNumberFromValue(value: VALUE): number {
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
}
