import Component from '@ember/component';

export default Component.extend({
  cart: Ember.inject.server('shopping-cart'),
  actions: {
    remove(item){
      this.get('cart').remove(item);
    }
  }
});
