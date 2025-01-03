## 简单例子

```javascript
new Cherry({
    id: 'markdown-container', 
    value: '## hello world', 
    callback: {
        /**
        * 全局的URL处理器
        * @param {string} url 来源url
        * @param {'image'|'audio'|'video'|'autolink'|'link'} srcType 来源类型
        * @param {function} callback 回调函数
        * @returns
        */
        urlProcessor: (url, srcType) => url,
    }
});
```

在这个例子中，我们在`callback`中定义了`urlProcessor`，当`markdown`中存在图片、音频、视频、自动链接、链接时，会调用`urlProcessor`进行处理。

## 异步例子

```javascript
new Cherry({
    id: 'markdown-container', 
    value: '## hello world', 
    callback: {
        /**
        * 全局的URL处理器
        * @param {string} url 来源url
        * @param {'image'|'audio'|'video'|'autolink'|'link'} srcType 来源类型
        * @param {function} callback 回调函数
        * @returns
        */
        urlProcessor: (url, srcType, callback) => {
            setTimeout(() => {
                callback(`https://${url}`);
            }, 1000);
        },
    }
});
```

## 典型场景

1. 将图片、音频、视频资源上传到服务器，并返回新的url
2. 对所有超链接追加类似'?from=xxx'的后缀，用于统计来源
3. 将图片URL替换为压缩后的URL，以节省流量（搭配`cherry.previewer.lazyLoadImg`的配置一起食用效果更好）

## 动态配置

参见[事件&回调](https://github.com/Tencent/cherry-markdown/wiki/%E4%BA%8B%E4%BB%B6%26%E5%9B%9E%E8%B0%83#urlprocessor-%E8%A7%A3%E6%9E%90url)