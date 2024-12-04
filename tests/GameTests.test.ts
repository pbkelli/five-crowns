import { Card } from "../src/Card";
import { SUIT, VALUE } from "../src/CardDetails";
import { sample } from "lodash";
import { Game } from "../src/Game";

describe("testing checks", () => {
  const game = new Game();
  it("A run of 3 with the same value asserts true", () => {
    const hand = [
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
    ];
    const isMatchingRun = game.isMatchingRun(hand);
    console.log(hand, isMatchingRun);

    expect(isMatchingRun).toBeTruthy();
  });

  it("A run of 5 with the same value asserts true", () => {
    const hand = [
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
    ];
    const isMatchingRun = game.isMatchingRun(hand);
    console.log(hand, isMatchingRun);

    expect(isMatchingRun).toBeTruthy();
  });

  it("A run of 3 with the different value asserts false", () => {
    const hand = [
      new Card(sample(SUIT) as SUIT, VALUE.FOUR),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
    ];
    const isMatchingRun = game.isMatchingRun(hand);
    console.log(hand, isMatchingRun);

    expect(isMatchingRun).toBeFalsy();
  });
  it("A run of less than 3 cards with the same value asserts false", () => {
    const hand = [
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
      new Card(sample(SUIT) as SUIT, VALUE.EIGHT),
    ];
    const isMatchingRun = game.isMatchingRun(hand);
    console.log(hand, isMatchingRun);

    expect(isMatchingRun).toBeFalsy();
  });
});
