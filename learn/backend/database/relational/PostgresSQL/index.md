---
url: /learn/backend/database/relational/PostgresSQL/index.md
---
PGSQL 已经成为了事实上的开源数据库「Goat」，超越了 MySQL，来自于加州大学伯克利分校的 Postgres 项目。在兼容性上，Postgres 已经做到了目前的最好。

> PostgreSQL 试图符合 SQL 标准 ，其中这种一致性不会与传统功能相矛盾，也可能导致糟糕的架构决策。支持 SQL 标准所需的许多功能，尽管有时语法或功能略有不同。随着时间的推移，预计会进一步实现一致性。截至 2023 年 9 月发布的版本 16，PostgreSQL 至少符合 SQL：2023 Core 一致性的 177 个强制性功能中的 170 个。在撰写本文时，没有关系数据库完全符合该标准。

安装方法参考：[Windows](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/windows/) [Debian12](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/linux_x86_64/postgresql_debian_12/)

PGSQL 是经典的 C/S 架构。服务器进程，用于管理数据库文件，接受来自客户端应用程序到数据库的连接，并代表客户端执行数据库作。数据库服务器程序称为 postgres。

用户想要执行数据库作的客户端（前端）应用程序。客户端应用程序本质上可以非常多样化：客户端可以是面向文本的工具、图形应用程序、访问数据库以显示网页的 Web 服务器或专门的数据库维护工具。一些客户端应用程序随 PostgreSQL 发行版一起提供;大多数是由用户开发的。

`select version()` 查看版本号；

创建 weather 和 cities 表

```sql
CREATE TABLE weather
(
    city    varchar(80),
    temp_lo int,  -- low temperature
    temp_hi int,  -- high temperature
    prcp    real, -- precipitation
    date    date
);

CREATE TABLE cities
(
    name     varchar(80),
    location point
);
```

常规 SQL 就不赘述了，熟能生巧的事。
