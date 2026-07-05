import { LibraryTracker } from "./icf";

describe("empty", () => {
  it("good", () => {
    expect(true).toBe(true);
  });
});

// describe("Level 1: single-copy checkout/return", () => {
//   it("starts a newly added book as available", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune");
//     expect(tracker.isAvailable("Dune")).toBe(true);
//   });

//   it("marks a book unavailable after checkOut", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune");
//     tracker.checkOut("Dune");
//     expect(tracker.isAvailable("Dune")).toBe(false);
//   });

//   it("marks a book available again after returnBook", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune");
//     tracker.checkOut("Dune");
//     tracker.returnBook("Dune");
//     expect(tracker.isAvailable("Dune")).toBe(true);
//   });
// });

// describe("Level 2: due dates and overdue detection", () => {
//   it("is not overdue before the due date", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune");
//     tracker.checkOut("Dune", new Date("2026-07-10"));
//     expect(tracker.isOverdue("Dune", new Date("2026-07-05"))).toBe(false);
//   });

//   it("is overdue after the due date", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune");
//     tracker.checkOut("Dune", new Date("2026-07-10"));
//     expect(tracker.isOverdue("Dune", new Date("2026-07-15"))).toBe(true);
//   });

//   it("is not overdue once returned", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune");
//     tracker.checkOut("Dune", new Date("2026-07-10"));
//     tracker.returnBook("Dune");
//     expect(tracker.isOverdue("Dune", new Date("2026-07-15"))).toBe(false);
//   });
// });

// describe("Level 3: multiple copies per title", () => {
//   it("tracks availableCount across checkouts", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune", 3);
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     expect(tracker.availableCount("Dune")).toBe(2);
//   });

//   it("is available while at least one copy remains", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune", 2);
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     expect(tracker.isAvailable("Dune")).toBe(true);
//   });

//   it("is unavailable once all copies are checked out", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune", 2);
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     expect(tracker.isAvailable("Dune")).toBe(false);
//   });

//   it("restores availableCount on return", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune", 1);
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     tracker.returnBook("Dune");
//     expect(tracker.availableCount("Dune")).toBe(1);
//   });
// });

// describe("Level 4: queueing when unavailable", () => {
//   it("queues a checkout request when no copies are available", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune", 1);
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     expect(tracker.queueLength("Dune")).toBe(1);
//   });

//   it("drains the queue by one when a copy is returned", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune", 1);
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     tracker.returnBook("Dune");
//     expect(tracker.queueLength("Dune")).toBe(0);
//   });

//   it("keeps the book unavailable if the queue immediately reassigns the returned copy", () => {
//     const tracker = new LibraryTracker();
//     tracker.addBook("Dune", 1);
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     tracker.checkOut("Dune", new Date("2026-08-01"));
//     tracker.returnBook("Dune");
//     expect(tracker.isAvailable("Dune")).toBe(false);
//   });
// });
