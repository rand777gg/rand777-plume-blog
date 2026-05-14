---
title: Nginx
createTime: 2025/09/15 16:27:37
permalink: /learn/backend/web-server/Nginx/
icon: nonicons:nginx-16
tags:
  - Nginx
  - Web Server
  - Multiplatform
status: writing
---

Nginx 作为 Web 开发肯定都不陌生，主要是相较其他 Web 服务器它有点太全能了，无论是「反向代理」、「内容缓存」、「负载均衡」、「邮件服务器」亦或是简单的 TCP/UDP 都能搞定。这里给出一些常用的 Nginx 用法和配置。


## 基本的 HTTP 服务器功能

### 静态文件索引

`ngx_http_index_module` 模块处理以 <kbd class="keystroke">/</kbd> 结尾的请求

```
http {
    server {
        location / {
            index index.$geo.html index.html;
        }
    }
}
```

### 反向代理

Nginx 最常用的功能

```
location / {
    proxy_pass       http://localhost:8000;
    proxy_set_header Host      $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

### 响应压缩

```
gzip            on;
gzip_min_length 1000;
gzip_proxied    expired no-cache no-store private auth;
gzip_types      text/plain application/xml;
```

### 负载均衡

```
upstream backend {
    server backend1.example.com       weight=5;
    server backend2.example.com:8080;
    server unix:/tmp/backend3;

    server backup1.example.com:8080   backup;
    server backup2.example.com:8080   backup;
}

server {
    location / {
        proxy_pass http://backend;
    }
}
```

### HTTPS 支持

```
http {

    ...

    server {
        listen              443 ssl;
        keepalive_timeout   70;

        ssl_protocols       TLSv1.2 TLSv1.3;
        ssl_ciphers         AES128-SHA:AES256-SHA:RC4-SHA:DES-CBC3-SHA:RC4-MD5;
        ssl_certificate     /usr/local/nginx/conf/cert.pem;
        ssl_certificate_key /usr/local/nginx/conf/cert.key;
        ssl_session_cache   shared:SSL:10m;
        ssl_session_timeout 10m;

        ...
    }
}    
```

## TCP/UDP 反向代理

### 基本

```
server {
    listen 127.0.0.1:12345;
    proxy_pass 127.0.0.1:8080;
}

server {
    listen 12345;
    proxy_connect_timeout 1s;
    proxy_timeout 1m;
    proxy_pass example.com:12345;
}

server {
    listen 53 udp reuseport;
    proxy_timeout 20s;
    proxy_pass dns.example.com:53;
}

server {
    listen [::1]:12345;
    proxy_pass unix:/tmp/stream.socket;
}
```
### SNI

```
map $ssl_preread_server_name $name {
    backend.example.com      backend;
    default                  backend2;
}

upstream backend {
    server 192.168.0.1:12345;
    server 192.168.0.2:12345;
}

upstream backend2 {
    server 192.168.0.3:12345;
    server 192.168.0.4:12345;
}

server {
    listen      12346;
    proxy_pass  $name;
    ssl_preread on;
}
```

## 其他功能

### IP 地理查询

需要 [GeoIP](https://www.maxmind.com/app/c) 库

```
http {
    geoip_country         GeoIP.dat;
    geoip_city            GeoLiteCity.dat;
    geoip_proxy           192.168.100.0/24;
    geoip_proxy           2001:0db8::/32;
    geoip_proxy_recursive on;
    ...
```

### A/B 测试

```
http {
    split_clients "${remote_addr}AAA" $variant {
                   0.5%               .one;
                   2.0%               .two;
                   *                  "";
    }

    server {
        location / {
            index index${variant}.html;
```

### 访问控制

```
location / {
    deny  192.168.1.1;
    allow 192.168.1.0/24;
    allow 10.1.1.0/16;
    allow 2001:0db8::/32;
    deny  all;
}
```

### 请求头验证

```
valid_referers none blocked server_names
               *.example.com example.* www.example.org/galleries/
               ~\.google\.;

if ($invalid_referer) {
    return 403;
}
```

### 错误重定向

```
error_page 404             /404.html;
error_page 500 502 503 504 /50x.html;
```