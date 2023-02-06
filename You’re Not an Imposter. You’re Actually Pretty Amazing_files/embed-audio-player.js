function receiveMessage(event) {
    var element = document.getElementById("noa-web-audio-player");

    if (!element) {
        console.log('Noa - No element found');
        return;
    }

    let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    if (event.data === "NOA_AUDIO_NOT_FOUND") {

        if (element.remove && !isIE11) {
            console.log('Noa - Audio not found - Removing element');
            element.remove();
            return;
        }

        // For IE
        if (element.parentNode) {
            console.log('Noa - Audio not found - Removing element - IE');
            element.parentNode.removeChild(element)
        }
    }

    if (event.data === "NOA_AUDIO_FOUND") {

        if (element.style && element.style.display === 'none') {

            if (!isIE11) {
                console.log('Noa - Audio found - Showing element');
                element.style.display = 'initial';
                return
            }

            console.log('Noa - Audio found - Showing element - IE');

            // For IE
            element.style.display = '';
        }
    }
}

window.addEventListener("message", receiveMessage);
