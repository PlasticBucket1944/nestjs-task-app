## About
タスクを管理する簡単なアプリケーションサーバーです。


## Environment

```bash
typescript : 4.3.5
nestjs : 8.2.6
PostgreSQL : 14.2  
pg : 8.7.3  
@nestjs/typeorm : 8.0.2  
typeorm : 0.2.45  
```

## Setup

```bash
# アプリケーションをクローンします
# ルート下にenvフォルダを作成します
# env下にdevelopment.env(ローカル用)とproduction.env(本番用)を作成します
# .envに以下の情報を記載します
DB_TYPE=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
CORS_ORIGIN=通信を許可するIPとPORTを指定
# 環境を設定するコマンドを実行します。これによって読み込まれる.envが変わります。
$ export NODE_ENV='development' or 'production'
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
