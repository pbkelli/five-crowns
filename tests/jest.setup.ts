jest.spyOn(console, "log").mockImplementation((message) => {
  process.stdout.write(message + "\n"); // Logs without stack trace
});
