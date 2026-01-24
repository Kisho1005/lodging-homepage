# バックエンド セットアップガイド

## メール通知の設定方法

### Gmail を使用する場合

1. **Googleアカウントで2段階認証を有効化**
   - Googleアカウント管理画面にアクセス
   - セキュリティ → 2段階認証プロセス を有効化

2. **アプリパスワードを生成**
   - Googleアカウント管理画面 → セキュリティ
   - 「アプリパスワード」を検索
   - アプリを選択：「メール」
   - デバイスを選択：「その他（カスタム名）」で「予約システム」など入力
   - 「生成」をクリック
   - **表示された16桁のパスワードをコピー**

3. **環境変数の設定**

Windowsの場合:
```bash
set SMTP_SERVER=smtp.gmail.com
set SMTP_PORT=587
set SMTP_USERNAME=your_email@gmail.com
set SMTP_PASSWORD=生成した16桁のアプリパスワード
set NOTIFY_EMAIL=通知を受け取るメールアドレス
```

または、`.env`ファイルを作成して:
```
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=生成した16桁のアプリパスワード
NOTIFY_EMAIL=通知を受け取るメールアドレス
```

### その他のメールサービス

**Outlook/Hotmail:**
```
SMTP_SERVER=smtp-mail.outlook.com
SMTP_PORT=587
```

**Yahoo Mail:**
```
SMTP_SERVER=smtp.mail.yahoo.com
SMTP_PORT=587
```

### 4. 環境変数の設定

Windowsの場合:
```bash
set SMTP_USERNAME=your_email@gmail.com
set SMTP_PASSWORD=your_app_password
set NOTIFY_EMAIL=notification_recipient@gmail.com
```

## インストール

```bash
pip install -r requirements.txt
```

## 実行

```bash
python app.py
```

サーバーは `http://localhost:5000` で起動します。

## フロントエンドとの接続

フロントエンドの開発サーバーを起動してから、バックエンドを起動してください。

お問い合わせフォームから送信すると、設定したLINEアカウント/グループに通知が届きます。
