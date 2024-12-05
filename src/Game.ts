import { Card } from "./Card";
import { SUIT, VALUE } from "./CardDetails";
import { every, remove, sample, sortBy } from "lodash";

export class Game {
  private static roundNumber;
  private static numberOfPlayers;
  private hand: Card[] = [];

  private static deck: Card[] = [];
  private static discardPile: Card[] = [];

  constructor(private _roundNumber?: VALUE) {
    Game.roundNumber = _roundNumber ?? sample(VALUE);
    this.generateDeck();
    this.hand = this.dealHand();
  }

  public generateDeck(numDecks = 1) {
    // five suits
    // one number of each suit

    for (let i = 0; i < numDecks; i++) {
      for (let j = 0; j < 11; j++) {
        Game.deck.push(
          ...[
            new Card(SUIT.CLUB, Card.getCardValueFromNumber(j + 3)),
            new Card(SUIT.DIAMOND, Card.getCardValueFromNumber(j + 3)),
            new Card(SUIT.SPADE, Card.getCardValueFromNumber(j + 3)),
            new Card(SUIT.HEART, Card.getCardValueFromNumber(j + 3)),
            new Card(SUIT.STAR, Card.getCardValueFromNumber(j + 3)),
          ],
        );
      }
    }
  }

  public dealHand() {
    const hand = [];
    // repeat function instead of loop?
    for (let i = 0; i < Card.getCardNumberFromValue(Game.roundNumber); i++) {
      // remove all or just one?
      const newCard = this.getNewCard();
      hand.push(newCard);
    }

    return hand;
  }

  public getNewCard(_suit?: SUIT, _value?: VALUE) {
    const newCard = sample(Game.deck);
    remove(
      Game.deck,
      (card) => card.suit === newCard.suit && card.value === newCard.value,
    );
    return newCard;
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
