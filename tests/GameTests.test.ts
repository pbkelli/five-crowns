import { Card } from "../src/Card";
import { SUIT, VALUE } from "../src/CardDetails";
import { sample } from "lodash";
import { Game } from "../src/Game";

describe("testing checks", () => {
  const game = new Game();
  it("A run of 3 with the same suit asserts true", () => {
    const hand = [
      new Card(SUIT.CLUB, sample(VALUE) as VALUE),
      new Card(SUIT.CLUB, sample(VALUE) as VALUE),
      new Card(SUIT.DIAMOND, sample(VALUE) as VALUE),
    ];
    const isMatchingRun = game.isMatchingRun(hand);
    console.log(isMatchingRun);

    expect(isMatchingRun).toBeTruthy();
  });
});

// const tests = new GameTestsTest();
// tests.isMatchingRun("A run of 3 with the same suit asserts true");
