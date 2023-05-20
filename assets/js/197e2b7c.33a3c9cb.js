"use strict";(self.webpackChunktaichi_js_com=self.webpackChunktaichi_js_com||[]).push([[6608],{8448:(e,t,r)=>{r.d(t,{X:()=>u,S:()=>p});var i=r(7294);class l extends i.Component{constructor(e){super(e)}render(){const e=this.props.url||"https://stackblitz.com/edit/js-dsjwmb?embed=1&file=index.js";return i.createElement("iframe",{style:{width:"100%",height:"100%"},scrolling:"no",title:"Untitled",src:e,frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"})}}var s=r(7357),a=r(9998),n=r(8619),c=r(9953),o=r(8462),d=r(963),h=r(5861),m=r(6550);let p=function(e){return e.GameOfLife="game-of-life",e.Fractal="fractal",e.Fractal3D="fractal-3d",e.VortexRing="vortex-ring",e.Rasterizer="rasterizer",e.Mpm99="mpm99",e.CornellBox="cornell-box",e.RotatingCube="rotating-cube",e.Cloth="cloth",e.FractalOnCloth="fractal-on-cloth",e.Fluid3D="fluid-3d",e.Jelly="jelly",e}({});class u extends i.Component{constructor(e){if(super(e),this.state={presetId:0},this.allPresets=this.getPresets(),e.preset)for(let t=0;t<this.allPresets.length;++t)this.allPresets[t].preset===e.preset&&(this.state.presetId=t)}getPresets(){let e=[{preset:p.GameOfLife,name:"Game of Life",url:"https://stackblitz.com/edit/taichi-js-game-of-life?embed=1&file=index.js"},{preset:p.Fractal,name:"Fractal",url:"https://stackblitz.com/edit/taichi-js-fractal?embed=1&file=index.js"},{preset:p.Fractal3D,name:"Fractal 3D",url:"https://stackblitz.com/edit/taichi-js-fractal-3d?embed=1&file=index.js"},{preset:p.VortexRing,name:"Vortex Ring",url:"https://stackblitz.com/edit/taichi-js-vortex-ring?embed=1&file=index.js"},{preset:p.Rasterizer,name:"Rasterizer",url:"https://stackblitz.com/edit/taichi-js-rasterizer?embed=1&file=index.js"},{preset:p.Mpm99,name:"Mpm99",url:"https://stackblitz.com/edit/taichi-js-mpm99?embed=1&file=index.js"},{preset:p.CornellBox,name:"Cornell Box",url:"https://stackblitz.com/edit/taichi-js-cornell-box?embed=1&file=index.js"},{preset:p.RotatingCube,name:"Rotating Cube",url:"https://stackblitz.com/edit/taichi-js-rotating-cube?embed=1&file=index.js"},{preset:p.Cloth,name:"Cloth",url:"https://stackblitz.com/edit/taichi-js-cloth?embed=1&file=index.js"},{preset:p.FractalOnCloth,name:"Fractal On Cloth",url:"https://stackblitz.com/edit/taichi-js-fractal-on-cloth?embed=1&file=index.js"},{preset:p.Fluid3D,name:"Fluid 3D",url:"https://stackblitz.com/edit/taichi-js-fluid-3d?embed=1&file=index.js"},{preset:p.Jelly,name:"Jelly",url:"https://stackblitz.com/edit/taichi-js-jelly?embed=1&file=index.js"}];for(let t of e)t.url+="&theme=light";return e}renderRow(e,t){return i.createElement(a.ZP,{component:"div",disablePadding:!0,onClick:()=>{t!=this.state.presetId&&this.setState({presetId:t,redirect:e.preset})}},i.createElement(n.Z,null,i.createElement(c.Z,{primary:e.name}),i.createElement(d.Z,{checked:t===this.state.presetId})))}renderRows(){return this.allPresets.map(((e,t)=>this.renderRow(e,t)))}render(){if(this.state.redirect)return i.createElement(m.l_,{to:"/playground/"+this.state.redirect});const e=this.props.height||"100vh",t=this.props.width||"100%";return i.createElement(i.Fragment,null,i.createElement(s.Z,{height:e,maxHeight:e,width:t,backgroundColor:"#FFFFFF",display:"flex"},i.createElement(s.Z,{height:"100%",maxHeight:"100%",width:"15%",display:"inline-block",backgroundColor:"#FFFFFF",paddingLeft:"1%",paddingTop:"1%"},i.createElement(h.Z,{variant:"h6",component:"div"},"Examples"),i.createElement(o.Z,{style:{maxHeight:"100%",overflow:"auto"},disablePadding:!0,dense:!0},this.renderRows())),i.createElement(s.Z,{height:"100%",width:"85%",backgroundColor:"#FFFFFF"},i.createElement(l,{url:this.allPresets[this.state.presetId].url}))))}}},3115:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var i=r(7294),l=r(7961),s=r(8448);function a(){return i.createElement(l.Z,{title:"Playground",description:"PlayGround"},i.createElement("main",null,i.createElement(s.X,{height:"93.5vh",preset:s.S.GameOfLife})))}}}]);