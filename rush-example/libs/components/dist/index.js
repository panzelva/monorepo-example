var t=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var d=e=>t(e,"__esModule",{value:!0});var a=(e,o)=>{for(var n in o)t(e,n,{get:o[n],enumerable:!0})},c=(e,o,n,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of p(o))!s.call(e,r)&&(n||r!=="default")&&t(e,r,{get:()=>o[r],enumerable:!(l=i(o,r))||l.enumerable});return e};var m=(e=>(o,n)=>e&&e.get(o)||(n=c(d({}),o,1),e&&e.set(o,n),n))(typeof WeakMap!="undefined"?new WeakMap:0);var v={};a(v,{HelloWorld:()=>u});function u(e){let{name:o}=e;return React.createElement("div",null,"hello ",o,"!")}module.exports=m(v);0&&(module.exports={HelloWorld});
