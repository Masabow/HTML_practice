// 0-99までの値をランダムに作る
var kotae = Math.floor(Math.random() * 100);

function on_ok() {
    // Element オブジェクト取得
    var obj = document.getElementById('num');
    // input要素の値を取得
    var num = obj.value;

    // 答えと入力した値が同じか？
    if (num == kotae) {
        document.getElementById('kotae').innerText = '正解です！';
    } else if (num < kotae) {
        document.getElementById('kotae').innerText = num + 'より大きいです';
    } else {
        document.getElementById('kotae').innerText = num + 'より小さいです';
    }
}
// OKボタンクリック時の挙動を定義
document.getElementById('ok').addEventListener('click', on_ok);