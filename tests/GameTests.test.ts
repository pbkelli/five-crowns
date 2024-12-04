import { Card } from "../src/Card";
import { SUIT, VALUE } from "../src/CardDetails";
import { sample } from "lodash";
import { Game } from "../src/Game";

describe("testing checks", () => {
  const game = new Game();
  describe("testing matching run tests", () => {
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

  describe("testing sequential run tests", () => {
    it("A run of 3 sequential cards returns true", () => {
      const hand = [
        new Card(SUIT.DIAMOND, VALUE.FOUR),
        new Card(SUIT.DIAMOND, VALUE.FIVE),
        new Card(SUIT.DIAMOND, VALUE.SIX),
      ];
      const isMatchingRun = game.isSequentialRun(hand);
      console.log(hand, isMatchingRun);

      expect(isMatchingRun).toBeTruthy();
    });

    it("A run of 5 sequential cards returns true", () => {
      const hand = [
        new Card(SUIT.DIAMOND, VALUE.SIX),
        new Card(SUIT.DIAMOND, VALUE.FOUR),
        new Card(SUIT.DIAMOND, VALUE.SEVEN),
        new Card(SUIT.DIAMOND, VALUE.EIGHT),
        new Card(SUIT.DIAMOND, VALUE.FIVE),
      ];
      const isMatchingRun = game.isSequentialRun(hand);
      console.log(hand, isMatchingRun);

      expect(isMatchingRun).toBeTruthy();
    });
    it("A run of 3 non sequential cards returns false", () => {
      const hand = [
        new Card(SUIT.DIAMOND, VALUE.NINE),
        new Card(SUIT.DIAMOND, VALUE.FOUR),
        new Card(SUIT.DIAMOND, VALUE.SEVEN),
      ];
      const isMatchingRun = game.isSequentialRun(hand);
      console.log(hand, isMatchingRun);

      expect(isMatchingRun).toBeFalsy();
    });
    it("A run of 3 sequential cards with non matching suits returns false", () => {
      const hand = [
        new Card(SUIT.CLUB, VALUE.FOUR),
        new Card(SUIT.DIAMOND, VALUE.FIVE),
        new Card(SUIT.DIAMOND, VALUE.SIX),
      ];
      const isMatchingRun = game.isSequentialRun(hand);
      console.log(hand, isMatchingRun);

      expect(isMatchingRun).toBeTruthy();
    });
  });
});
