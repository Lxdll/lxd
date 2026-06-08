---
title: "Hello Markdown Blog"
description: "用 Markdown 和 front matter 管理博客内容的第一篇示例文章。"
date: "2026-06-08"
category: "others"
tags:
  - Next.js
  - Markdown
  - Blog
---

这是第一篇示例博客。你可以在 `content/blog` 的分类文件夹里继续新增
`.md` 文件，`/blog` 路由会自动读取并展示它们。

## 写作方式

每篇文章顶部用 front matter 描述文章信息：

```yaml
---
title: "文章标题"
description: "文章摘要"
date: "2026-06-08"
category: "react"
tags:
  - TypeScript
  - Notes
---
```

分类目录和文件名会组成文章链接的 slug。例如
`content/blog/react/hooks.md` 会生成 `/blog/react/hooks`。
