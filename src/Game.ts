import { Card } from "./Card";
import { SUIT, VALUE } from "./CardDetails";
import { sample } from "lodash";

export class Game {
  private static roundNumber;
  private static numberOfPlayers;
  private hand: Card[] = [];

  constructor(private _roundNumber?: VALUE) {
    Game.roundNumber = _roundNumber ?? sample(VALUE);
    console.log("Round number", Game.roundNumber);
  }

  public getNewHand() {
    // repeat function instead of loop?
    for (let i = 0; i < this.getCardNumberFromValue(Game.roundNumber); i++) {
      this.hand.push(this.getNewCard());
    }

    console.log(this.hand);
    return this.hand;
  }

  private getNewCard() {
    const suit = sample(SUIT);
    const value = sample(VALUE);

    // todo remove above vars
    return new Card(suit, value, Game.roundNumber === value);
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
