function setActiveItem() {
  const slider = document.querySelector(".slider");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const circles = document.querySelectorAll(".circle");
  let activeIndex = 0;

  // Find the index of the active item
  const activeItem = slider.querySelector(".active");
  const allItems = slider.querySelectorAll(".li-item");
  allItems.forEach((item, index) => {
    if (item === activeItem) {
      activeIndex = index;
    }
  });

  // Add event listener to the previous button
  prevButton.addEventListener("click", () => {
    // Remove the active class from the current item
    allItems[activeIndex].classList.remove("active");

    // Remove the circleActive class from the current circle
    circles[activeIndex].classList.remove("circleActive");

    // Update the active index
    activeIndex = activeIndex - 1;
    if (activeIndex < 0) {
      activeIndex = allItems.length - 1;
    }

    // Add the active class to the new item
    allItems[activeIndex].classList.add("active");

    // Add the circleActive class to the new circle
    circles[activeIndex].classList.add("circleActive");
  });

  // Add event listener to the next button
  nextButton.addEventListener("click", () => {
    // Remove the active class from the current item
    allItems[activeIndex].classList.remove("active");

    // Remove the circleActive class from the current circle
    circles[activeIndex].classList.remove("circleActive");

    // Update the active index
    activeIndex = activeIndex + 1;
    if (activeIndex >= allItems.length) {
      activeIndex = 0;
    }

    // Add the active class to the new item
    allItems[activeIndex].classList.add("active");

    // Add the circleActive class to the new circle
    circles[activeIndex].classList.add("circleActive");
  });
}

// Call the function to activate it
setActiveItem();
