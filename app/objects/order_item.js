import EmberObject from '@ember/object';

const OrderItem = EmberObject.extend({
  init(item){
    this.set('item', item);
  },
  quantity: Number,
  item: null,
  price(){
    this.get('item').get('price');
  },
  totalPrice(){
    return this.get('price') * this.get('quantity');
  },
  name(){
    return this.get('item').get('name');
  }
});
export default OrderItem;
