window.onload = function () {
    var paddingInput = document.getElementById('paddingInput');
    var marginInput = document.getElementById('marginInput');
    var borderInput = document.getElementById('borderInput');
    var applyPaddingButton = document.getElementById('applyPadding');
    var applyMarginButton = document.getElementById('applyMargin');
    var applyBorderButton = document.getElementById('applyBorder');
    var contentBox = document.querySelector('.content_box');
    var borderBox = document.querySelector('.border_box');
    var updateDimensions = function () {
        var contentBoxHeight = document.getElementById('content_box_height');
        var contentBoxWidth = document.getElementById('content_box_width');
        var borderBoxHeight = document.getElementById('border_box_height');
        var borderBoxWidth = document.getElementById('border_box_width');
        var contentHeight = document.getElementById('content_height');
        var paddingValueDisplay = document.getElementById('padding_value');
        var borderValueDisplay = document.getElementById('border_value');
        if (contentBoxHeight &&
            contentBoxWidth &&
            borderBoxHeight &&
            borderBoxWidth &&
            contentHeight &&
            paddingValueDisplay &&
            borderValueDisplay) {
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
        var paddingValue = "".concat(paddingInput.value, "px");
        contentBox.style.padding = paddingValue;
        borderBox.style.padding = paddingValue;
        updateDimensions();
    });
    applyMarginButton.addEventListener('click', function () {
        var marginValue = "".concat(marginInput.value, "px");
        contentBox.style.margin = marginValue;
        borderBox.style.margin = marginValue;
        updateDimensions();
    });
    applyBorderButton.addEventListener('click', function () {
        var borderValue = "".concat(borderInput.value, "px solid black");
        contentBox.style.border = borderValue;
        borderBox.style.border = borderValue;
        updateDimensions();
    });
    // Initial update
    updateDimensions();
};
