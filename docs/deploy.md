# デプロイ環境構築(Render.com)

## ※注意！現在のデプロイ方法は暫定対応です！※
## 落ち着いたら正規の方法を改めて調べる

以下、やったこと、詰まったことなどを記載


# 現行のデプロイ手順
```bash
1.サイト右上の「new」→「Web Service」
2.Nameを設定
3.Build Commandaを「npm install && npm run build」
4.Start Commandを「npx typeorm migration:run && npm start」
※暫定対応。本当は「npm start:prod」じゃないと駄目なはず
5.Environmentメニューから環境変数を設定 内容はreadme参照
```

# メモ
ローカル環境と違ってポート番号を動的に取得するように変更  
ちなみにlogで確認したら10000だった
```ts
// main.ts
// await app.listen(3000);
const port = process.env.PORT || 3000;
await app.listen(port, '0.0.0.0');
```

環境変数を.envファイルから読み込む方法からexportで設定する方法に変更  
どうもrender.comは.envファイルをインポートする機能もあるっぽいが上手くいかなかった

ormconfig.jsに暫定対応で以下の記載
```js
// TODO 2022/09/27: 本番環境では推奨されていない。暫定対応
synchronize: true,
```
「npm start:prod」で上手くいかなかったので「npm start」と上記記載で回避した。  
この２つの違いが理解できていないので発生した現状だと考えられる。  
しっかり勉強しろ。  

TablePlusでDBに接続  
```bash
1.startメニューの「Create a new connection」を選択
2.「Import from URL」を選択
3.Render.comのDBメニューにある「info」→「Connections」→「External Database URL」の値をコピー
4.「Import from URL」を選択するとURLを貼り付けれるので貼り付け
```

