// Vue Router の基本機能と HTML5 History API のためのヘルパー関数をインポート
import { createRouter, createWebHistory } from "vue-router";

// ルートに対応するコンポーネントをインポート
import HomeView from "../views/HomeView.vue"; // ホームページ用のコンポーネント
import JobView from "../views/JobView.vue"; // ジョブ詳細ページ用のコンポーネント

// ルート定義の配列
const routes = [
  {
    // ホームページ用のルート設定
    path: "/", // ルートのパス（URL）
    name: "HomeView", // ルートの名前（ユニークな識別子として使用）
    component: HomeView, // このルートにマッチしたときに表示するコンポーネント
  },
  {
    // ジョブ詳細ページ用のルート設定
    path: "/job/:id", // 動的なパラメータ ":id" を含むパス（ジョブID）
    name: "JobView", // ルートの名前
    component: JobView, // このルートにマッチしたときに表示するコンポーネント
    // props オプションを使用して、ルートパラメータをコンポーネントに渡す
    // 'id' パラメータを Number 型に変換して渡す（ルートパラメータは通常文字列）
    props: (route) => ({ id: Number(route.params.id) }),
  },
];

// Vue Router インスタンスを作成
const router = createRouter({
  // HTML5 の History API を使用して、ブラウザの履歴操作（戻る・進む）が可能
  history: createWebHistory(),
  // ルート定義を適用
  routes,
});

// ルーターインスタンスをエクスポートして、アプリケーション全体で使用可能にする
export default router;
