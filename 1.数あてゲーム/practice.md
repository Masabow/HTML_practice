# 数あてゲーム

## ゲームのルール
1. 2桁のランダムな数値を決める
2. プレイヤーはそのランダムな数値を推測して入力
3. 入力した値が一致してれば終了
4. 一致していなければその値より大きいか小さいかを出力
5. 一致するまで2-5を繰り返す

## 作り方
1. ファイルを作る
   - 数あてゲーム.html
   - 数あてゲーム.js
2. 初めてのHTML

数あてゲーム.htmlの内容を書く
``` HTML
<html>
    <body>
        Hello world!
    </body>
</html>
```

3. 要素を書き換える

<>～</>で囲まれた文字列を要素といいます。
id属性と言われる目印をつけた要素に対し、HTMLが表示される時に
表示される文字列の変更をします。

数あてゲーム.html
``` HTML
<html>
    <head>
    </head>
    <body>
        <p>
            私の名前は<span id="name">TEST</span>です。
        </p>
        <script src="数あてゲーム.js"></script>
    </body>
</html>
```

数あてゲーム.jsを↓のように書くと
TESTと表示されていた部分が"名前"に置き換わります
``` JS
(function () {
    document.getElementById('name').innerText = '名前';
})();
```

4. 数あてゲームの画面を作る
ゲームのルールのうち、プレイヤーが操作する部分と結果表示を作ります
数あてゲーム.html
``` HTML
<html>
    <head>
    </head>
    <body>
        <p>
            2桁の数値を入れてください<input id="num" maxlength="2" size="2" /><button>OK</button>
        </p>
        <p id="kotae"></p>
        <script src="数あてゲーム.js"></script>
    </body>
</html>
```

5. 数あてゲームの操作プログラムを作る
プレイヤーがボタンを押すと、入力した数値を表示するようにします
数あてゲーム.js
``` JS
function on_ok() {
    // Element オブジェクト取得
    var obj = document.getElementById('num');
    // input要素の値を取得
    var num = obj.value;
    // 答えを出力
    document.getElementById('kotae').innerText = '入力したのは' + num + 'ですね？';
}
// OKボタンクリック時の挙動を定義
document.getElementById('ok').addEventListener('click', on_ok);

```

6. 数あてゲームのプログラムを完成させる
数あてゲーム.js
``` JS
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
```