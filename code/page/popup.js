/*
 * @Description: 移除复制限制
 * @Author: yiling (315800015@qq.com)
 * @Date: 2023-06-09 11:26:05
 * @LastEditors: yiling (315800015@qq.com)
 * @LastEditTime: 2023-06-25 00:01:53
 * @FilePath: \no-login-csdn-can-copy\code\page\popup.js
 */
window.onload = function() {
  createDom("script", '$("#content_views").unbind("copy")'); // 干掉复制时弹出的登录框
  createDom("style", "#content_views pre code, *{user-select:text!important}"); // 恢复代码块的复制

  // 给用户一个友好的提示 ↓↓↓
  createDom("style", "#toast{background:rgba(0,0,0,.8);color: #fff;padding:10px;text-align:center;display:inline-block;min-width:200px;border-radius:5px;position:fixed;top:20%;left:50%;transform:translateX(-50%);z-index:999999999999;}");
  createDom("div", "可以复制啦^o^", "toast");

  createDom("script", `const codeDom = document.querySelectorAll("pre>code");if (codeDom) {for (let i = 0; i < codeDom.length; i++) {const signinDom = codeDom[i].querySelector(".signin") || codeDom[i].parentNode.querySelector(".signin");;if (signinDom) {signinDom.setAttribute("data-title", "开始复制吧");if (signinDom.getAttribute("onclick")?.indexOf("hljs.signin") > -1) {signinDom.onclick = null;signinDom.addEventListener("click", function(event) {return hljs.copyCode(event);});}}codeDom[i].onclick = null;codeDom[i].addEventListener("click", function(event) {return mdcp.copyCode(event);});}}`);// 重置代码块的点击事件，实现未登录也可复制

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
