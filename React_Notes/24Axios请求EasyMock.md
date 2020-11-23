# [EasyMock新建一个接口](http://www.jspang.com/detailed?id=46#toc387)

> EasyMock网站:https://www.easy-mock.com/

然后你没注册需要注册一下，剩下的过程就看视频吧，因为这个都是些图形化的东西，我在视频中会详细讲解。

在创建接口时，写下如下代码：

```json
{
  "data": ['基础按摩', '躺式采耳', '中药泡脚']
}
```

然后在上节课的Axios代码部分，把请求改为`get`,然后预览，到控制台查看结果。

```javascript
componentDidMount(){
    axios.get('改为你自己的接口URL')
        .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
}
```

这时候你应该可以获得接口数据了，也说明我们的接口制作正常了，这就很类似我们项目中的真实接口了。

# [修改程序 变为动态接口](http://www.jspang.com/detailed?id=46#toc388)

在客户端已经得到了远程数据，那剩下的就是`setState`一下就可以了，代码如下：

```javascript
componentDidMount(){
    axios.get('xxxx')
        .then((res)=>{
            console.log('axios 获取数据成功:'+JSON.stringify(res))

            this.setState({
                list:res.data.data
            })
          })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
}
```

那这时候再浏览React程序，也是完全可以使用的，不过已经不是以前写死的东西，而是使用远端接口数据。

总结：我们这两节课只是让你简单的学会React远程请求接口的方法，以后会用实战给大家讲解这部分知识，这里只要做到有个基本认识就可以了。