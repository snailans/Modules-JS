class Library {
  #books;

  constructor(initialBooks = []) {
    if (Array.isArray(initialBooks)) {
      const uniqueBooks = new Set(initialBooks);
      if (uniqueBooks.size !== initialBooks.length) {
        throw new Error("Initial list contains duplicate books.");
      }
      this.#books = initialBooks;
    } else {
      throw new Error("Initial books should be provided as an array.");
    }
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Book "${title}" already exists in the library.`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Book "${title}" not found in the library.`);
    }
    this.#books.splice(index, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

try {
  const library = new Library(["Book 1", "Book 2", "Book 3"]);
  console.log(library.allBooks);

  library.addBook("Book 4");
  console.log(library.allBooks);

  library.removeBook("Book 2");
  console.log(library.allBooks);

  console.log(library.hasBook("Book 1"));
  console.log(library.hasBook("Book 5"));
} catch (error) {
  console.error(error.message);
}