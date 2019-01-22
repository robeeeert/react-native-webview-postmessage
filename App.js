import React from 'react';
import {WebView} from 'react-native';

const html = `
<script>
	let timeout;
	document.addEventListener('message', function() {
		if (timeout) {
			clearTimeout(timeout);
		}
	});
	function tryPost() {
		window.postMessage('"Hello" from the web view');
		timeout = setTimeout(tryPost, 1000);
	}
	tryPost();
</script>
`;

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.handleMessage = (event) => {
			console.log('Got message: ' + event.nativeEvent.data);
			if (this.webview) {
				console.log('Respond to message');
				this.webview.postMessage('Hi');
			}
		};
	}

	render() {
		return (
			<WebView
				onMessage={this.handleMessage}
				source={{html}}
				ref={(el) => this.webview = el}
			/>
		);
	}
}
