import React from 'react';
import { WebView } from 'react-native';
import { webviewHtml } from './webviewHtml';

export class PostMessageWebView extends React.PureComponent {
	constructor(props) {
		super(props);


	}

	handleMessage = (e) => {
		// Tell the webview the message was received
		if (this.webview) {
			this.webview.postMessage('response');
		}

		// Invoke the message callback on the parent component
		this.props.onMessage(e.nativeEvent.data);
	};

	render() {
		const { func, injectScriptTags } = this.props;

		const html = `
			${injectScriptTags}
			${webviewHtml}
			(${func})().then(function(message) { tryPostMessage(message); });
			</script>
		`;

		return (
			<WebView
				source={{html}}
				onMessage={this.handleMessage}
				ref={el => this.webview = el}
			/>
		);
	}
}
