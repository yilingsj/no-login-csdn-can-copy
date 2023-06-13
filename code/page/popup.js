/*
 * @Description: 移除复制限制
 * @Author: yiling (315800015@qq.com)
 * @Date: 2023-06-09 11:26:05
 * @LastEditors: yiling (315800015@qq.com)
 * @LastEditTime: 2023-06-09 14:07:47
 * @FilePath: \article\src\views\2023-06-09\[破解]某sdn复制限制v0.1\page\popup.js
 */
window.onload = function() {
  createDom("script", '$("#content_views").unbind("copy")'); // 干掉复制时弹出的登录框
  createDom("style", "#content_views pre code{user-select:text!important}"); // 恢复代码块的复制

  // 给用户一个友好的提示 ↓↓↓
  createDom("style","#toast{background:rgba(0,0,0,.8);color: #fff;padding:10px;text-align:center;display:inline-block;min-width:200px;border-radius:5px;position:fixed;top:20%;left:50%;transform:translateX(-50%);z-index:999999999999;}");
  createDom("div", "可以复制啦^o^", "toast");

  /**
   * @author: yiling (315800015@qq.com)
   * @description: 创建dom
   * @param {String} tagName dom元素名
   * @param {String} content 内容
   * @param {String} id id
   * @return {*}
   * @Date: 2023-06-09 13:43:05
   */
  function createDom(tagName, content, id) {
    const dom = document.createElement(tagName);
    dom.innerHTML = content;
    id && (dom.id = id);
    document.body.appendChild(dom);
  }

  setTimeout(() => {
    const toastDom = document.querySelector("#toast");
    toastDom && (toastDom.style.display = "none");
  }, 5000);
};
