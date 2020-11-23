# `Simple React Snippets`组件

这节课很短，但是我觉的有必要单独拿出一节来讲讲。在工作中你经常会看到程序老司机写代码是非常快的，甚至让你烟花缭乱，那他们真的是单身那么多年，练就了超级快手吗?当然不是，只是他们使用了快速生成插件，这节课我就向大家介绍一个`vscode`中的`Simple React Snippets`，有了这个插件，稍加练习，你也可以像老司机一样，拥有加藤鹰的圣手(如果不懂请自行搜索吧)。

打开`VSCode`的插件查单，然后在输入框中输入`Simple React Snippets`,然后点击进行安装就可以了。

# 快速进行引入`import`

直接在`vscode`中输入`imrc`，就会快速生成最常用的import代码。

```javascript
import React, { Component } from 'react';
```

# [快速生成class](https://jspang.com/detailed?id=46#toc349)

在作组件的时候，都需要写一个固定的基本格式，这时候你就可以使用快捷键`cc`.插件就会快速帮我们生成如下代码：

```javascript
class  extends Component {
    state = {  }
    render() { 
        return (  );
    }
}

export default ;
```

还有很多快捷键，我就没必要再这里唠叨了，如果你需要理解，打开插件的说明文件看一下就可以了。这个插件建议小伙伴们要熟练掌握，因为在老板眼里，代码编写速度的快慢直接跟我们的薪资有关，就是没什么关系。我们自己把时间剩下，去看小姐姐跳支舞不好吗?