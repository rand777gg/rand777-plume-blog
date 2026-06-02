---
url: /learn/backend/api/styles/REST/index.md
---
@[youtube](-mN3VyJuCjM)

* visit: <https://restapitutorial.com/>

REpresentational State Transfer, 即「表现层状态转移」，是一种软件架构风格，通常用于分布式系统中的网络应用程序设计。RESTful
API 是基于 REST 架构风格的 API，使用 HTTP 协议进行通信。

举个例子，使用 shell 命令 `curl` 访问 ITuns RESTful API：

```shell
curl -i 'https://itunes.apple.com/search?term=radiohead&media=music&limit=3'
```

或者本博客的 [访问统计](https://events.vercount.one/api/v2/log?url=http://blog.rand777.space)

返回了类似以下 JSON 响应：

```json
{
  "resultCount": 3,
  "results": [
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 657515,
      "collectionId": 1109714933,
      "trackId": 1109715066,
      "artistName": "Radiohead",
      "collectionName": "In Rainbows",
      "trackName": "15 Step",
      "collectionCensoredName": "In Rainbows",
      "trackCensoredName": "15 Step",
      "artistViewUrl": "https://music.apple.com/us/artist/radiohead/657515?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/15-step/1109714933?i=1109715066&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/15-step/1109714933?i=1109715066&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/af/72/85/af728523-8048-4a8b-9e13-e8f4f64e9d69/mzaf_8205306206851675436.plus.aac.p.m4a",
      "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/30x30bb.jpg",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "2007-10-10T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 10,
      "trackNumber": 1,
      "trackTimeMillis": 237293,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Alternative",
      "isStreamable": true
    },
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 657515,
      "collectionId": 1109714933,
      "trackId": 1109715161,
      "artistName": "Radiohead",
      "collectionName": "In Rainbows",
      "trackName": "Bodysnatchers",
      "collectionCensoredName": "In Rainbows",
      "trackCensoredName": "Bodysnatchers",
      "artistViewUrl": "https://music.apple.com/us/artist/radiohead/657515?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/bodysnatchers/1109714933?i=1109715161&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/bodysnatchers/1109714933?i=1109715161&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ba/e4/ac/bae4ac59-3bfa-e4b9-4f4c-03f667324fc0/mzaf_14837742185575446625.plus.aac.p.m4a",
      "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/30x30bb.jpg",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "2007-10-10T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 10,
      "trackNumber": 2,
      "trackTimeMillis": 242293,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Alternative",
      "isStreamable": true
    },
    {
      "wrapperType": "track",
      "kind": "song",
      "artistId": 657515,
      "collectionId": 1109714933,
      "trackId": 1109715168,
      "artistName": "Radiohead",
      "collectionName": "In Rainbows",
      "trackName": "Weird Fishes / Arpeggi",
      "collectionCensoredName": "In Rainbows",
      "trackCensoredName": "Weird Fishes / Arpeggi",
      "artistViewUrl": "https://music.apple.com/us/artist/radiohead/657515?uo=4",
      "collectionViewUrl": "https://music.apple.com/us/album/weird-fishes-arpeggi/1109714933?i=1109715168&uo=4",
      "trackViewUrl": "https://music.apple.com/us/album/weird-fishes-arpeggi/1109714933?i=1109715168&uo=4",
      "previewUrl": "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/6c/e9/79/6ce9792e-c06a-b49b-6efe-60b96a690af8/mzaf_5478326228427438939.plus.aac.p.m4a",
      "artworkUrl30": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/30x30bb.jpg",
      "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/60x60bb.jpg",
      "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/9a/4f/8a/9a4f8a4b-0254-d5ab-74b5-ebe39bbbe85d/634904032463.png/100x100bb.jpg",
      "collectionPrice": 9.99,
      "trackPrice": 1.29,
      "releaseDate": "2007-10-10T07:00:00Z",
      "collectionExplicitness": "notExplicit",
      "trackExplicitness": "notExplicit",
      "discCount": 1,
      "discNumber": 1,
      "trackCount": 10,
      "trackNumber": 4,
      "trackTimeMillis": 318187,
      "country": "USA",
      "currency": "USD",
      "primaryGenreName": "Alternative",
      "isStreamable": true
    }
  ]
}
```

## 六大约束

REST 架构风格描述了六个约束条件。

### 1 统一接口

统一接口约束定义了客户端与服务器之间的接口。它简化并解耦架构，使每个部分能够独立演进。统一接口的四个指导原则是：

1. 基于资源的：在请求中，使用 *URI* 作为资源标识符来识别单个资源。资源本身在概念上与返回给客户的表示是分开的。例如，服务器不发送数据库，而是发送一些
   HTML、XML 或 JSON，这些记录代表某些数据库记录，例如用芬兰语表达并以 UTF-8 编码，具体取决于请求细节和服务器实现。
2. 通过表征作资源: 当客户端持有资源表示，包括附加的任何元数据时，只要有权限，它就拥有足够的信息修改或删除服务器上的资源。
3. 自我描述信息: 每条消息都包含足够的信息来描述如何处理该消息。例如，调用哪个解析器可以通过互联网媒体类型（以前称为
   MIME 类型）来指定。响应也会明确表示其可缓存性。
4. 超媒体作为应用状态引擎：客户端通过正文内容、查询字符串参数、请求头部和请求的
   URI（资源名称）传递状态。服务通过正文内容、响应代码和响应头向客户端传递状态。这在技术上被称为超媒体（或超文本中的超链接）。

### 2 无状态

由于 REST 是再表述状态转移（REpresentational State
Transfer）的缩写，无状态性是关键。本质上，这意味着处理请求所需的状态包含在请求本身，无论是作为
URI、查询字符串参数、正文还是头部的一部分。URI
唯一标识资源，主体包含该资源的状态（或状态变化）。然后，在服务器完成处理后，适当的状态或重要的状态片段会通过头部、状态和响应正体传回给客户端。

### 3 可缓存

与万维网一样，客户端可以缓存响应。因此，响应必须隐式或显式地定义自己是否可缓存，以防止客户端在响应进一步请求时重复使用过时或不合适的数据。良好管理的缓存部分或完全消除部分客户端 -
服务器交互，进一步提升可扩展性和性能。

### 4 客户端 - 服务器分离

统一的接口将客户端与服务器分开。这种关注点的分离意味着，例如客户端无需关注数据存储，数据存储仍存储在每个服务器内部，从而提升客户端代码的可移植性。服务器不关心用户界面或用户状态，因此服务器可以更简单、更具可扩展性。服务器和客户端也可以被替换和独立开发，只要接口不被更改。

### 5 分层系统

客户端通常无法判断自己是直接连接到终端服务器，还是连接到途中的中介。中介服务器可以通过支持负载均衡和提供共享缓存来提升系统可扩展性。层级也可以强制执行安全策略。

### 6 按需代码（可选）

服务器可以通过传输可执行的逻辑来临时扩展或定制客户端的功能。例如编译组件如 Java 小程序和客户端脚本如
JavaScript。

## REST 快速入门

### HTTP Methods

API 使用者能够发送 GET、POST、PUT、PATCH 和 DELETE 方法（或动词），这大大提升了请求的清晰度。因此，建议 URL
中不出现动词（动作词）。相反，利用 HTTP 方法来提供动词。

通常，五种主要的 HTTP 方法如下：

| 方法     | 描述                                                 |
|--------|----------------------------------------------------|
| GET    | 通过标识符读取特定资源或资源集合。                                  |
| PUT    | 用标识符替换特定资源或资源集合。如果资源标识符事先已知，也可以用于创建特定资源。           |
| PATCH  | 通过标识符更新特定资源或资源集合。这在某种程度上可以看作是“部分更新”，而替换则是 PUT 执行的。 |
| DELETE | 通过标识符移除 / 删除特定资源。                                  |
| POST   | 创建一个新的资源。也是一个涵盖不属于其他类别的作的通用动词。                     |

### 取个好名字

制作一个优秀的 API 需要 80% 的艺术和 20% 的科学。创建代表合理资源的 URL 层级是艺术部分。拥有合理的资源名称（即
URL 路径，如 /customers/12345/orders）能提高对请求功能的清晰度。由于人类参与理解 API，这种清晰度非常重要。

以下是一些命名资源的建议：

* 在你的 URL 中使用标识符，而不是在查询字符串中。使用 URL 查询字符串参数对过滤非常有效，但用于资源名称就不行。
  * Good: /users/12345
  * Poor: /api?type=user\&id=23
* 利用 URL 的层级性质来暗示结构。
* 设计是为客户而非数据。
* 资源名称应为名词。避免将动词作为资源名称，以提高清晰度。使用 HTTP 方法指定请求中的动词部分。
* 在 URL 段中使用复数，以保持所有 HTTP 方法中 API URI 的一致性，使用集合的比喻。
  * Recommended: /customers/33245/orders/8769/lineitems/1
  * Not: /customer/33245/order/8769/lineitem/1
* 避免在 URL 中使用集合式的措辞。比如用“customer\_list”作为资源。使用复数表示集合隐喻（例如客户与
  customer\_list）。
* 在 URL 段中使用小写字母，用下划线 ('\_') 或连字符（'-'）分隔单词。有些服务器会忽略大写，所以最好说清楚。
* 尽量保持网址简短，尽可能少的分段。

### HTTP Status Codes

响应状态码是 HTTP 规范的一部分。针对最常见的情况，有相当多的选择。为了让我们的 RESTful 服务拥抱 HTTP
规范，我们的 Web API 应返回相关的 HTTP 状态码。例如，当资源成功创建（例如通过 POST 请求）时，API 应返回
HTTP 状态码 201。这里提供了一份有效的 HTTP 状态码列表，详细描述了每个代码。

“Top 10” HTTP 响应状态码的建议用法如下：

| 状态码                       | 描述                                                                                                                                                        |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| 200 OK                    | 通用成功状态代码。这是最常见的代码。用来表示成功。                                                                                                                                 |
| 201 CREATED               | 成功创建（通过 POST 或 PUT）。将位置头设置为包含指向新创建资源的链接（在 POST 上）。回应正文内容可能存在也可能不存在。                                                                                       |
| 204 NO CONTENT            | 表示成功，但响应正体中没有任何内容，通常用于删除和执行。                                                                                                                              |
| 400 BAD REQUEST           | 当满足请求时，会出现无效状态的通用错误。域名验证错误、缺失数据等是一些例子。                                                                                                                    |
| 401 UNAUTHORIZED          | 因缺少或无效认证令牌而出现错误代码响应。                                                                                                                                      |
| 403 FORBIDDEN             | 当用户未被授权执行作或资源因时间限制等原因不可用时，错误代码。                                                                                                                           |
| 404 NOT FOUND             | 当请求的资源未被找到时，无论该资源不存在，还是存在 401 或 403，出于安全原因服务想要隐藏。                                                                                                         |
| 405 METHOD NOT ALLOWED    | 用于表示请求的 URL 存在，但请求的 HTTP 方法不适用。例如，POST /users/12345，API 不支持以这种方式创建资源（并提供 ID）。返回 405 时必须设置 Allow HTTP 头，以表示支持的 HTTP 方法。在之前的情况中，头部看起来像“允许：GET， PUT， DELETE” |
| 409 CONFLICT              | 每当满足请求时会引发资源冲突。重复条目，比如尝试创建两个拥有相同信息的客户，以及在不支持级联删除时删除根对象，都是例子。                                                                                              |
| 500 INTERNAL SERVER ERROR | 服务器端抛出异常时的通用错误。                                                                                                                                           |

### JSON 优先

除非你所在的行业高度标准化且受监管，需要 XML、模式验证和命名空间，否则建议优先支持 JSON。如果必须同时提供
JSON 和 XML，允许用户使用 HTTP Accept 头在格式间切换：`application/json` 或 `application/xml`。

### 小而美

刚开始时，最好创建模拟系统底层应用域或数据库架构的
API。最终，你会需要利用多种底层资源来减少聊天的聚合服务。然而，从单个资源中以后创造更大资源要比从较大聚合中创造细粒度或单个资源要容易得多。让自己轻松点，从小而易定义的资源开始，并在这些资源上提供
CRUD 功能。你可以以后创建那些以用例为导向、减少聊天内容的资源。

## HTTP Methods in Practice

### POST

POST 动词最常用于创建新的资源。特别是用来创建从属资源。也就是说，它从属于其他（例如父）资源。换句话说，创建新资源时，POST
给父资源，服务负责将新资源与父资源关联，分配 ID（新资源 URI）等。

成功创建后，返回 HTTP 状态 201，返回一个位置头部，并返回指向新创建资源的链接，该资源为 201 HTTP 状态。

POST 既不安全，也不等于幂等。因此，推荐用于非幂零资源请求。发送两个相同的 POST 请求，很可能会得到两个包含相同信息的资源。

### GET

HTTP GET 方法用于读取 （或检索）资源的表示。在“满意”（或非错误）路径中，GET 返回 XML 或 JSON 表示和 HTTP
响应码 200（OK）。在错误情况下，通常返回 404（未找到）或 400（错误请求）。

根据 HTTP 规范的设计，GET 请求（以及
HEAD）仅用于读取数据，不能更改数据。因此，以这种方式使用时，它们被认为是安全的。也就是说，调用它们时不会有数据篡改或损坏的风险——调用一次的效果等同于调用
10 次，甚至完全不调用。此外，GET 和 HEAD 是幂冪等的，这意味着多次发送相同请求的结果与单一请求相同。

不要通过 GET 暴露不安全的操作——它绝不应修改服务器上的任何资源。

### PUT

PUT 最常用于更新功能，即对已知资源 URI 进行 PUT，请求体包含原始资源的新更新表示。

然而，在资源 ID 由客户端选择而非服务器时，PUT 也可用于创建资源。换句话说，如果 PUT 是指向包含不存在资源
ID 值的 URI。同样，请求体包含资源表示。许多人觉得这很复杂且让人困惑。因此，这种创作方法应当谨慎使用，甚至根本不使用。

或者，使用 POST 创建新资源，并在正文表示中提供客户端定义的 ID——大概是给不包含资源 ID 的 URI（见上文
POST）。

成功更新后，从 PUT 返回 200（若不返回正文内容则返回 204）。如果使用 PUT 创建，成功创建时返回 HTTP 状态
201。响应中的正体是可选的——前提是其中一个会消耗更多带宽。在创建情况下，无需通过 Location
头返回链接，因为客户端已经设置了资源 ID。

PUT 不是一个安全的操作，因为它修改（或创建）服务器上的状态，但它是幂等的。换句话说，如果你用 PUT
创建或更新一个资源，然后再次调用同样的调用，资源依然存在，状态和第一次调用时一样。

例如，如果调用资源上的 PUT 会递增资源中的计数器，那么该调用不再是幂等的。有时确实会发生这种情况，这可能就足以证明该呼声不是幂级的。不过，建议将
PUT 请求保持幂等。强烈建议非幂等元请求使用 POST。

### PATCH

PATCH 用于修改功能。PATCH 请求只需包含资源的变更，而不必包含完整的资源。

这类似于 PUT，但主体包含一组指令，描述当前服务器上的资源应如何修改以生成新版本。这意味着 PATCH
主体不应仅仅是资源的修改部分，而是应以某种补丁语言形式存在，如 JSON Patch 或 XML Patch。

PATCH 既不安全，也不等于幂律。然而，PATCH 请求可以以幂等的方式发出，这也有助于防止同一资源上在相似时间内发生两次
PATCH 请求碰撞的不良结果。多重 PATCH 请求的碰撞可能比 PUT
碰撞更危险，因为某些补丁格式必须从已知基点运行，否则会破坏资源。使用此类补丁应用的客户端应使用条件请求，使得如果资源自客户端上次访问以来已被更新，请求将失败。例如，客户端可以在
PATCH 请求的 If-Match 头中使用强 ETag。

### DELETE

DELETE 其实很容易理解。它用于删除由 URI 识别的资源。

成功删除后，返回 HTTP status 200（OK），并返回响应正体，可能是已删除项的表示（通常带宽过大），或是包裹响应（见下文返回值）。要么返回
HTTP 状态 204（无内容），且没有响应正体。换句话说，推荐的响应是无正体的 204 状态，或者 JSEND 风格的响应和
HTTP 状态 200。

从 HTTP 规范角度看，DELETE 作是幂等的。如果你删除了一个资源，它就会被移除。反复调用该资源的 DELETE
结果也是一样：资源消失了。如果调用 DELETE 时，比如在资源中递减计数器，则 DELETE
调用不再是幂等元。如前所述，使用统计和测量数据可以更新，同时仍视服务为幂级，只要资源数据不被更改。建议对非幂零资源请求使用
POST。

不过，关于删除幂等性有一个警告。第二次调用资源的 DELETE 通常会返回
404（未找到），因为该资源已被移除，因此无法再被查找。据某些观点，这使得 DELETE 作不再是幂等的，但资源的终极状态是相同的。退回
404 是可以接受的，并且准确传达了通话状态。

## 怎么取个好名字

Inspirations could be found
at: <https://restapitutorial.com/introduction/resourcenaming>

## 啊？幂等？

幂等性是一个有趣的词，常常吸引人。幂等性有时是一个令人困惑的概念，至少从学术定义来看是这样。

从 RESTful
服务的角度来看，为了使作（或服务调用）成为幂零，客户端可以反复执行相同调用，同时产生相同的结果。换句话说，发送多个相同的请求与发送单一请求的效果相同。注意，虽然幂等等作在服务器上产生相同结果（无副作用），但响应本身可能不同（例如资源状态在请求间可能发生变化）。

PUT 和 DELETE 方法被定义为幂等。不过，删除有个警告。DELETE 的问题是，如果成功，通常会返回 200（OK）或
204（无内容），但后续调用时往往会返回
404（未找到），除非服务配置为“标记”删除资源但未实际删除。然而，当服务实际删除该资源时，下一次调用找不到该资源来删除它，也不会返回
404。然而，每次 DELETE 调用后服务器上的状态是相同的，但响应不同。

> 确保 PUT 和 DELETE HTTP 方法的 API 实现保持幂等性。

GET、HEAD、OPTIONS 和 TRACE 方法被定义为安全 ，意味着它们仅用于检索数据（因此不修改数据）。这也使它们成为幂零的，因为多个相同的请求会表现相同。

## 安全

HTTP 规范中将安全性定义为一种不修改服务器资源的方法。当客户端使用安全方法发出请求时，服务器不应产生任何副作用。被认为“安全”的
HTTP 方法包括 GET、HEAD、OPTIONS 和 TRACE。

使用安全方法的关键好处是它们可缓存且幂零。 特别是 GET 请求可以通过缓存来提升性能。这意味着多个相同的
GET 请求应该会返回相同的响应。安全方法也是幂等方法，意味着多次发送同一请求在服务器端会产生相同的结果。

对于 API 和 Web 服务，尽量使用安全方法是最佳实践。例如，GET 应用于检索资源，OPTIONS 可用于检索元数据，等等。不安全的方法如
POST、PUT、PATCH 和 DELETE 会修改数据，因此不可缓存或幂零 。

保持方法安全有助于提升网络服务的可扩展性、缓存和整体可靠性。它还防止客户端多次意外发送非幂等请求所带来的意外后果。采用主要安全方法设计的
API 更容易缓存和横向扩展。

总之，安全的 HTTP 方法避免修改服务器状态，这带来了幂等和可缓存性等好处。正确使用安全方法是 API
设计的重要方面。它提升了性能、可扩展性，并防止客户端非幂等元请求的问题。

## Dive Deeper

### 重试 Retry

部分 HTTP 状态码表示暂时性问题，可能随着时间解决，因此非常适合调用客户端自动重试。实现这些重试可以增强分布式
API 系统的韧性和可靠性。

应触发自动重试的 HTTP 状态码包括：

* 408（Request Timeout）： 服务器回复太慢了。重试可能会有帮助。
* 429（Too Many Requests）： 表示速率限制。在 Retry-After 头中指定的延迟后重试。
* 500（Internal Server Error）： 服务器端的问题可能会自行解决。重试是可选的。
* 502 (Bad Gateway)： 这表明可能是暂时的网络问题或服务栈中断，可能会自我纠正。
* 503 (Service Unavailable): 可能是由于临时服务中断或正在进行的部署。
* 504 (Gateway Timeout): 下游服务器（例如 DNS）未能及时响应。重试可能解决问题。

对这些状态码实现重试（理想情况下是指数回撤和重试限制）可以提升应用程序处理网络卡顿和临时服务器错误的能力。代价是额外的延迟。API
网关和堆栈的其他元素可能会限制客户端等待的时间。

### No Retry

部分 HTTP 状态码代表永久性错误或客户端问题，自动重试无法解决。在这种情况下，自动重试请求会导致不必要的资源消耗，甚至使情况更糟。这些包括：

* 400 (Bad Request): 客户发送了一个无效的请求。在再次尝试之前，先修复请求中的问题。
* 401 (Unauthorized): 认证是必需的，否则不通过。在再次尝试之前先修复认证问题（例如重新获得一个新的令牌）。
* 403 (Forbidden):  客户端没有权限访问该资源。重试不会改变服务器的响应。先修复授权问题，比如先获得带有额外范围的新令牌再尝试。
* 404 (Not Found): 请求的资源不存在。除非资源因后台处理而变得可用 ，否则重试不会成功。
* 405 (Method Not Allowed): 所用的 HTTP 方法不被支持。用同样的方法重试也解决不了问题。
* 409 (Conflict): 表示请求存在冲突，例如对引用完整性的唯一约束。如果不解决冲突问题就重试，结果会继续失败。
* 422 (Unprocessable Entity): 服务器理解请求，但因语义错误无法处理。在再次尝试之前，先修复请求中的问题。

对于这些状态代码，客户端需要在重新尝试请求前进行调整或更正。
