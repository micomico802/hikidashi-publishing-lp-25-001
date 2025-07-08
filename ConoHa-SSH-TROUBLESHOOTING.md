# ConoHa WING SSH接続 トラブルシューティング

## よくある問題と解決方法

### 1. SSH機能の有効化
```
管理画面 → サイト管理 → SSH設定
```
- SSH機能が「有効」になっているか確認
- 一部プランでは制限がある場合があります

### 2. 公開鍵の形式問題
ConoHa WINGは特定の形式の公開鍵のみ受け付けます：

**正しい形式例：**
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQ... user@host
```

**NGな形式：**
- PEM形式の秘密鍵を貼り付け
- 改行が入っている
- コメント部分がない

### 3. ユーザー名の形式
ConoHa WINGでは以下のいずれかの形式を使用：

```bash
# パターン1: アカウント名のみ
SSH_USER=your-account

# パターン2: アカウント名.ドメイン名
SSH_USER=your-account.your-domain.com

# パターン3: ドメイン名のみ（稀）
SSH_USER=your-domain.com
```

### 4. ポート番号
- 通常は `22` ですが、ConoHa WINGでは異なる場合があります
- 管理画面のSSH設定で確認してください

### 5. 接続先ホスト
```bash
# 通常のサーバーホスト名
SSH_HOST=your-server.conoha.ne.jp

# または
SSH_HOST=your-domain.com
```

## 診断手順

### Step 1: SSH設定の確認
ConoHa WING管理画面で以下を確認：
1. SSH機能が有効
2. 公開鍵が登録済み
3. 正しいユーザー名を使用
4. 正しいポート番号を使用

### Step 2: ローカルからのテスト
```bash
# ローカル環境からのテスト（PowerShellまたはWSL）
ssh -v your-user@your-host.conoha.ne.jp -p 22
```

### Step 3: 公開鍵の再生成・再登録
問題が続く場合は新しい鍵ペアを生成：

```bash
# 新しい鍵ペア生成
ssh-keygen -t rsa -b 4096 -C "github-actions@your-domain.com"

# 公開鍵を表示
cat ~/.ssh/id_rsa.pub
```

この公開鍵をConoHa WINGに再登録してください。

## 緊急時の代替手段

### FTP/SFTPによるデプロイ
SSH接続が解決しない場合は、FTPを使用：

```yaml
- name: Deploy via FTP
  uses: SamKirkland/FTP-Deploy-Action@v4.3.4
  with:
    server: ${{ secrets.FTP_HOST }}
    username: ${{ secrets.FTP_USER }}
    password: ${{ secrets.FTP_PASSWORD }}
    local-dir: ./dist/
    server-dir: /public_html/
```

### 必要なシークレット
```
FTP_HOST=your-ftp-host.conoha.ne.jp
FTP_USER=your-ftp-username
FTP_PASSWORD=your-ftp-password
``` 