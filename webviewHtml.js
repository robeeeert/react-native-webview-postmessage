export const webviewHtml = `<script>
    let timeout;
    document.addEventListener("message", function () {
    	if (timeout) {
    		clearTimeout(timeout);
        }
    });

    function tryPostMessage(message) {
    	window.postMessage(message);
    	timeout = setTimeout(tryPostMessage.bind(this, message), 1000);
    }
`;
