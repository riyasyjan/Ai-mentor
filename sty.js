// Get references to the button and dropdown content
const profileBtn = document.getElementById("profile-btn");
const dropdownContent = document.getElementById("dropdown-content");

// Toggle dropdown visibility on button click
profileBtn.addEventListener("click", () => {
  const isVisible = dropdownContent.style.display === "block";
  dropdownContent.style.display = isVisible ? "none" : "block";
});

// Close the dropdown if clicked outside
window.addEventListener("click", (event) => {
  if (
    !profileBtn.contains(event.target) &&
    !dropdownContent.contains(event.target)
  ) {
    dropdownContent.style.display = "none";
  }
});
