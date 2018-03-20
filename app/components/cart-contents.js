import Component from '@ember/component';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default Component.extend({
  init(){
    this._super(...arguments);
    this.errors = [];
    this.get('cart');
  },
  cart: computed(function() {
    return getOwner(this).lookup('service:shopping-cart');
  }),
  isEmpty(){
    return this.get('cart').order_items.length == 0;
  },
  displayIfEmpty(){
    if(this.get('cart').isEmpty()){
      return "display: block"; //This is for HTML
    }else{
      return "display: none"; //This is for HTML
    }
  },
  actions: {
    remove(item){
      this.get('cart').remove(item);
    },
    changeQuantity(item, qty){
      if(qty > 0 && qty <= 100){
        this.get('cart').changeQuantity(item)
      }
    }
  }
});
