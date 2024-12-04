module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
    setupFilesAfterEnv: ["./tests/jest.setup.ts"]
};
