// CSRF トークンを別ファイルからインポート
import { CSRF_TOKEN } from "./csrf_token.js";

// APIレスポンスを処理する関数
function handleResponse(response) {
  // ステータスコードが204 No Contentの場合、空文字列を返す
  if (response.status === 204) {
    return "";
  }
  // ステータスコードが404 Not Foundの場合、nullを返す
  else if (response.status === 404) {
    return null;
  }
  // それ以外の場合、レスポンスをJSONに変換して返す
  else {
    return response.json();
  }
}

// APIサービスを実行する関数
// @param {string} endpoint - APIのエンドポイントURL
// @param {string} [method="GET"] - HTTPメソッド（GET, POST, PUT, DELETEなど）
// @param {Object} [data] - 送信するデータ（オプション）
function apiService(endpoint, method, data) {
  // リクエストの設定オブジェクトを作成
  const config = {
    // メソッドは指定があれば使用、なければデフォルトでGET
    method: method || "GET",

    // データが渡されている場合、それをJSON文字列に変換してリクエストのボディに設定
    body: data !== undefined ? JSON.stringify(data) : null,

    // リクエストヘッダーを設定
    headers: {
      "content-type": "application/json", // JSON形式のデータを送信する
      "X-CSRFTOKEN": CSRF_TOKEN, // CSRFトークンをヘッダーに含める
    },
  };

  // fetch API を使ってリクエストを送信
  return fetch(endpoint, config)
    .then(handleResponse) // レスポンスが返ってきたら、handleResponse関数で処理
    .catch((error) => console.log("Error:", error)); // エラーが発生した場合、コンソールに出力
}

// 他のファイルでもこの関数を使えるようにエクスポート
export { apiService };
