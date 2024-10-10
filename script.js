document
  .getElementById("item-selection-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const selectedItems = Array.from(
      document.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    window.location.href = "item.html";
  });

document.getElementById("search-input").addEventListener("keyup", function () {
  const searchValue = this.value.toLowerCase();
  const labels = document.querySelectorAll("#item-selection-form label");

  labels.forEach((label) => {
    const itemText = label.textContent.toLowerCase();
    if (itemText.includes(searchValue)) {
      label.style.display = ""; // Show the label
    } else {
      label.style.display = "none"; // Hide the label
    }
  });
});

function togglePopup() {
  const popup = document.getElementById("faqPopup");
  popup.classList.toggle("active");
}

function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  answer.classList.toggle("active");
}

