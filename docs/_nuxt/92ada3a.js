(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{280:function(t,e,r){var content=r(375);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("5d4ed5d9",content,!0,{sourceMap:!1})},374:function(t,e,r){"use strict";r(280)},375:function(t,e,r){var o=r(20)((function(i){return i[1]}));o.push([t.i,".card-content[data-v-5bf3abfb]{padding:15px 10px 15px 0}.card-content__text[data-v-5bf3abfb]{margin:15px 0}.card-content__reviews[data-v-5bf3abfb]{display:inline-block;width:100%;margin-bottom:10px}",""]),o.locals={},t.exports=o},666:function(t,e,r){"use strict";r.r(e);var o={name:"product_detail-id",validate:function(t){var e=t.params;return/^\d+$/.test(e.id)},data:function(){return{addToCartLabel:"Add to cart",removeFromCartLabel:"Remove from cart",addToFavouriteLabel:"Add to favourite",removeFromFavouriteLabel:"Remove from favourite",product:{},selected:1,quantityArray:[]}},mounted:function(){this.product=this.$store.getters.getProductById(this.$route.params.id),this.selected=this.product.quantity;for(var i=1;i<=20;i++)this.quantityArray.push(i)},computed:{isAddedBtn:function(){return this.product.isAddedBtn}},methods:{addToCart:function(t){var data={id:t,status:!0};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",data)},removeFromCart:function(t){var data={id:t,status:!1};this.$store.commit("removeFromCart",t),this.$store.commit("setAddedBtn",data)},onSelectQuantity:function(t){var data={id:t,quantity:this.selected};this.$store.commit("quantity",data)},saveToFavorite:function(t){this.$store.state.userInfo.isLoggedIn?this.$store.commit("addToFavourite",t):this.$store.commit("showLoginModal",!0)},removeFromFavourite:function(t){this.$store.commit("removeFromFavourite",t)}}},n=(r(374),r(3)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section"},[r("div",{staticClass:"card is-clearfix columns"},[t._m(0),t._v(" "),r("div",{staticClass:"card-content column is-two-thirds"},[r("div",{staticClass:"card-content__title"},[r("h2",{staticClass:"title is-4"},[t._v(t._s(t.product.title)+"\n            "),r("button",{directives:[{name:"show",rawName:"v-show",value:t.product.isFavourite,expression:"product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.removeFromFavouriteLabel},on:{click:function(e){return t.removeFromFavourite(t.product.id)}}},[t._m(1)]),t._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.product.isFavourite,expression:"!product.isFavourite"}],staticClass:"button is-small",attrs:{title:t.addToFavouriteLabel},on:{click:function(e){return t.saveToFavorite(t.product.id)}}},[t._m(2)])])]),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"card-content__ratings"},[1===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),2===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),2===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),3===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),4===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e(),t._v(" "),5===t.product.ratings?r("i",{staticClass:"fa fa-star"}):t._e()]),t._v(" "),r("div",{staticClass:"card-content__reviews"},[r("div",{staticClass:"is-pulled-left"},[r("p",[r("strong",[t._v(t._s(t.product.reviews>0?t.product.reviews+" Reviews":"No reviews"))])])]),t._v(" "),r("div",{staticClass:"select is-rounded is-small is-pulled-right"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?r:r[0]},function(e){return t.onSelectQuantity(t.product.id)}]}},t._l(t.quantityArray,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e))])})),0)])]),t._v(" "),r("div",{staticClass:"card-content__price is-pulled-left"},[r("span",{staticClass:"title is-3"},[r("strong",[t._v(t._s(t.product.price)+"€")])])]),t._v(" "),r("div",{staticClass:"card-content__btn is-pulled-right"},[t.isAddedBtn?t._e():r("button",{staticClass:"button is-primary",on:{click:function(e){return t.addToCart(t.product.id)}}},[t._v(t._s(t.addToCartLabel))]),t._v(" "),t.isAddedBtn?r("button",{staticClass:"button is-text",on:{click:function(e){return t.removeFromCart(t.product.id)}}},[t._v(t._s(t.removeFromCartLabel))]):t._e()])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("figure",{staticClass:"card-image is-480x480 column is-one-thirds"},[e("img",{attrs:{src:"https://bulma.io/images/placeholders/480x480.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fa fa-heart"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"far fa-heart"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-content__text"},[r("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          Ut enim ad minim veniam, quis nostrud\n          ")])])}],!1,null,"5bf3abfb",null);e.default=component.exports}}]);