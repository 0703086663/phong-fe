function openSearchBar() {
  var searchBar = document.querySelector("#search-bar");
  searchBar.style.display = "flex";
}

function closeSearchBar() {
  var searchBar = document.querySelector("#search-bar");
  searchBar.style.display = "none";
}

function openMobileSearchBar() {
  var searchBar = document.querySelector("#mobile-search-bar");
  searchBar.style.display = "flex";
}

function closeMobileSearchBar() {
  var searchBar = document.querySelector("#mobile-search-bar");
  searchBar.style.display = "none";
}

function openDropdownNav() {
  var dropdownNav = document.querySelector("#dropdown-nav");
  dropdownNav.style.display =
    dropdownNav.style.display === "block" ? "none" : "block";
}

function closeDropdownNav() {
  var dropdownNav = document.querySelector("#dropdown-nav");
  dropdownNav.style.display = "none";
}

function toggleList(element) {
  var ul = element.querySelector("ul");
  ul.classList.toggle("hidden"); // Toggle the hidden class
}
