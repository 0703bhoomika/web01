// Smooth scroll to books section
document.getElementById("browseBtn").addEventListener("click", () => {
  document.getElementById("books").scrollIntoView({ behavior: "smooth" });
});

// Book search
const searchInput = document.getElementById("searchInput");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", () => {
  let filter = searchInput.value.toLowerCase();

  bookCards.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();
    let author = card.querySelector("p").textContent.toLowerCase();

    if (title.includes(filter) || author.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
