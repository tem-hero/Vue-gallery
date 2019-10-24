(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53df8d40"],{1441:function(t,e,o){"use strict";var r=o("598a"),i=o.n(r);i.a},2756:function(t,e,o){"use strict";var r=o("430f"),i=o.n(r);i.a},"430f":function(t,e,o){},"598a":function(t,e,o){},"762d":function(t,e,o){},8332:function(t,e,o){"use strict";var r=o("762d"),i=o.n(r);i.a},a208:function(t,e,o){"use strict";var r=o("ca44"),i=o.n(r);i.a},c9e5:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-page"},[t._m(0),o("nav",{staticClass:"white-colored"},[o("div",{staticClass:"portfolio__nav-container container_center"},[o("span",{staticClass:"portfolio__prev-button portfolio__nav-button",on:{click:function(e){e.preventDefault(),t.setCurrentProduct(Math.abs(t.currentProduct-1))}}},[t._v("previous")]),o("span",{staticClass:"portfolio__next-button portfolio__nav-button",on:{click:function(e){e.preventDefault(),t.setCurrentProduct((t.currentProduct+1)%t.products.length)}}},[t._v("next")]),o("span",{staticClass:"portfolio__menu-show-all portfolio__nav-button",on:{mouseenter:t.menuShow,mouseleave:t.menuHide}},[o("i",{staticClass:"fas fa-list-ul"}),t._v(" show all"),o("transition-group",{staticClass:"portfolio__dropdown",class:t.menuShadow,attrs:{name:"menu-show",tag:"ul"},on:{"after-enter":t.menuShow,leave:t.menuHide},nativeOn:{click:function(e){return t.showProduct(e)}}},t._l(t.menuShowedItems,function(e){return o("li",{key:e.id,staticClass:"portfolio__dropdown__item white-colored"},[o("span",{staticClass:"portfolio__dropdown__link",attrs:{"data-id":e.id}},[t._v(t._s(e.name))])])}),0)],1)])]),o("PortfolioProduct",{attrs:{product:t.products[t.currentProduct]},on:{"related-click":function(e){return t.setCurrentProduct(e%t.products.length)}}})],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"top-heading-container_portfolio"},[o("div",{staticClass:"container_center top-heading"},[o("h1",{staticClass:"heading-font font-lighter"},[o("span",[t._v("latest projects")])]),o("p",{staticClass:"heading-font__add heading-font__add-two font-lighter"},[t._v("we deliver quality")])])])}],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"container_center"},[r("transition",{attrs:{name:"prod-fade",mode:"out-in"},on:{"before-leave":t.hideRelated,"after-enter":t.unhideRelated}},[t.firstLayout?r("section",{key:1+t.product.likes,staticClass:"portfolio__product-container"},[r("PortfolioProductItem",{attrs:{product:t.product}}),r("PortfolioProductGallery",{attrs:{images:t.product.images}})],1):r("section",{key:3+t.product.likes,staticClass:"portfolio__product-container"},[r("PortfolioProductGallery",{attrs:{images:t.product.images}}),r("PortfolioProductItem",{attrs:{product:t.product}})],1)]),r("transition",{attrs:{name:"related-fade"}},[r("section",{directives:[{name:"show",rawName:"v-show",value:t.relatedVisible,expression:"relatedVisible"}],staticClass:"text__cards__container portfolio__related-container"},[r("h2",{staticClass:"text__cards-title font-lighter"},[t._v("related works")]),r("p",{staticClass:"text__common-p text__cards-text"},[t._v("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam\n                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.")])])]),r("transition",{attrs:{name:"related-fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.relatedVisible,expression:"relatedVisible"}],staticClass:"bottom-cards"},t._l(t.relatedProducts,function(e,i){return r("div",{key:i,staticClass:"bottom-cards__item portfolio__related-works",on:{click:function(o){return t.$emit("related-click",e.id)}}},[r("img",{staticClass:"portfolio__related-works__img gallery__image",attrs:{src:o("1771")("./"+e.img),alt:"Product"}})])}),0)])],1)},a=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio__column-left"},[o("h2",{staticClass:"product__title"},[t._v(t._s(t.product.title))]),o("p",{staticClass:"product__subtitle text__regular-bold"},[t._v(t._s(t.product.subtitle))]),o("hr",{staticClass:"portfolio__line"}),o("article",{staticClass:"product__body"},[o("p",{staticClass:"product__date"},[o("time",{attrs:{datetime:t.product.date}},[t._v(t._s(t.setDate(t.product.date)))]),o("LikeButton",[[t._v(t._s(t.product.likes)+" likes")]],2)],1),o("p",{staticClass:"product__main-text text__common-p"},[t._v(t._s(t.product.info))])]),o("hr",{staticClass:"portfolio__line_bottom"}),o("div",[o("p",{staticClass:"product__tags-title"},[t._v("role on project:")]),o("p",{staticClass:"product__tags"},[t._v(t._s(t.makeStringFromArr(t.product.roles)))])]),o("div",{staticClass:"portfolio__bottom-tags-container"},[o("p",{staticClass:"product__tags-title"},[t._v("tags:")]),o("p",{staticClass:"product__tags"},[t._v(t._s(t.makeStringFromArr(t.product.tags)))])]),o("div",{staticClass:"portfolio__socials-share"},[t._m(0),o("span",{staticClass:"portfolio__socials-container"},t._l(t.socials,function(t){return o("a",{key:t.id,staticClass:"portfolio__socials__item",attrs:{title:t.name,href:t.socialLink},on:{click:function(t){t.preventDefault()}}},[o("i",{class:t.html})])}),0)])])},l=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"portfolio__share-button"},[o("i",{staticClass:"fas fa-share-alt"}),t._v(" share")])}],c=o("1f11"),u=o("92f8"),d={name:"PortfolioProductItem",props:["product"],mixins:[c["a"]],components:{LikeButton:u["a"]},data:function(){return{socials:""}},methods:{makeStringFromArr:function(t){return t.join(", ")}},created:function(){this.socials=this.$store.state.socials}},_=d,p=(o("1441"),o("2877")),m=Object(p["a"])(_,n,l,!1,null,null,null),f=m.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"portfolio__prod-gallery"},[r("div",{staticClass:"portfolio__prod-gallery__main-pic"},[r("img",{staticClass:"portfolio__prod-gallery__image gallery__image",attrs:{src:o("1771")("./"+t.images[t.currentGalleryPic]),alt:"Product"}})]),r("div",{staticClass:"portfolio__item-container"},t._l(t.images,function(e,i){return r("div",{key:i,staticClass:"portfolio__prod-gallery__item",on:{mouseover:function(e){return t.newCurrentGalleryPic(i)}}},[r("img",{staticClass:"portfolio__prod-gallery__image gallery__image",class:{"portfolio__prod-gallery__image-active":t.currentGalleryPic===i},attrs:{src:o("1771")("./"+e),alt:"Product"}})])}),0)])},g=[],v={name:"PortfolioProductGallery",data:function(){return{currentGalleryPic:0}},props:["images"],methods:{newCurrentGalleryPic:function(t){this.currentGalleryPic=t}}},w=v,C=(o("8332"),Object(p["a"])(w,h,g,!1,null,null,null)),P=C.exports;function y(t){for(var e=t.length-1;e>0;e--){var o=Math.floor(Math.random()*e),r=t[e];t[e]=t[o],t[o]=r}return t}var b={name:"PortfolioProduct",components:{PortfolioProductItem:f,PortfolioProductGallery:P},data:function(){return{allProductsImg:[{id:0,img:"gallery-item2.png"},{id:1,img:"portfolio2-1.png"},{id:3,img:"related-works1.png"},{id:2,img:"gallery-item3.png"}],relatedProducts:[],firstLayout:!0,relatedVisible:!0}},props:["product"],methods:{showRelated:function(){var t=this;this.relatedProducts=this.allProductsImg.filter(function(e,o){return o!==t.product.id}),y(this.relatedProducts)},hideRelated:function(){this.relatedVisible=!1},unhideRelated:function(){this.showRelated(),this.relatedVisible=!0}},watch:{product:function(){this.product.id%2===0?this.firstLayout=!0:this.firstLayout=!1}},mounted:function(){this.showRelated()}},k=b,S=(o("2756"),Object(p["a"])(k,s,a,!1,null,null,null)),x=S.exports,I={name:"Portfolio",data:function(){return{menuItems:[{id:0,name:"Branding Design"},{id:1,name:"Mobile App"},{id:2,name:"Branding Design"},{id:3,name:"Mobile App"}],menuShowedItems:[],currentProduct:0,menuShowed:!1}},computed:{menuShadow:function(){return{"portfolio__menu-show-all_shadow":this.menuShowed,"portfolio__dropdown-pseudo":this.menuShowed}},products:function(){return this.$store.state.products}},components:{PortfolioProduct:x},methods:{setCurrentProduct:function(t){this.currentProduct=t},showProduct:function(t){"SPAN"===t.target.tagName&&(this.currentProduct=t.target.dataset.id%2,this.menuHide())},menuShow:function(){this.menuShowed=!0,this.menuShowedItems.length<this.menuItems.length&&this.menuShowedItems.push(this.menuItems[this.menuShowedItems.length])},menuHide:function(){this.menuShowed=!1,this.menuShowedItems.length>0&&this.menuShowedItems.pop()}}},G=I,$=(o("a208"),Object(p["a"])(G,r,i,!1,null,null,null));e["default"]=$.exports},ca44:function(t,e,o){}}]);
//# sourceMappingURL=chunk-53df8d40.84f86c02.js.map