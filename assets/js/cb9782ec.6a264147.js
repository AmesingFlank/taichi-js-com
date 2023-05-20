"use strict";(self.webpackChunktaichi_js_com=self.webpackChunktaichi_js_com||[]).push([[8733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,u=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(u,o(o({ref:t},h),{},{components:n})):a.createElement(u,o({ref:t},h))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,title:"Painless WebGPU Programming"},o="taichi.js: Painless WebGPU Programming",l={unversionedId:"articles/painless-webgpu-programming",id:"articles/painless-webgpu-programming",title:"Painless WebGPU Programming",description:"As a computer graphics and programming languages geek, I am delighted to have found myself working on several GPU compilers in the past 2 years. This began in 2021 when I started to contribute to taichi, a python library that compiles python functions into GPU kernels in CUDA, Metal, or Vulkan. Later on, I joined Meta and started worked on SparkSL, which is the shader language that powers cross-platform GPU programming for AR effects in Instagram and Facebook. Aside from personal pleasure, I have always believed, or at least hoped, that these frameworks are actually quite useful -- they make GPU programming more accessible to non-experts, empowering people to create fasnicating graphics contents without having to master complex GPU concepts.",source:"@site/docs/articles/1-painless-webgpu-programming.md",sourceDirName:"articles",slug:"/articles/painless-webgpu-programming",permalink:"/docs/articles/painless-webgpu-programming",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/articles/1-painless-webgpu-programming.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Painless WebGPU Programming"},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/docs/docs/basics/getting-started"}},s={},p=[{value:"The Game",id:"the-game",level:2},{value:"Simulation",id:"simulation",level:2},{value:"Rendering",id:"rendering",level:2},{value:"Exercises",id:"exercises",level:2},{value:"Resources",id:"resources",level:2}],h={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"taichijs-painless-webgpu-programming"},"taichi.js: Painless WebGPU Programming"),(0,i.kt)("p",null,"As a computer graphics and programming languages geek, I am delighted to have found myself working on several GPU compilers in the past 2 years. This began in 2021 when I started to contribute to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/taichi-dev/taichi"},(0,i.kt)("inlineCode",{parentName:"a"},"taichi")),", a python library that compiles python functions into GPU kernels in CUDA, Metal, or Vulkan. Later on, I joined Meta and started worked on ",(0,i.kt)("a",{parentName:"p",href:"https://sparkar.facebook.com/ar-studio/learn/sparksl/sparksl-overview/"},(0,i.kt)("inlineCode",{parentName:"a"},"SparkSL")),", which is the shader language that powers cross-platform GPU programming for AR effects in Instagram and Facebook. Aside from personal pleasure, I have always believed, or at least hoped, that these frameworks are actually quite useful -- they make GPU programming more accessible to non-experts, empowering people to create fasnicating graphics contents without having to master complex GPU concepts."),(0,i.kt)("p",null,"In my latest installment of compilers, I turned my eyes to WebGPU -- the next-generation graphics API for the web. WebGPU promises to bring high-perfrmance graphics via low CPU overhead and explicit GPU control, aligning with the trend started by Vulkan and D3D12 some 7 years ago. Just like Vulkan, the performance benefits of WebGPU comes at the cost of a steep learning curve. Although I'm confident that this won't stop talented programmers around the world from building amazing contents with WebGPU, I wanted to provide people with a way to play with WebGPU without having to confront its complexity. This is how ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," came to be. "),(0,i.kt)("p",null,"Under the ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," programming model, programmers don't have to reason about WebGPU concepts such as devices, command queues, bind groups, etc. Instead, they write plain Javascript functions, and the compiler translates those functions into WebGPU compute or render pipelines. This means that anyone can write WebGPU code via ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),", as long as they are familar with basic Javascript syntax. "),(0,i.kt)("p",null,"The remainder of this article will demonstrate the programming model of ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),' via a "Game of Life" program. As you will see, with less than 100 lines of code, we will create an fully parallel WebGPU program, containing 3 GPU compute pipelines plus a render pipeline. The full source code of the demo can be found ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/AmesingFlank/taichi.js/blob/master/examples/game-of-life/index.js"},"here"),", and if you want to play with the code without having to set-up any local environments, go to ",(0,i.kt)("a",{parentName:"p",href:"https://taichi-js.com/playground/game-of-life"},"this page"),". "),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"/game-of-life.gif"})),(0,i.kt)("h2",{id:"the-game"},"The Game"),(0,i.kt)("p",null,"The Game of Life is a classic example of a cellular automaton, a system of cells that evolve over time according to simple rules. It was invented by the mathematician John Conway in 1970 and has since become a favorite of computer scientists and mathematicians alike. The game is played on a two-dimensional grid, where each cell can be either alive or dead. The rules for the game are simple: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"if a living cell has fewer than two or more than three living neighbors, it dies"),(0,i.kt)("li",{parentName:"ul"},"if a dead cell has exactly three living neighbors, it becomes alive. ")),(0,i.kt)("p",null,'Despite its simplicity, the Game of Life can exhibit surprising behavior. Starting from any random initial state, the game often converges to a state where a few patterns are dominant, as if these are "species" which survived through evolution.'),(0,i.kt)("h2",{id:"simulation"},"Simulation"),(0,i.kt)("p",null,"Let's dive into the Game of Life implementation using ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),". To begin with, we import the ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," library under the shorthand ",(0,i.kt)("inlineCode",{parentName:"p"},"ti"),", and define an async ",(0,i.kt)("inlineCode",{parentName:"p"},"main()")," function which will contain all of our logic. Within ",(0,i.kt)("inlineCode",{parentName:"p"},"main()"),", we begin by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.init()"),", which initializes the library and its WebGPU contexts.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import * as ti from "path/to/taichi.js"\n\nlet main = async () => {\n    await ti.init();\n\n    ...\n};\n\nmain()\n')),(0,i.kt)("p",null,"Following ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.init()"),', let\'s define the data structures needed by the "Game of Life" simulation:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    let N = 128;\n\n    let liveness = ti.field(ti.i32, [N, N])\n    let numNeighbors = ti.field(ti.i32, [N, N])\n\n    ti.addToKernelScope({ N, liveness, numNeighbors });\n")),(0,i.kt)("p",null,"Here, we defined two variables, ",(0,i.kt)("inlineCode",{parentName:"p"},"liveness")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"numNeighbors"),", both of which are ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.field"),"s. In ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),', a "field" is essentially an n-dimensional array, whose dimensionality is provided in the 2nd argument to ',(0,i.kt)("inlineCode",{parentName:"p"},"ti.field()"),". The element type of the array is defined in the first argument. In this case, we have ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.i32"),", indicating 32-bit integters. However, field elements may also be other more compelx types, including vectors, matrices, and even structures."),(0,i.kt)("p",null,"The next line of code, ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.addToKernelScope({...})"),", ensures that the variables ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"liveness"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"numNeighbors")," are visible in ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),' "kernel"s, which are GPU compute and/or render pipelines, defined in the form of Javascript functions. As an example, the following ',(0,i.kt)("inlineCode",{parentName:"p"},"init")," kernel is used to populate our grid cells with initial liveness vales, where each cell has a 20% chance of being alive initially:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    let init = ti.kernel(() => {\n        for (let I of ti.ndrange(N, N)) {\n            liveness[I] = 0\n            let f = ti.random()\n            if (f < 0.2) {\n                liveness[I] = 1\n            }\n        }\n    })\n    init()\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," kernel is created by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.kernel()")," with a Javascript lambda as the argument. Under the hood, ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," will look at the Javascript string represenation of this lambda, and compile its logic into WebGPU code. Here, the lambda contains a ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"-loop, whose loop index ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," iterates through ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.ndrange(N, N)"),". This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"I")," will take ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),"x",(0,i.kt)("inlineCode",{parentName:"p"},"N")," different values, ranging from ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 0]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"[N-1, N-1]"),"."),(0,i.kt)("p",null,"Here comes the magical part -- in ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),", all the top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"-loops in the kernel will be parallelized. More specifically, for each possible value of the loop index, ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),' will allocate one WebGPU compute shader thread to execute it. In this case, we dedicate one GPU thread to each cell in our "Game of Life" simulation, initializing it to a random liveness state. The randomness comes from a ',(0,i.kt)("inlineCode",{parentName:"p"},"ti.random()")," function, which is one of the the many functions provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," library for kernel use. A full list of these built-in utilities is available ",(0,i.kt)("a",{parentName:"p",href:"https://taichi-js.com/docs/docs/basics/builtin-functions"},"here")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," documentation."),(0,i.kt)("p",null,"Having created the initial state of the game, let's move on to define how the game evolves. These are the two ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," kernels defining this evolution:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    let countNeighbors = ti.kernel(() => {\n        for (let I of ti.ndrange(N, N)) {\n            let neighbors = 0\n            for (let delta of ti.ndrange(3, 3)) {\n                let J = (I + delta - 1) % N\n                if ((J.x != I.x || J.y != I.y) && liveness[J] == 1) {\n                    neighbors = neighbors + 1;\n                }\n            }\n            numNeighbors[I] = neighbors\n        }\n    });\n    let updateLiveness = ti.kernel(() => {\n        for (let I of ti.ndrange(N, N)) {\n            let neighbors = numNeighbors[I]\n            if (liveness[I] == 1) {\n                if (neighbors < 2 || neighbors > 3) {\n                    liveness[I] = 0;\n                }\n            }\n            else {\n                if (neighbors == 3) {\n                    liveness[I] = 1;\n                }\n            }\n        }\n    })\n")),(0,i.kt)("p",null,"Same as the ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," kernel we saw before, these two kernels also have top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"for")," loops iterating over every grid cell, which are parallelized by the compiler. In ",(0,i.kt)("inlineCode",{parentName:"p"},"countNeighbors()"),', for each cell, we look at the 8 neighboring cells, and count how many of these neighbors are "alive". The amount of live neighbors are stored into the ',(0,i.kt)("inlineCode",{parentName:"p"},"numNeighbors")," field. Notice that when iterating through neighbors, the loop ",(0,i.kt)("inlineCode",{parentName:"p"},"for (let delta of ti.ndrange(3, 3)) {...}")," is not parallelized, because it is not a top-level loop.  The loop index ",(0,i.kt)("inlineCode",{parentName:"p"},"delta")," ranges from ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 0]")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"[2, 2]"),", and is used to offset the original cell index ",(0,i.kt)("inlineCode",{parentName:"p"},"I"),". We avoid out-of-bounds accesses by taking a modulo on ",(0,i.kt)("inlineCode",{parentName:"p"},"N"),". (For the topologically-inclined reader, this essentially means the game has toroidal boundary conditions)."),(0,i.kt)("p",null,"Having counted the amount of neighbors for each cell, we move on to update the their liveness states in the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateLiveness()")," kernel. This is simple matter of reading the liveness state of each cell and its current amount of live neighbors, and writing back a new liveness value according to the rules of the game. As usual, this process applies to all cells in parallel."),(0,i.kt)("p",null,"This essentially concludes the implementation of the game's simulation logic. Next up, we will see how to define a WebGPU render pipeline to draw the game's evolution onto a webpage."),(0,i.kt)("h2",{id:"rendering"},"Rendering"),(0,i.kt)("p",null,"Writing rendering code in ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," is slightly more involved than writing general-purpose compute kernels, and it does require some understanding of vertex shaders, fragment shaders, and rasterization pipelines in general. However, you will find that the simple programming model of ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," makes these concepts extremely easy to work with and reason about."),(0,i.kt)("p",null,"Before drawing anything, we need access to a piece of canvas that we are drawing onto. Assuming that a canvas named ",(0,i.kt)("inlineCode",{parentName:"p"},"result_canvas")," exists in the HTML, the following lines of code creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.CanvasTexture")," object, which represents a piece of texture that can be rendered onto by a ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," render pipeline. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    let htmlCanvas = document.getElementById('result_canvas');\n    htmlCanvas.width = 512;\n    htmlCanvas.height = 512;\n    let renderTarget = ti.canvasTexture(htmlCanvas);\n")),(0,i.kt)("p",null,"On our canvas, we will render a square, and we will draw the Game's 2D grid onto this square. In GPUs, geometries to be rendered are represented in the form of triangles. In this case, the square that we are trying to render will be represented as two triangles. These two triangles are defined in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.field"),", which store the coordiates of each of the 6 vertices of the 2 triangles:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    let vertices = ti.field(ti.types.vector(ti.f32, 2), [6]);\n    await vertices.fromArray([\n        [-1, -1],\n        [1, -1],\n        [-1, 1],\n        [1, -1],\n        [1, 1],\n        [-1, 1],\n    ]);\n")),(0,i.kt)("p",null,"As we did with the ",(0,i.kt)("inlineCode",{parentName:"p"},"liveness")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"numNeighbors")," fields, we need to explicitly declare the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderTarget")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vertices")," variables to be visible in GPU kernels in ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    ti.addToKernelScope({ vertices, renderTarget });\n")),(0,i.kt)("p",null,"Now we have all the data we need to implement our render pipeline. Here's the implementation of the pipeline itself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    let render = ti.kernel(() => {\n        ti.clearColor(renderTarget, [0.0, 0.0, 0.0, 1.0]);\n        for (let v of ti.inputVertices(vertices)) {\n            ti.outputPosition([v.x, v.y, 0.0, 1.0]);\n            ti.outputVertex(v);\n        }\n        for (let f of ti.inputFragments()) {\n            let coord = (f + 1) / 2.0;\n            let texelIndex = ti.i32(coord * (liveness.dimensions - 1));\n            let live = ti.f32(liveness[texelIndex]);\n            ti.outputColor(renderTarget, [live, live, live, 1.0]);\n        }\n    });\n")),(0,i.kt)("p",null,"Inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"render()")," kernel, we begin by clearing the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderTarget")," with an all-black color, represented in RGB as ",(0,i.kt)("inlineCode",{parentName:"p"},"[0.0, 0.0, 0.0, 1.0]"),". "),(0,i.kt)("p",null,"Next, we define two top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"for"),"-loops, which, as you already know, are loops that are parallelzed in WebGPU. However, unlike the previous loops where we iterate over ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.ndrange")," objects, these loops iterate over ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.inputVertices(vertices)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.inputFragments()"),', respectively. This indicates that these loops will be compiled into WebGPU "vertex shaders" and "fragment shaders", which work together as a render pipeline. '),(0,i.kt)("p",null,"The vertex shader has two responsibillities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'For each triangle vertex, compute its final location on the screen (or, more accurately, its "Clip Space" coordinates). In a 3D rendering pipeline, this will normally involve a bunch of matrix multiplications that transforms the vertex\'s model coordiantes into world space, and then into camera space, and then finally into "Clip Space". However, for our simple 2D square, the input coordinates of the vertices are already at their correct values in clip space, so we can avoid all of that. All we have to do is append a fixed ',(0,i.kt)("inlineCode",{parentName:"p"},"z")," value of 0.0, and a fixed ",(0,i.kt)("inlineCode",{parentName:"p"},"w")," value of ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0")," (don't worry if don't know what those are -- not important here!)."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"          ti.outputPosition([v.x, v.y, 0.0, 1.0]);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'For each vertex, generate data to be interpolated and then passed into the fragment shader. In a render pipeline, after the vertex shader is executed, a built-in process known as "Rasterization" is executed on all the triangles. This is a hardware-accelerated process which computes, for each triangle, which pixels are covered by this triangle. These pixels are also known as "fragments". For each triangle, the programmer is allowed to generate additional data at each of the 3 vertices, which will be interpolated during the rasterization stage. For each fragment in the pixel, its corresponding fragment shader thread will receive the interpolated values, according to its location within the triangle. '),(0,i.kt)("p",{parentName:"li"},"In our case, the fragment shader only needs to know the location of the fragment within the 2D square, so it can fetch the corresponding liveness values of the game. For this purpose, it suffices to pass the 2D vertex coordinate into the rasterizer, which means the fragment shader will receive the interpolated 2D location of the pixel itself:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"          ti.outputVertex(v);\n")))),(0,i.kt)("p",null,"Moving on to the fragment shader:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"        for (let f of ti.inputFragments()) {\n            let coord = (f + 1) / 2.0;\n            let cellIndex = ti.i32(coord * (liveness.dimensions - 1));\n            let live = ti.f32(liveness[cellIndex]);\n            ti.outputColor(renderTarget, [live, live, live, 1.0]);\n        }\n")),(0,i.kt)("p",null,"The value ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," is the interpolated pixel location passed-on from the vertex shader. Using this value, the fragment shader will look-up the liveness state of the cell in the game which covers this pixel. This is done by first converting the pixel coordinates ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," in to the ",(0,i.kt)("inlineCode",{parentName:"p"},"[0, 0] ~ [1, 1]")," range, and storing this coordinate into the ",(0,i.kt)("inlineCode",{parentName:"p"},"coord")," variable. This is then multiplied with the dimensions of the ",(0,i.kt)("inlineCode",{parentName:"p"},"liveness")," field, which produces the index of the covering cell. Finally, we fetch the ",(0,i.kt)("inlineCode",{parentName:"p"},"live")," value of this cell, which is 0 if it is dead, and 1 if it is alive. Finally, we output the RGBA value of this pixel onto the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderTarget"),", where the R,G,B compoents are all equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"live"),", and the A component is equal to 1, for full opacity."),(0,i.kt)("p",null,"With the render pipeline defined, all that's left is to put everything together by calling the simulation kernels and the render pipeline every frame:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    async function frame() {\n        countNeighbors()\n        updateLiveness()\n        await render();\n        requestAnimationFrame(frame);\n    }\n    await frame();\n")),(0,i.kt)("p",null,'And that\'s it! We have completed a WebGPU-based "Game of Life" implementation in ',(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),". If you run the program, you should see the following animation where 128x128 cells evolve for around 1400 generations before converging to a few species of stablized organisms. "),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"/game-of-life.gif"})),(0,i.kt)("h2",{id:"exercises"},"Exercises"),(0,i.kt)("p",null,"I hope you found this demo interesting! If you did, then I have a few extra exercises and questions that I invite you to experiment with and think about. (Btw, for quickly experimenting with the code, go to ",(0,i.kt)("a",{parentName:"p",href:"https://taichi-js.com/playground/game-of-life"},"this page"),")"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[Easy]"," Add a FPS counter to the demo! What FPS value can you obtain with the current setting where ",(0,i.kt)("inlineCode",{parentName:"p"},"N = 128"),"? Try increasing the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," and see how the framerate changes. Would you be able to write a vanilla Javascript program that obtains this framerate without ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," or WebGPU?")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[Medium]"," What would happen if we merge ",(0,i.kt)("inlineCode",{parentName:"p"},"updateLiveness()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"updateLiveness()")," into a single kernel, and keep the ",(0,i.kt)("inlineCode",{parentName:"p"},"neighbors")," counter as a local variable? Would the program still work correctly always? ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[Hard]"," In ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"ti.kernel(..)")," always produces an ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," function, regardless of whether it contains compute pipelines or render pipelines. If you have to guess, what is the meaning of this ",(0,i.kt)("inlineCode",{parentName:"p"},"async"),"-ness? And what is the meaning of calling ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," on these ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," calls? Finally, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"frame")," function defined above, why did we put ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," only for the ",(0,i.kt)("inlineCode",{parentName:"p"},"render()")," function, but not the other two?"))),(0,i.kt)("p",null,"The last 2 questions are especially interesting, as they touches onto the inner workings of the compiler and runtime of the ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," framework, as well as principles of GPU programming. Let me know your answer!"),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("p",null,"Of course, this Game of Life example only scratches the surface of what you can do with ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js"),". From real-time fluid simulations to physically based renderers, there are may other ",(0,i.kt)("inlineCode",{parentName:"p"},"taichi.js")," programs for you to play with, and even more for you to write yourself. For additional examples and learning resources, check out"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/AmesingFlank/taichi.js"},"Github page")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://taichi-js.com/docs/docs/basics/getting-started"},"Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://taichi-js.com/playground"},"Playground"))),(0,i.kt)("p",null,"Happy coding!"))}c.isMDXComponent=!0}}]);