## 🎯 Playwright 学习大纲（面向找工作）
### 🟢 阶段 1：基础入门（1~2 周）

目标：能写出简单的 Web 自动化脚本 - ***Done 2025-Oct-12***

 - 环境搭建 - ***Done 2025-Oct-11***

     - ~~Node.js / npm 基础~~

     - ~~安装 Playwright (npm init playwright@latest)~~

***Note: use the config file to enable the trace view***

 - 基础操作 - ***Done 2025-Oct-12***

     - ~~打开浏览器、访问页面~~

     - ~~元素选择器（CSS、XPath、Text、Role）~~

     - ~~基本操作：click、fill、type、check、selectOption~~

 - 断言（Assertions）

     - ~~expect().toHaveText()~~

     - ~~expect().toBeVisible()~~

 - ~~录制脚本（Playwright Codegen）~~

~~✅ 输出成果：能写一个简单的脚本，比如自动登录一个 demo 网站并验证标题。~~

### 🟡 阶段 2：测试框架进阶（2~3 周）

目标：编写结构化、可维护的测试

 - Playwright Test Runner

     - test.describe、test.beforeEach、test.afterEach

     - test fixtures 的使用

 - 页面对象模式（POM）

     - 把元素定位和操作抽取到单独的 class

 - 跨浏览器测试（Chromium, Firefox, WebKit）

 - 并行测试 & 重试

 - 截图和视频录制

✅ 输出成果：用 POM 模式写一个电商网站的登录、搜索、下单的自动化回归测试。

### 🟠 阶段 3：高级应用（2~4 周）

目标：提升在面试中的竞争力

 - API 测试

     - Playwright 内置 request API

     - GET、POST、PUT、DELETE 测试

 - Mock / Intercept 请求

     - 模拟接口响应

     - 截获并修改请求/响应

 - 数据驱动测试（DDT）

     - 使用 JSON / CSV / Excel 数据源

 - 跨平台 / 移动端模拟

     - Emulate iPhone, Pixel 等

 - CI/CD 集成

     - GitHub Actions / GitLab CI / Jenkins

     - 在 pipeline 里运行自动化测试

✅ 输出成果：在 GitHub 上做一个项目，支持 Web + API 测试，并配置 GitHub Actions 自动跑测试。

### 🔵 阶段 4：企业级实践（2~3 周）

目标：接近新西兰本地公司招聘要求

 - BDD 集成

     - Cucumber + Playwright

 - 测试报告

     - Allure Report / HTML Reporter

 - Docker 化测试环境

     - 在容器里运行 Playwright

 - 与其他工具结合

     - Postman/Newman + Playwright（端到端测试）

     - Playwright + JMeter（性能 + 功能分层测试）

✅ 输出成果：一个完整的 端到端测试框架，可在 CI/CD、Docker 环境中运行，并生成测试报告。

## 📅 时间规划（大概）

 - 阶段 1：1~2 周

 - 阶段 2：2~3 周

 - 阶段 3：2~4 周

 - 阶段 4：2~3 周

👉 总计：2~3 个月（每天 1~2 小时学习 + 实践），你就能达到新西兰招聘中 “Automation QA with Playwright” 的要求。