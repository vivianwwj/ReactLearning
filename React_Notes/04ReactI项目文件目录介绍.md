- # [项目根目录中的文件](https://jspang.com/detailed?id=46#toc317)

  先从进入项目根目录说起，也就是第一眼看到的文件(版本不同，可能稍有不同)

  - **README.md** :这个文件主要作用就是对项目的说明，已经默认写好了一些东西，你可以简单看看。如果是工作中，你可以把文件中的内容删除，自己来写这个文件，编写这个文件可以使用`Markdown`的语法来编写。

    

  - **package.json**: 这个文件是`webpack`配置和项目包管理文件，项目中依赖的==第三方包==（包的版本）和一些常用命令配置都在这个里边进行配置，当然脚手架已经为我们配置了一些了，目前位置，我们不需要改动。如果你对==webpack==了解，对这个一定也很熟悉。

  比如其中的

  ```json
  "dependencies": {
      "@testing-library/jest-dom": "^5.11.6",
      "@testing-library/react": "^11.1.2",
      "@testing-library/user-event": "^12.2.2",
      "react": "^17.0.1",
      "react-dom": "^17.0.1",
      "react-scripts": "4.0.0",
      "web-vitals": "^0.2.4"
    }
  ```

  项目运行等的

  npm start 可以跑起来程序

  ``` json
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
  ```

  

  ```python 
  #下面的在项目中很少配置
  ```

  - **package-lock.json**：这个文件用一句话来解释，就是锁定安装时的版本号，并且需要上传到git，以==保证其他人再`npm install` 时大家的依赖能保证一致==。

    

  - **gitignore** : 这个是git的选择性上传的配置文件，比如一会要介绍的`node_modules`文件夹，就需要配置不上传。

  - **node_modules** :这个文件夹就是我们项目的依赖包，到目前位置，脚手架已经都给我们下载好了，你不需要单独安装什么。

  - **public** ：公共文件，里边有公用模板和图标等一些东西。

  - **src** ： 主要代码编写文件，这个文件夹里的文件对我们来说最重要，都需要我们掌握。

  # [public文件夹介绍](https://jspang.com/detailed?id=46#toc318)

  这个文件都是一些项目使用的公共文件，也就是说都是共用的，我们就具体看一下有那些文件吧。

  - **favicon.ico** : 这个是网站或者说项目的图标，一般在浏览器标签页的左上角显示。
  - **index.html** : 首页的模板文件，我们可以试着改动一下，就能看到结果。
  - **mainifest.json**：移动端配置文件，这个会在以后的课程中详细讲解。

  # [src文件夹介绍](https://jspang.com/detailed?id=46#toc319)

  这个目录里边放的是我们开放的源代码，我们平时操作做最多的目录。

  - **index.js** : 这个就是项目的入口文件，视频中我们会简单的看一下这个文件。
  - **index.css** ：这个是`index.js`里的CSS文件。
  - **app.js** : 这个文件相当于一个方法模块，也是一个简单的模块化编程。
  - **serviceWorker.js**: 这个是用于写移动端开发的，PWA必须用到这个文件，有了这个文件，就相当于有了离线浏览的功能。

  总结:建议你这节课要看视频进行学习，视频会讲的详细一点，而且更有层次，看文章你可能学不会。

  

index.js分析

```js
//引入react
import React from 'react';

//用来写DOM
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App.js' js可以省略
import App from './App';

//import reportWebVitals from './reportWebVitals';PWA是谷歌提出的标准，设置的是首次网页加载需要网络，再次加载不需要网络
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

App.js分析

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

==react的特性是：js中很容易写出html==

