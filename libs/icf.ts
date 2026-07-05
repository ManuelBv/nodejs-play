/**
 * ICF-style progressive exercise: Library Tracker.
 *
 * Mirrors CodeSignal's Industry Coding Framework format: one codebase,
 * 4 levels, each level adding a requirement that forces you to refactor
 * what you built in the previous level rather than start over.
 *
 * Work through the levels in order. Don't jump ahead — the whole point
 * is practicing the refactor-under-new-requirements muscle.
 */

/**
 * LEVEL 1
 *
 * Build a LibraryTracker that supports:
 *  - addBook(title: string): register a new book (starts available)
 *  - checkOut(title: string): mark a book as checked out
 *  - returnBook(title: string): mark a book as available again
 *  - isAvailable(title: string): boolean
 *
 * Assume each title is unique and only exists as a single copy.
 */
export class LibraryTracker {
  addBook(title: string): void {
    throw new Error("Not implemented");
  }

  checkOut(title: string): void {
    throw new Error("Not implemented");
  }

  returnBook(title: string): void {
    throw new Error("Not implemented");
  }

  isAvailable(title: string): boolean {
    throw new Error("Not implemented");
  }

  /**
   * LEVEL 2
   *
   * Requirement change: checking out a book now requires a due date.
   * Add:
   *  - checkOut(title, dueDate: Date) — overwrite/extend the level 1 signature
   *  - isOverdue(title: string, asOf: Date): boolean
   *
   * You will need to revisit your level 1 data model (a plain
   * boolean "available" flag is no longer enough).
   */
  isOverdue(title: string, asOf: Date): boolean {
    throw new Error("Not implemented");
  }

  /**
   * LEVEL 3
   *
   * Requirement change: the library can stock multiple copies of the
   * same title. Replace the single-copy assumption with a copy count:
   *  - addBook(title, copies: number)
   *  - checkOut/returnBook must track availability per-copy, not per-title
   *  - isAvailable(title) now means "at least one copy is available"
   *  - availableCount(title: string): number
   *
   * This should break your level 1/2 boolean-per-title model — refactor
   * to a count-based model instead of adding a second parallel structure.
   */
  availableCount(title: string): number {
    throw new Error("Not implemented");
  }

  /**
   * LEVEL 4
   *
   * Requirement change: when a title has zero available copies, a
   * checkOut request should be queued instead of failing:
   *  - checkOut(title, dueDate) — if unavailable, queue the request
   *    (e.g. by patron id) instead of throwing/no-oping
   *  - returnBook(title) — when a copy is returned, if there's a queue,
   *    automatically assign it to the next queued request
   *  - queueLength(title: string): number
   */
  queueLength(title: string): number {
    throw new Error("Not implemented");
  }
}
