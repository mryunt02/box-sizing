window.onload = function () {
  const paddingInput = document.getElementById("paddingInput");
  const marginInput = document.getElementById("marginInput");
  const borderInput = document.getElementById("borderInput");

  const applyPaddingButton = document.getElementById("applyPadding");
  const applyMarginButton = document.getElementById("applyMargin");
  const applyBorderButton = document.getElementById("applyBorder");

  const contentBox = document.querySelector(".content_box");
  const borderBox = document.querySelector(".border_box");

  const updateDimensions = () => {
    document.getElementById("content_box_height").innerText =
      contentBox.offsetHeight;
    document.getElementById("content_box_width").innerText =
      contentBox.offsetWidth;
    document.getElementById("border_box_height").innerText =
      borderBox.offsetHeight;
    document.getElementById("border_box_width").innerText =
      borderBox.offsetWidth;
    document.getElementById("content_height").innerText =
      contentBox.offsetHeight;
    document.getElementById("padding_value").innerText = paddingInput.value;
    document.getElementById("border_value").innerText = borderInput.value;
  };

  applyPaddingButton.addEventListener("click", function () {
    const paddingValue = paddingInput.value + "px";
    contentBox.style.padding = paddingValue;
    borderBox.style.padding = paddingValue;
    updateDimensions();
  });

  applyMarginButton.addEventListener("click", function () {
    const marginValue = marginInput.value + "px";
    contentBox.style.margin = marginValue;
    borderBox.style.margin = marginValue;
    updateDimensions();
  });

  applyBorderButton.addEventListener("click", function () {
    const borderValue = borderInput.value + "px solid black";
    contentBox.style.border = borderValue;
    borderBox.style.border = borderValue;
    updateDimensions();
  });

  // Initial update
  updateDimensions();
};
