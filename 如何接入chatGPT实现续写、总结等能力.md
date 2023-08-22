## 1
编辑`/src/toolbars/HookCenter.js`文件，搜索`ChatGpt`关键词，将找到两处注释，将注释去掉，如下图 ：
1. ![image](https://github.com/Tencent/cherry-markdown/assets/998441/807eb49e-5cec-4cf1-8a69-3e41d10c462e)
2. ![image](https://github.com/Tencent/cherry-markdown/assets/998441/7e166ede-4faf-4699-aac8-993e1e85b2e3)

## 2
在实例化cherryMarkdown时传递openai的配置，如下图：
![image](https://github.com/Tencent/cherry-markdown/assets/998441/61d59c7e-b69d-4050-bdf9-ab2bfda4cb3f)

> 注：需要先购买chatGPT的apiKey

## 3
在实例化cherryMarkdown时，传递工具栏的配置，在工具栏里增加chatGPT的按钮，如下图：
![image](https://github.com/Tencent/cherry-markdown/assets/998441/af84232d-113c-4560-8ab1-6f09810f15de)

## 4
重新构建cherry（因为第一步修改了cherry的源码，所以需要重新构建）

- 本地开发环境构建命令：`npm run dev`
- 生产环境构建命令：`npm run build`

最终效果如下：

<img width="1006" alt="企业微信截图_16908003056964" src="https://github.com/Tencent/cherry-markdown/assets/998441/02f51164-3d5f-4423-8d0c-a23f7b421f69">
