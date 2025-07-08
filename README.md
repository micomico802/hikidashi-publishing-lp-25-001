# Hikidashi Publishing Landing Page

This contains everything you need to run your app locally and deploy to production.

## 開発環境でのローカル実行

**前提条件:** Node.js

1. 依存関係をインストール:
   ```bash
   npm install
   ```

2. 環境変数を設定:
   - `.env.local` ファイルを作成し、`GEMINI_API_KEY` にあなたのGemini APIキーを設定

3. アプリを起動:
   ```bash
   npm run dev
   ```

## 本番環境での設定

1. `environment.production.template` を `.env.production` にコピー
2. `.env.production` ファイル内の `GEMINI_API_KEY` に本番用のAPIキーを設定
3. ビルド実行:
   ```bash
   npm run build
   ```

## プロジェクト構成

- React + TypeScript + Vite
- 出版サービス「引き出し出版」のランディングページ
- Gemini AIを活用した動的なコンテンツ生成

## 注意事項

- `.env.local` と `.env.production` ファイルは機密情報を含むため、Gitにコミットしないでください
- 本番環境へのデプロイ前に、すべての環境変数が正しく設定されていることを確認してください
