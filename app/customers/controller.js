import Ember from 'ember';
const { Controller, set } = Ember;

export default Controller.extend({
  query: null,
  results: [],
  actions: {
    updateResults(query) {
      if (query) {
        this.store.query('customer', { query }).then((results) => {
          set(this, 'results', results);
        }).catch((e) => {
          console.error(e);
        });
      } else {
        this.store.all('customer', { limit: 10 }).then((results) => {
          set(this, 'results', results);
        });
      }
    }
  }
});
