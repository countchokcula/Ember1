import Service from '@ember/service';

export default Service.extend({
  name: 'cart',
  order_items: NULL,
  init(){
    this._super(...arguements);
    this.set('order_items', []);
  },
  add(item) {
    this.get('order_items').pushObject(item);
  },

  remove(item) {
    this.get('order_items').removeObject(item);
  },

  empty() {
    this.get('order_items').clear();
  },
  total_items(){
    return this.order_items.size;
  },
  totalPrice(){
    let total = 0.00;
    for(let i in this.order_items){
      total = total + this.order_items[i].price;
    };
    return total;
  }
});
