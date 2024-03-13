function openSearchBar() {
  var searchBar = document.querySelector("#search-bar");
  searchBar.style.display = "flex";
}

function closeSearchBar() {
  var searchBar = document.querySelector("#search-bar");
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
