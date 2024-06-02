const CategoryBoxes = document.querySelectorAll(
    ".category-box"
  );
  for (let i = 0; i < CategoryBoxes.length; i++) {
    CategoryBoxes[i].addEventListener("click", () => {
      for (let j = 0; j < CategoryBoxes.length; j++) {
        CategoryBoxes[j].style.backgroundColor = "#FFFFFF";
      }
      CategoryBoxes[i].style.backgroundColor = "#FF0000";
    });
  }
 