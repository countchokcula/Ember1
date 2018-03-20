import Component from '@ember/component';
import OrderItem from "../objects";
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';

export default Component.extend({
  cart: computed(function() {
    return getOwner(this).lookup('service:shopping-cart');
  }),
  actions: {
    addToCart(item, qty){
      let orderItem = OrderItem.create({
        item: item,
        quantity: qty
      });
      this.get('cart').pushObject(orderItem);
    }
  }
});
