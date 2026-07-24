# UI 原型代码

可点击 HTML 原型，对应：

- [客户端与管理端形态及 UI 原型要求](../docs/prd/10-客户端与管理端形态及UI原型要求.md)（若 docs 下路径不同，见本目录同名文档）
- [UI 原型实施规划](./2026-07-24-ui-prototype.md)
- 产品需求：`docs/prd/`

## 预览

直接用浏览器打开：

| 入口 | 文件 |
| --- | --- |
| 三端总入口 | [index.html](./index.html) |
| 用户小程序（390） | [mini/app.html](./mini/app.html) |
| 学校管理 Web | [school-admin/app.html](./school-admin/app.html) |
| 平台控制台 | [platform-console/app.html](./platform-console/app.html) |

也可在 `prototype/` 下起静态服务：

```bash
python3 -m http.server 5173
# 打开 http://127.0.0.1:5173/
```

## 演示数据

统一在 [assets/mock.js](./assets/mock.js)：西安邮电大学、林晓、AI 三态、失物/帖子/活动/闲置/会话、待整理队列、3 所学校实例等。

## 建议走查顺序

1. 用户端登录西安邮电大学 → 问「图书馆几点关门」
2. 问课程作业体验 → 草稿发帖
3. 学校管理整理求助 → 对照用户端「管理员已整理」（帖 p3）
4. 问「想收四六级耳机」→ 闲置 → 私信
5. 平台控制台查看/开通学校实例

## 说明

- 无真实登录 / 支付 / AI 接口
- 用户端模拟微信小程序导航与 TabBar
- 管理端为高信息密度中后台工具风
