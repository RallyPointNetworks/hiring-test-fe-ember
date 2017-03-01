import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('customer-result-list', 'Integration | Component | customer result list', {
  integration: true
});

test('with no results, say there are no results.', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('results', []);
  this.render(hbs`{{customer-result-list results=results}}`);

  assert.equal(this.$().text().trim(), 'No Results');
});

test('With a few results, show some results!', function(assert) {
  let user1 = Ember.Object.create({
    firstName: 'Bob',
    lastName: 'Barker',
    dueMonthly: '12345'
  });
  let user2 = Ember.Object.create({
    firstName: 'Lou',
    lastName: 'Burger',
    dueMonthly: '54321'
  });
  this.set('results', [user1, user2]);
  this.render(hbs`{{customer-result-list results=results}}`);

  assert.equal(this.$('li').length, 2);
});
