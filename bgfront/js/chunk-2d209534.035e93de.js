(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209534"],{a928:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Daohang"),i("div",{attrs:{id:"wraper"}},[i("div",{staticStyle:{padding:"1em"}},[i("p",{staticStyle:{"text-align":"center","font-size":"22px","font-weight":"700"}},[t._v(t._s(t.detail.title))]),i("p",[t._v(t._s(t.detail.where))]),i("p",[t._v(t._s(t.detail.when))]),i("ul",t._l(t.detail.ps,(function(e,a){return i("li",{key:a},[t._v(t._s(e.who)+":"+t._s(e.name))])})),0),i("hr"),i("div",{domProps:{innerHTML:t._s(t.detail.what)}})])])],1)},n=[],s=i("578d"),d={name:"UsDetail",components:{Daohang:s["a"]},data:function(){return{detail:{eid:"1",year:"2020",title:"",what:"fuck",when:"20200513",where:"",href:"",ps:[{name:"",who:""}]}}},props:{id:String},methods:{getDetailById:function(t){var e=this;this.showdetail=!0,this.$axios.get("/humans/getdetail?id="+t).then((function(t){var i=t.data;console.dir(i),e.detail.ps=i.ps,e.detail.title=i.title,e.detail.what=i.what,e.detail.when=i.when,e.detail.where=i.where,e.detail.year=i.year})).catch((function(t){console.log("something wrong.."),console.dir(t)}))}},mounted:function(){this.id<0?this.$router.push("/us"):this.getDetailById(this.id)}},l=d,o=i("2877"),h=Object(o["a"])(l,a,n,!1,null,"20962efe",null);e["default"]=h.exports}}]);