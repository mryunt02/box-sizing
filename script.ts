window.onload = function () {
  const paddingInput = document.getElementById(
    'paddingInput'
  ) as HTMLInputElement;
  const marginInput = document.getElementById(
    'marginInput'
  ) as HTMLInputElement;
  const borderInput = document.getElementById(
    'borderInput'
  ) as HTMLInputElement;

  const applyPaddingButton = document.getElementById(
    'applyPadding'
  ) as HTMLButtonElement;
  const applyMarginButton = document.getElementById(
    'applyMargin'
  ) as HTMLButtonElement;
  const applyBorderButton = document.getElementById(
    'applyBorder'
  ) as HTMLButtonElement;

  const contentBox = document.querySelector('.content_box') as HTMLElement;
  const borderBox = document.querySelector('.border_box') as HTMLElement;

  const updateDimensions = (): void => {
    const contentBoxHeight = document.getElementById(
      'content_box_height'
    ) as HTMLElement;
    const contentBoxWidth = document.getElementById(
      'content_box_width'
    ) as HTMLElement;
    const borderBoxHeight = document.getElementById(
      'border_box_height'
    ) as HTMLElement;
    const borderBoxWidth = document.getElementById(
      'border_box_width'
    ) as HTMLElement;
    const contentHeight = document.getElementById(
      'content_height'
    ) as HTMLElement;
    const paddingValueDisplay = document.getElementById(
      'padding_value'
    ) as HTMLElement;
    const borderValueDisplay = document.getElementById(
      'border_value'
    ) as HTMLElement;

    if (
      contentBoxHeight &&
      contentBoxWidth &&
      borderBoxHeight &&
      borderBoxWidth &&
      contentHeight &&
      paddingValueDisplay &&
      borderValueDisplay
    ) {
      contentBoxHeight.innerText = contentBox.offsetHeight.toString();
      contentBoxWidth.innerText = contentBox.offsetWidth.toString();
      borderBoxHeight.innerText = borderBox.offsetHeight.toString();
      borderBoxWidth.innerText = borderBox.offsetWidth.toString();
      contentHeight.innerText = contentBox.offsetHeight.toString();
      paddingValueDisplay.innerText = paddingInput.value;
      borderValueDisplay.innerText = borderInput.value;
    }
  };

  applyPaddingButton.addEventListener('click', function () {
    const paddingValue = `${paddingInput.value}px`;
    contentBox.style.padding = paddingValue;
    borderBox.style.padding = paddingValue;
    updateDimensions();
  });

  applyMarginButton.addEventListener('click', function () {
    const marginValue = `${marginInput.value}px`;
    contentBox.style.margin = marginValue;
    borderBox.style.margin = marginValue;
    updateDimensions();
  });

  applyBorderButton.addEventListener('click', function () {
    const borderValue = `${borderInput.value}px solid black`;
    contentBox.style.border = borderValue;
    borderBox.style.border = borderValue;
    updateDimensions();
  });

  // Initial update
  updateDimensions();
};
