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
# 環境を設定するコマンドを実行します。
NODE_ENV：'development' or 'production'
DB～系：DB環境に合わせて
CORS_ORIGIN：通信を許可するIPとPORTを指定

$ export NODE_ENV=
$ export DB_TYPE=
$ export DB_HOST=
$ export DB_PORT=
$ export DB_USERNAME=
$ export DB_PASSWORD=
$ export DB_DATABASE=
$ export CORS_ORIGIN=
```

## Run

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
