"use strict";(self.webpackChunktaichi_js_com=self.webpackChunktaichi_js_com||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"Articles","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Painless WebGPU Programming","href":"/docs/articles/painless-webgpu-programming","docId":"articles/painless-webgpu-programming"}]},{"type":"category","label":"Documentation","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Basics","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting Started","href":"/docs/docs/basics/getting-started","docId":"docs/basics/getting-started"},{"type":"link","label":"Kernels","href":"/docs/docs/basics/kernels","docId":"docs/basics/kernels"},{"type":"link","label":"Type System","href":"/docs/docs/basics/type-system","docId":"docs/basics/type-system"},{"type":"link","label":"Fields","href":"/docs/docs/basics/fields","docId":"docs/basics/fields"},{"type":"link","label":"Kernel-Scope Built-in Functions","href":"/docs/docs/basics/kernel-scope-builtin-functions","docId":"docs/basics/kernel-scope-builtin-functions"},{"type":"link","label":"Kernel-Scope Code Semantics","href":"/docs/docs/basics/kernel-scope-code-semantics","docId":"docs/basics/kernel-scope-code-semantics"}]},{"type":"category","label":"Advanced Programming","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Atomics","href":"/docs/docs/advanced/atomics","docId":"docs/advanced/atomics"},{"type":"link","label":"Functions and Lambdas","href":"/docs/docs/advanced/functions-and-lambdas","docId":"docs/advanced/functions-and-lambdas"},{"type":"link","label":"Templates","href":"/docs/docs/advanced/templates","docId":"docs/advanced/templates"},{"type":"link","label":"Compile-Time Control Flow","href":"/docs/docs/advanced/compile-time-control-flow","docId":"docs/advanced/compile-time-control-flow"},{"type":"link","label":"Class Kernels","href":"/docs/docs/advanced/class-kernels","docId":"docs/advanced/class-kernels"}]},{"type":"category","label":"Rendering","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Render Pipelines","href":"/docs/docs/rendering/render-pipelines","docId":"docs/rendering/render-pipelines"},{"type":"link","label":"Textures","href":"/docs/docs/rendering/textures","docId":"docs/rendering/textures"},{"type":"link","label":"Rendering Built-in Functions","href":"/docs/docs/rendering/rendering-builtin-functions","docId":"docs/rendering/rendering-builtin-functions"},{"type":"link","label":"GLTF","href":"/docs/docs/rendering/GLTF","docId":"docs/rendering/GLTF"}]},{"type":"category","label":"Working in Production","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Using taichi.js with Minifiers","href":"/docs/docs/production/minifier","docId":"docs/production/minifier"},{"type":"link","label":"Using taichi.js with Typescript","href":"/docs/docs/production/typescript","docId":"docs/production/typescript"}]}]}]},"docs":{"articles/painless-webgpu-programming":{"id":"articles/painless-webgpu-programming","title":"Painless WebGPU Programming","description":"As a computer graphics and programming languages geek, I am delighted to have found myself working on several GPU compilers in the past 2 years. This began in 2021 when I started to contribute to taichi, a python library that compiles python functions into GPU kernels in CUDA, Metal, or Vulkan. Later on, I joined Meta and started worked on SparkSL, which is the shader language that powers cross-platform GPU programming for AR effects in Instagram and Facebook. Aside from personal pleasure, I have always believed, or at least hoped, that these frameworks are actually quite useful -- they make GPU programming more accessible to non-experts, empowering people to create fasnicating graphics contents without having to master complex GPU concepts.","sidebar":"tutorialSidebar"},"docs/advanced/atomics":{"id":"docs/advanced/atomics","title":"Atomics","description":"In taichi.js kernels, top-level for-loops are parallelized by the compiler. As a result, kernel code are subject to many of the common pitfalls in parallel programming. Consider this kernel which attempts to sum from 1 to 100:","sidebar":"tutorialSidebar"},"docs/advanced/class-kernels":{"id":"docs/advanced/class-kernels","title":"Class Kernels","description":"So far, we have only seen kernels and fields that live \\"in the wild\\", in the sense that they are not members of a class. Once programs gets bigger, however, it\'s natural to want to use classes to encapsulate data stored in fields and kernels that operate on them. This page will provide recommendations on how to do this elegantly.","sidebar":"tutorialSidebar"},"docs/advanced/compile-time-control-flow":{"id":"docs/advanced/compile-time-control-flow","title":"Compile-Time Control Flow","description":"In taichi.js, you can write loops that are unrolled, or branches that are resolved at compile-time. Here\'s how and why.","sidebar":"tutorialSidebar"},"docs/advanced/functions-and-lambdas":{"id":"docs/advanced/functions-and-lambdas","title":"Functions and Lambdas","description":"In taichi.js, each ti.kernel represents a sequence of GPU operations which can be invoked in Javascript code. In other words, a ti.kernel can be thought of a parallelized GPU functions, which can be invoked on the CPU. However, in order to write complex GPU kernels, you also want to have GPU functions that are callable in GPU scope. This doc page will discuss how to use functions and lambdas in taichi.js kernels.","sidebar":"tutorialSidebar"},"docs/advanced/templates":{"id":"docs/advanced/templates","title":"Templates","description":"In the doc page for fields, we briefly mentioned that ti.template() arguments can be used to pass fields into kernels as arguments. In this page, we will discuss exactly what this means, and what you can and cannot do with template arguments.","sidebar":"tutorialSidebar"},"docs/basics/fields":{"id":"docs/basics/fields","title":"Fields","description":"Fields are the most basic type of data containers in taichi.js. Fields are n-dimensional arrays, where each element of the array can be either a primitive, a vector, a matrix, or a struct. Fields always live in GPU memory.","sidebar":"tutorialSidebar"},"docs/basics/getting-started":{"id":"docs/basics/getting-started","title":"Getting Started","description":"taichi.js is a Javascript framework which translates JS code into WebGPU compute and/or render pipelines. With taichi.js, the programmer can write WebGPU programs without having to deal with WebGPU\'s API or shading language. It offers a way to rapidly prototype WebGPU programs, for both parallel computation and rendering purposes. It is inspired by and named after the taichi Python library, from which it also inherits many API concepts and design principles.","sidebar":"tutorialSidebar"},"docs/basics/kernel-scope-builtin-functions":{"id":"docs/basics/kernel-scope-builtin-functions","title":"Kernel-Scope Built-in Functions","description":"In this page, we list all the built-in functions available in taichi.js kernels.","sidebar":"tutorialSidebar"},"docs/basics/kernel-scope-code-semantics":{"id":"docs/basics/kernel-scope-code-semantics","title":"Kernel-Scope Code Semantics","description":"In some occasions, the code in taichi.js kernel-scope have slightly different semantics than normal Javascript code. These differences can sometimes cause bugs that are difficult to catch. This page aims to list these differences, so that you don\'t fall into these traps.","sidebar":"tutorialSidebar"},"docs/basics/kernels":{"id":"docs/basics/kernels","title":"Kernels","description":"In taichi.js, Javascript functions that are compiled into WebGPU shaders are called \\"kernels\\". Kernels are created by passing a lambda function to ti.kernel(). For example:","sidebar":"tutorialSidebar"},"docs/basics/type-system":{"id":"docs/basics/type-system","title":"Type System","description":"In order for it to be compiled into WebGPU shaders, the Javascript function passed into ti.kernel() needs to obey certain rules that are not common to Javascript code. Most importantly, in normal Javascript-scope code, types of variables are not fixed and may change at runtime. This is different from kernel-scope code, where variables are \\"statically-typed\\". This means that types are fixed and determined at compile-time. When writing kernel code, it\'s useful to have a mental model of the type system in place, which this document will describe.","sidebar":"tutorialSidebar"},"docs/production/minifier":{"id":"docs/production/minifier","title":"Using taichi.js with Minifiers","description":"The Problem","sidebar":"tutorialSidebar"},"docs/production/typescript":{"id":"docs/production/typescript","title":"Using taichi.js with Typescript","description":"","sidebar":"tutorialSidebar"},"docs/rendering/GLTF":{"id":"docs/rendering/GLTF","title":"GLTF","description":"taichi.js currently contains a few built-in utilities for loading GLTF scenes. See the GLTF Physically-Based Rendering demo for example usage. Notice that this API is not stable.","sidebar":"tutorialSidebar"},"docs/rendering/render-pipelines":{"id":"docs/rendering/render-pipelines","title":"Render Pipelines","description":"Perhaps the biggest difference between taichi.js and the Python taichi library is that taichi.js includes support for writing rendering pipelines composed of vertex and fragment shaders. Writing rendering code in taichi.js is slightly more involved than writing general-purpose compute kernels, and it does require some understanding of rasterization-based rendering in general. However, you will find that the simple programming model of taichi.js makes these concepts extremely easy to work with and reason about.","sidebar":"tutorialSidebar"},"docs/rendering/rendering-builtin-functions":{"id":"docs/rendering/rendering-builtin-functions","title":"Rendering Built-in Functions","description":"This page lists rendering-specific built-in functions available in taichi.js render pipelines:","sidebar":"tutorialSidebar"},"docs/rendering/textures":{"id":"docs/rendering/textures","title":"Textures","description":"Textures are an important concept in computer graphics. They are images that come with hardware-accelerated sampling and filtering, and can be used to add details to 3D geometry. This page documents texture support in taichi.js.","sidebar":"tutorialSidebar"}}}')}}]);