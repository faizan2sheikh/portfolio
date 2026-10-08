const suggestionForm = document.querySelector("#book-suggestion-form");

if (suggestionForm instanceof HTMLFormElement) {
  const bookInput = suggestionForm.querySelector("#suggested-book");

  if (bookInput instanceof HTMLInputElement) {
    suggestionForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const bookTitle = bookInput.value.trim();
      if (!bookTitle) {
        bookInput.setCustomValidity("Please enter a book title.");
        bookInput.reportValidity();
        return;
      }

      bookInput.setCustomValidity("");

      const compose = new URLSearchParams({
        view: "cm",
        fs: "1",
        to: "faizan2sheikh@gmail.com",
        su: `Book recommendation: ${bookTitle}`,
        body: `Hi Faizan,\n\nI think you might enjoy reading "${bookTitle}".\n\nHappy reading!`,
      });

      window.open(
        `https://mail.google.com/mail/?${compose.toString()}`,
        "_blank",
        "noopener,noreferrer",
      );
    });

    bookInput.addEventListener("input", () => {
      bookInput.setCustomValidity("");
    });
  }
}
