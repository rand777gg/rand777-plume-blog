---
url: /learn/backend/api/auth/JWT/index.md
---
JSON Web 令牌 （JWT） 是一种开放标准 （[RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)），它定义了一种紧凑且独立的方式，用于在各方之间安全地将信息作为 JSON 对象传输。此信息是经过数字签名的，因此可以验证和信任。JWT 可以使用密钥（使用 HMAC 算法）或使用 RSA 或 ECDSA 的公钥 / 私钥对进行签名。

尽管 JWT 可以加密以在各方之间提供保密性，但我们将重点关注签名令牌。签名令牌可以验证其中包含的声明的完整性 ，而加密令牌则对其他方隐藏这些声明。当使用公钥 / 私钥对对令牌进行签名时，签名还证明只有持有私钥的一方是签名者。

## 实操案例

### Node.js 实现 JWT

@[youtube](mbsmsi7l3r4)

VS Code Shell

初始化项目

```shell
mkdir auth-jwt-tutorial
npm init -y
```

安装 Express 框架、JWT 以及虚拟环境管理工具

```shell
npm i express jsonwebtoken dotenv
```

安装开发依赖，热重载 Node 的 nodemon

```shell
npm i --save-dev nodemon
```
