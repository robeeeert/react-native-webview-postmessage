# react-native-webview-postmessage
Minimal viable example of a working postMessage scenario with React Native WebView

The problem seems to be a timing issue really. I shit you not. It's so fucking unsatisfying, but it's the truth. Also tried window.onload and all the good shit. Didn't work.

The `PostMessageWebView` component is a reusable Component for a one-time callback invocation from within a webview.

The props are:

* `func`: A javascript function that returns a promise that resolves to the message you want to send
* `injectScriptTags`: A string with `<script>` tags (or any other content) that will be inserted before all the postMessage logic (e.g. external resources)
* `onMessage`: The callback that will be invoked when a message was received. It can expect a string as the only argument representing the receoved message

TODO:
* Define an optional `timeout` prop, after which an optional `onError` callback is invoked
* Make underlying code more elegant

Open for PRs.