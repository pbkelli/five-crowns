import { Card } from "../src/Card";
import { SUIT, VALUE } from "../src/CardDetails";
import { sample } from "lodash";
import { Game } from "../src/Game";

describe("testing checks", () => {
  const game = new Game();
  it("A run of 3 with the same suit asserts true", () => {
    const hand = [
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
    ];
    const isMatchingRun = game.isMatchingRun(hand);
    console.log(hand, isMatchingRun);

    expect(isMatchingRun).toBeTruthy();
  });
});
