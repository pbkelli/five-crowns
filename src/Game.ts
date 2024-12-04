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
    for (let i = 0; i < Card.getCardNumberFromValue(Game.roundNumber); i++) {
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

  public isSequentialRun(cards: Card[]): boolean {
    if (cards.length < 3) {
      return false;
    }
    if (!every(cards, "suit")) {
      return false;
    }

    const sorted = sortBy(cards, "_value");

    let prev = sorted.shift();
    while (sorted.length) {
      const next = sorted.shift();

      if (next.value !== prev.value + 1) {
        return false;
      }
      prev = next;
    }
    return true;
  }

  public isMatchingRun(cards: Card[] = this.hand): boolean {
    if (cards.length < 3) {
      return false;
    }
    return cards.every((card) => card.value === cards[0].value);
  }
}
