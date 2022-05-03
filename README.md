# dwd_front

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Remote DB credentials

server: mysql
name: dwd_db_cloud
host: aal5nicjyzcza.cqngf50s1bk9.us-east-1.rds.amazonaws.com
port: 3306
username: root
password: rootroot

### Remote api endpoint

baseUrl: http://dwdback-env.eba-kuyrpw3s.us-east-1.elasticbeanstalk.com/api

get example: {{baseUrl}}/appointments

### Req body example

"date": string Y-M-D,
"start_time":string hr:min,
"first_name":string,
"last_name":string,
"phone_number":integer,
"email": string

<!-- example ↓ -->

{
"date":"2022-05-02",
"start_time":"09:00",
"first_name":"foo",
"last_name":"bar",
"phone_number":912345678,
"email":"myemail@gmail.com"
}
