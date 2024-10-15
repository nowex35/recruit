// Vue 3 アプリケーションを作成するための createApp 関数をインポート
import { createApp } from "vue";

// メインコンポーネント App をインポート
import App from "./App.vue";

// Vuetify プラグイン（UI フレームワーク）をインポート
import vuetify from "./plugins/vuetify";

// フォントローダー（外部フォントの読み込み機能）をインポート
import { loadFonts } from "./plugins/webfontloader";

// Vue Router をインポート（ルーティング機能）
import router from "./router";

// フォントを読み込む（Web Font を事前にロードして、ページに適用する）
loadFonts();

// Vue アプリケーションを初期化し、Vuetify と Vue Router を組み込む
createApp(App) // App.vue コンポーネントを使用して Vue アプリケーションを作成
  .use(vuetify) // Vuetify プラグインをアプリケーションに登録
  .use(router) // Vue Router プラグインをアプリケーションに登録
  .mount("#app"); // アプリケーションを #app という ID を持つ DOM 要素にマウント
