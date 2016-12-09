import Ember from 'ember';
const { Component, get } = Ember;

export default Component.extend({
  classNames: ['customer-search-field'],
  query: null,
  actions: {
    updateResults() {
      let query = get(this, 'query');
      this.attrs.updateResults(query);
    }
  }
});
