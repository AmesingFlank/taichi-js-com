"use strict";(self.webpackChunktaichi_js_com=self.webpackChunktaichi_js_com||[]).push([[4251],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(f,r(r({ref:n},d),{},{components:t})):a.createElement(f,r({ref:n},d))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5582:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const o={sidebar_position:2,title:"Functions and Lambdas"},r=void 0,l={unversionedId:"docs/advanced/functions-and-lambdas",id:"docs/advanced/functions-and-lambdas",title:"Functions and Lambdas",description:"In taichi.js, each ti.kernel represents a sequence of GPU operations which can be invoked in Javascript code. In other words, a ti.kernel can be thought of a parallelized GPU functions, which can be invoked on the CPU. However, in order to write complex GPU kernels, you also want to have GPU functions that are callable in GPU scope. This doc page will discuss how to use functions and lambdas in taichi.js kernels.",source:"@site/docs/docs/2-advanced/2-functions-and-lambdas.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/functions-and-lambdas",permalink:"/docs/docs/advanced/functions-and-lambdas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docs/2-advanced/2-functions-and-lambdas.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Functions and Lambdas"},sidebar:"tutorialSidebar",previous:{title:"Atomics",permalink:"/docs/docs/advanced/atomics"},next:{title:"Templates",permalink:"/docs/docs/advanced/templates"}},s={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Argument Passing Semantics",id:"argument-passing-semantics",level:2},{value:"Consequences of Inlining",id:"consequences-of-inlining",level:2},{value:"ti.func",id:"tifunc",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),", each ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.kernel")," represents a sequence of GPU operations which can be invoked in Javascript code. In other words, a ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.kernel")," can be thought of a parallelized GPU functions, which can be invoked on the CPU. However, in order to write complex GPU kernels, you also want to have GPU functions that are callable in GPU scope. This doc page will discuss how to use functions and lambdas in ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," kernels."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"The simplest way to define a function is to directly define it in the kernel you want to use it in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  let addOne = ti.kernel((f) => {\n    function impl(arg) {\n      return arg + 1;\n    }\n    return impl(f);\n  });\n  console.log(await addOne(42)); // 43\n")),(0,i.kt)("p",null,"It is also recommened to use a lambda instead of a function, for cleaner syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  let addOne = ti.kernel((f) => {\n    let impl = arg => arg + 1\n    return impl(f);\n  });\n  console.log(await addOne(42)); // 43\n")),(0,i.kt)("p",null,"If you want to share a lambda/function among multiple kernels, you can define it as a normal Javascript function, and add it to kernel scope:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let addOneImpl = (x) => x + 1\nti.addToKernelScope({ addOneImpl })\nlet addOne = ti.kernel((x) => addOneImpl(x))\nlet addTwo = ti.kernel((x) => addOneImpl(addOneImpl(x)))\nconsole.log(await addOne(42)) // 43\nconsole.log(await addTwo(42)) // 44\n")),(0,i.kt)("p",null,"The beauty with this mechanism is that, not only it does it allow you to write shared logic for different kernels, it allows you to share that some logic in non-kernel Javascript code as well! "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(addOneImpl(42)) // normal JS code\n")),(0,i.kt)("h2",{id:"argument-passing-semantics"},"Argument Passing Semantics"),(0,i.kt)("p",null,"Functions and lambdas in ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," always use pass-by-reference semantics when possible, even for primitive types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  let k = ti.kernel(() => {\n    let f = (i) => {\n      i = i + 1;\n    };\n    let h = 42;\n    f(h);\n    return h;\n  });\n  console.log(await k()); // 43\n")),(0,i.kt)("p",null,"This is different from normal Javascript code"),(0,i.kt)("h2",{id:"consequences-of-inlining"},"Consequences of Inlining"),(0,i.kt)("p",null,"Functions in ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),' are implemented via "inlining". This means that ',(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," functions don't actually translate to functions in shaders. But rather, we expand the function logic in place at every call-site of the function. This has the following consequnces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each function can only have one return statement. For example, the following function is not allowed",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let f = (x) => {\n  if(x > 0) {\n      return 1;\n  }\n  else {\n      return -1\n  }\n}\n")),"instead, the function needs to be written as",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let f = (x) => {\n  let result = -1\n  if(x > 0) {\n      result = 1;\n  }\n  return result\n}\n")),"(Having multiple return statements is theoretically possible for inlined functions. But this requires some compiler trickery which ",(0,i.kt)("inlineCode",{parentName:"li"},"taichi.js")," does not have at the moment.) "),(0,i.kt)("li",{parentName:"ul"},"No support for recursion. ")),(0,i.kt)("p",null,'On the other hand, having inlined functions does allow some interesting syntaxes, which are not even available in WGSL, which is WebGPU\'s native shading language. As an example, due to inlining, you can have a function which accepts another function as argument (a.k.a. a "higher-order" function):'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let add = ti.kernel((i, j) => {\n    let apply = (f, x) => f(x);\n    return apply((x) => i + x, j);\n});\nconsole.log(await add(12, 13));\n")),(0,i.kt)("h2",{id:"tifunc"},"ti.func"),(0,i.kt)("p",null,"If you come from the world of the python ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/taichi-dev/taichi"},(0,i.kt)("inlineCode",{parentName:"a"},"taichi"))," library, you probably know that ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi")," has a ",(0,i.kt)("inlineCode",{parentName:"p"},"@ti.func")," decorator, which is required for any non-kernel function to be called in kernels. As you've learned in this page, in ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),", this is not needed, and kernels can call any Javascript function as long as it is in kernel scope. However, ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," still provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.func(..)")," function, which you can use to wrap a Javascript function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"let f = ti.field(ti.i32, 1000)\nlet addOne = ti.func((x) => x + 1)\nti.addToKernelScope({ f, addOne })\nlet k = ti.kernel(() => {\n    for(let i of ti.range(1000)){\n        f[i] = addOne(f[i])\n    }\n}) \n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.func()")," function does not do anything -- it returns whatever argument is passed to it. However, it is still beneficial to use it on the functions that will only be used in kernels, for the sake of explicitness. (In a later page, we will see a case where the ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.func()")," wrapper makes a significant difference, when ",(0,i.kt)("a",{parentName:"p",href:"https://taichi-js.com/docs/docs/production/minifier#rollup"},"working with minifiers"),")"))}u.isMDXComponent=!0}}]);