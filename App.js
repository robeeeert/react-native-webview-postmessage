import React from 'react';
import {PostMessageWebView} from "./PostMessageWebView";

export default class App extends React.Component {
	render() {
		return (
			<PostMessageWebView
				func={() => new Promise(resolve => { setTimeout(() => resolve('something else'), 5000); })}
				onMessage={message => console.log('Received message ', message)}
				injectScriptTags={'<script>console.log("")</script>'}
			/>
		);
	}
}
