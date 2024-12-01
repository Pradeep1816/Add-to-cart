document.addEventListener("DOMContentLoaded", () => {
  // Get all radio buttons and corresponding option containers
  const radioButtons = document.querySelectorAll(".radio_btn");
  const optionContainers = document.querySelectorAll(".options");

  optionContainers.forEach((option) => {
    option.style.display = "none";
  });

  radioButtons.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      optionContainers.forEach((option) => {
        option.style.display = "none";
      });
      if (radio.checked) {
        optionContainers[index].style.display = "block";
      }
    });
  });
});
