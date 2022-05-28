import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'hoge✖hoge',
  iconSrc: './hogehoge.jpg'
	}
});

export default app;
