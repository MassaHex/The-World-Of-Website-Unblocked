document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById("Music");
  const muteButton = document.getElementById("muteButton");
  const muteImage = document.getElementById("muteImage");

  let isMuted = true; // Initial state

  muteButton.addEventListener("click", function () {
    if (isMuted) {
      audio.play();
      isMuted = false;
      audio.muted = false;
      muteImage.src = "/images/Unmuted.png"; // Replace with your unmute image source
    } else {
      audio.muted = true;
      isMuted = true;
      muteImage.src = "/images/Muted.png"; // Replace with your muted image source
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pvpSection = document.getElementById("PvP");
  const dropdownButton = document.getElementById("Dropdown-Button");

  let isVisible = false; // Initial State

  dropdownButton.addEventListener("click", function () {
    if (isVisible) {
      pvpSection.style.display = "none"
      dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
      isVisible = false;
    } else {
      pvpSection.style.display = "block"
      dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
      isVisible = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pvpSection = document.getElementById("PvP");
  const dropdownButton = document.getElementById("Dropdown-Button");

  let isVisible = false; // Initial State

  dropdownButton.addEventListener("click", function () {
    if (isVisible) {
      pvpSection.style.display = "none"
      dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
      isVisible = false;
    } else {
      pvpSection.style.display = "block"
      dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
      isVisible = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pvpSection = document.getElementById("PvE");
  const dropdownButton = document.getElementById("Dropdown-Button2");

  let isVisible = false; // Initial State

  dropdownButton.addEventListener("click", function () {
    if (isVisible) {
      pvpSection.style.display = "none"
      dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
      isVisible = false;
    } else {
      pvpSection.style.display = "block"
      dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
      isVisible = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pvpSection = document.getElementById("Casual");
  const dropdownButton = document.getElementById("Dropdown-Button3");

  let isVisible = false; // Initial State

  dropdownButton.addEventListener("click", function () {
    if (isVisible) {
      pvpSection.style.display = "none"
      dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
      isVisible = false;
    } else {
      pvpSection.style.display = "block"
      dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
      isVisible = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pvpSection = document.getElementById("Platformer");
  const dropdownButton = document.getElementById("Dropdown-Button4");

  let isVisible = false; // Initial State

  dropdownButton.addEventListener("click", function () {
    if (isVisible) {
      pvpSection.style.display = "none"
      dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
      isVisible = false;
    } else {
      pvpSection.style.display = "block"
      dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
      isVisible = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pvpSection = document.getElementById("Simulation");
  const dropdownButton = document.getElementById("Dropdown-Button5");

  let isVisible = false; // Initial State

  dropdownButton.addEventListener("click", function () {
    if (isVisible) {
      pvpSection.style.display = "none"
      dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
      isVisible = false;
    } else {
      pvpSection.style.display = "block"
      dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
      isVisible = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const pvpSection = document.getElementById("Other");
  const dropdownButton = document.getElementById("Dropdown-Button6");

  let isVisible = false; // Initial State

  dropdownButton.addEventListener("click", function () {
    if (isVisible) {
      pvpSection.style.display = "none"
      dropdownButton.style.transform = "rotate(90deg) translate(5px, -1px)";
      isVisible = false;
    } else {
      pvpSection.style.display = "block"
      dropdownButton.style.transform = "rotate(0deg) translate(1px, 6px)";
      isVisible = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById("search-bar");
  const appCards = document.getElementById("app-cards");
  
  // Function to filter cards and hide empty categories
  function filterCards(searchTerm) {
    let hasVisibleCard = false;
  
    // Loop through all categories by ID (remove "-Cat" suffix)
    for (const categoryId of ["Other-Cat", "PvP-Cat", "PvE-Cat", "Casual-Cat", "Platformer-Cat", "Simulation-Cat"]) { // Change category names based on your actual structure
      const category = document.getElementById(categoryId);
  
      if (category) {
        hasVisibleCard = false;
  
        // Get all game cards within the category (adjust selector if needed)
        const gameCards = category.querySelectorAll("span[id='game-card']");

        // Loop through all game cards
        for (const gameCard of gameCards) {
          // Access game card label (assuming it's within a `<span>` element)
          const gameNameWithoutSpaces = gameCard.getAttribute("label").toLowerCase().replace(/\s/g, "");
          const searchTermWithoutSpaces = searchTerm.toLowerCase().replace(/\s/g, "");
  
          // Check for match with or without spaces, and for initials/abbreviation
          const isMatch =
            gameNameWithoutSpaces.includes(searchTermWithoutSpaces) ||
            gameNameWithoutSpaces.startsWith(searchTermWithoutSpaces);
  
          // Show or hide the card based on the match
          gameCard.style.display = isMatch ? "" : "none";
  
          // Update flag if a card is visible
          if (isMatch) {
            hasVisibleCard = true;
          }
        }
  
        // Hide the category if no cards are visible within it
        category.style.display = hasVisibleCard ? "block" : "none";
      } else {
        console.warn("Category element with ID '" + categoryId + "' not found.");
      }
    }
  }
  
  // Add event listener to search bar for input changes
  searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value;
    filterCards(searchTerm);
  });
});
