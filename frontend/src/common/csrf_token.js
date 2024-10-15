// 指定された名前のクッキーを取得する関数
// @param {string} name - 取得したいクッキーの名前
// @return {string|null} - クッキーの値、または null（クッキーが存在しない場合）
function getCookie(name) {
  var cookieValue = null; // クッキーが見つかったらその値を格納する変数

  // ブラウザにクッキーが設定されているか確認し、空でないことをチェック
  if (document.cookie && document.cookie !== "") {
    // クッキーは1つの文字列に ';' で区切られて格納されているため、分割して配列に変換
    var cookies = document.cookie.split(";");

    // 各クッキーのキーと値のペアをチェック
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim(); // 各クッキー文字列の前後の空白を除去

      // クッキーの名前が指定された `name` と一致するかチェック
      if (cookie.substring(0, name.length + 1) === name + "=") {
        // 一致したら、そのクッキーの値をデコードして cookieValue に格納
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break; // 見つかったのでループを終了
      }
    }
  }

  // クッキーの値（もしくは null）を返す
  return cookieValue;
}

// "csrftoken" という名前のクッキーを取得し、CSRF トークンとして変数に格納
var CSRF_TOKEN = getCookie("csrftoken");

// CSRF トークンを他のモジュールでも使用できるようにエクスポート
export { CSRF_TOKEN };
