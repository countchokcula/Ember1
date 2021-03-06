import Route from '@ember/routing/route';

export default Route.extend({
  renderTemplate(){
    this.render('items.show', {
      into: "application"
    });
  },
  model(params){
    return this.store.findRecord("item", params.item_id);
  }
});
