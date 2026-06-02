import{C as e,S as t,z as n}from"./vue-1fze0XYk.js";import{dl as r}from"./common-B7rGXzG4.js";var i=JSON.parse(`{"path":"/learn/backend/web-server/Nginx/","title":"Nginx | learn","lang":"zh-CN","frontmatter":{"title":"Nginx","createTime":"2025/09/15 16:27:37","permalink":"/learn/backend/web-server/Nginx/","icon":"nonicons:nginx-16","tags":["Nginx","Web Server","Multiplatform"],"status":"writing","description":"Nginx 作为 Web 开发肯定都不陌生，主要是相较其他 Web 服务器它有点太全能了，无论是「反向代理」、「内容缓存」、「负载均衡」、「邮件服务器」亦或是简单的 TCP/UDP 都能搞定。这里给出一些常用的 Nginx 用法和配置。 基本的 HTTP 服务器功能 静态文件索引 ngx_http_index_module 模块处理以 / 结尾的请求 ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-05-14T22:14:09.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://www.rand777.com/learn/backend/web-server/Nginx/"}],["meta",{"property":"og:site_name","content":"rand777"}],["meta",{"property":"og:title","content":"Nginx"}],["meta",{"property":"og:description","content":"Nginx 作为 Web 开发肯定都不陌生，主要是相较其他 Web 服务器它有点太全能了，无论是「反向代理」、「内容缓存」、「负载均衡」、「邮件服务器」亦或是简单的 TCP/UDP 都能搞定。这里给出一些常用的 Nginx 用法和配置。 基本的 HTTP 服务器功能 静态文件索引 ngx_http_index_module 模块处理以 / 结尾的请求 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-05-14T22:14:09.000Z"}],["meta",{"property":"article:tag","content":"Multiplatform"}],["meta",{"property":"article:tag","content":"Web Server"}],["meta",{"property":"article:tag","content":"Nginx"}],["meta",{"property":"article:modified_time","content":"2026-05-14T22:14:09.000Z"}]]},"readingTime":{"minutes":1.39,"words":417},"git":{"createdTime":1778796849000,"updatedTime":1778796849000,"contributors":[{"name":"rand777","username":"rand777","email":"losmosga@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/rand777?v=4","url":"https://github.com/rand777"}]},"autoDesc":true,"filePathRelative":"learn/backend/web-server/Nginx.md","headers":[]}`),a={name:`Nginx.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<p>Nginx 作为 Web 开发肯定都不陌生，主要是相较其他 Web 服务器它有点太全能了，无论是「反向代理」、「内容缓存」、「负载均衡」、「邮件服务器」亦或是简单的 TCP/UDP 都能搞定。这里给出一些常用的 Nginx 用法和配置。</p><h2 id="基本的-http-服务器功能" tabindex="-1"><a class="header-anchor" href="#基本的-http-服务器功能"><span>基本的 HTTP 服务器功能</span></a></h2><h3 id="静态文件索引" tabindex="-1"><a class="header-anchor" href="#静态文件索引"><span>静态文件索引</span></a></h3><p><code>ngx_http_index_module</code> 模块处理以 <kbd class="keystroke">/</kbd> 结尾的请求</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>http {</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            index index.$geo.html index.html;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h3><p>Nginx 最常用的功能</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>location / {</span></span>
<span class="line"><span>    proxy_pass       http://localhost:8000;</span></span>
<span class="line"><span>    proxy_set_header Host      $host;</span></span>
<span class="line"><span>    proxy_set_header X-Real-IP $remote_addr;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="响应压缩" tabindex="-1"><a class="header-anchor" href="#响应压缩"><span>响应压缩</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>gzip            on;</span></span>
<span class="line"><span>gzip_min_length 1000;</span></span>
<span class="line"><span>gzip_proxied    expired no-cache no-store private auth;</span></span>
<span class="line"><span>gzip_types      text/plain application/xml;</span></span></code></pre></div><h3 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>upstream backend {</span></span>
<span class="line"><span>    server backend1.example.com       weight=5;</span></span>
<span class="line"><span>    server backend2.example.com:8080;</span></span>
<span class="line"><span>    server unix:/tmp/backend3;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server backup1.example.com:8080   backup;</span></span>
<span class="line"><span>    server backup2.example.com:8080   backup;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        proxy_pass http://backend;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="https-支持" tabindex="-1"><a class="header-anchor" href="#https-支持"><span>HTTPS 支持</span></a></h3><div class="language- has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>http {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen              443 ssl;</span></span>
<span class="line"><span>        keepalive_timeout   70;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ssl_protocols       TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span>        ssl_ciphers         AES128-SHA:AES256-SHA:RC4-SHA:DES-CBC3-SHA:RC4-MD5;</span></span>
<span class="line"><span>        ssl_certificate     /usr/local/nginx/conf/cert.pem;</span></span>
<span class="line"><span>        ssl_certificate_key /usr/local/nginx/conf/cert.key;</span></span>
<span class="line"><span>        ssl_session_cache   shared:SSL:10m;</span></span>
<span class="line"><span>        ssl_session_timeout 10m;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ...</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="collapsed-lines"></div></div><h2 id="tcp-udp-反向代理" tabindex="-1"><a class="header-anchor" href="#tcp-udp-反向代理"><span>TCP/UDP 反向代理</span></a></h2><h3 id="基本" tabindex="-1"><a class="header-anchor" href="#基本"><span>基本</span></a></h3><div class="language- has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 127.0.0.1:12345;</span></span>
<span class="line"><span>    proxy_pass 127.0.0.1:8080;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 12345;</span></span>
<span class="line"><span>    proxy_connect_timeout 1s;</span></span>
<span class="line"><span>    proxy_timeout 1m;</span></span>
<span class="line"><span>    proxy_pass example.com:12345;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen 53 udp reuseport;</span></span>
<span class="line"><span>    proxy_timeout 20s;</span></span>
<span class="line"><span>    proxy_pass dns.example.com:53;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen [::1]:12345;</span></span>
<span class="line"><span>    proxy_pass unix:/tmp/stream.socket;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="collapsed-lines"></div></div><h3 id="sni" tabindex="-1"><a class="header-anchor" href="#sni"><span>SNI</span></a></h3><div class="language- has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" style="--vp-collapsed-lines:15;--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>map $ssl_preread_server_name $name {</span></span>
<span class="line"><span>    backend.example.com      backend;</span></span>
<span class="line"><span>    default                  backend2;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>upstream backend {</span></span>
<span class="line"><span>    server 192.168.0.1:12345;</span></span>
<span class="line"><span>    server 192.168.0.2:12345;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>upstream backend2 {</span></span>
<span class="line"><span>    server 192.168.0.3:12345;</span></span>
<span class="line"><span>    server 192.168.0.4:12345;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>server {</span></span>
<span class="line"><span>    listen      12346;</span></span>
<span class="line"><span>    proxy_pass  $name;</span></span>
<span class="line"><span>    ssl_preread on;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="collapsed-lines"></div></div><h2 id="其他功能" tabindex="-1"><a class="header-anchor" href="#其他功能"><span>其他功能</span></a></h2><h3 id="ip-地理查询" tabindex="-1"><a class="header-anchor" href="#ip-地理查询"><span>IP 地理查询</span></a></h3><p>需要 <a href="https://www.maxmind.com/app/c" target="_blank" rel="noopener noreferrer">GeoIP</a> 库</p><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>http {</span></span>
<span class="line"><span>    geoip_country         GeoIP.dat;</span></span>
<span class="line"><span>    geoip_city            GeoLiteCity.dat;</span></span>
<span class="line"><span>    geoip_proxy           192.168.100.0/24;</span></span>
<span class="line"><span>    geoip_proxy           2001:0db8::/32;</span></span>
<span class="line"><span>    geoip_proxy_recursive on;</span></span>
<span class="line"><span>    ...</span></span></code></pre></div><h3 id="a-b-测试" tabindex="-1"><a class="header-anchor" href="#a-b-测试"><span>A/B 测试</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>http {</span></span>
<span class="line"><span>    split_clients &quot;\${remote_addr}AAA&quot; $variant {</span></span>
<span class="line"><span>                   0.5%               .one;</span></span>
<span class="line"><span>                   2.0%               .two;</span></span>
<span class="line"><span>                   *                  &quot;&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>            index index\${variant}.html;</span></span></code></pre></div><h3 id="访问控制" tabindex="-1"><a class="header-anchor" href="#访问控制"><span>访问控制</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>location / {</span></span>
<span class="line"><span>    deny  192.168.1.1;</span></span>
<span class="line"><span>    allow 192.168.1.0/24;</span></span>
<span class="line"><span>    allow 10.1.1.0/16;</span></span>
<span class="line"><span>    allow 2001:0db8::/32;</span></span>
<span class="line"><span>    deny  all;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="请求头验证" tabindex="-1"><a class="header-anchor" href="#请求头验证"><span>请求头验证</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>valid_referers none blocked server_names</span></span>
<span class="line"><span>               *.example.com example.* www.example.org/galleries/</span></span>
<span class="line"><span>               ~\\.google\\.;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if ($invalid_referer) {</span></span>
<span class="line"><span>    return 403;</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="错误重定向" tabindex="-1"><a class="header-anchor" href="#错误重定向"><span>错误重定向</span></a></h3><div class="language-" data-highlighter="shiki" data-ext="" style="--shiki-light:#000000;--shiki-dark:#eef0f9;--shiki-light-bg:#FFFFFF;--shiki-dark-bg:#17191e;"><pre class="shiki shiki-themes light-plus houston vp-code"><code class="language-"><span class="line"><span>error_page 404             /404.html;</span></span>
<span class="line"><span>error_page 500 502 503 504 /50x.html;</span></span></code></pre></div>`,31)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};