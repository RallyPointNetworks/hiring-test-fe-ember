import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('customer-search-field', 'Integration | Component | customer search field', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.on('updateResults', function() {
    assert.ok(true);
  });
  this.render(hbs`{{customer-search-field updateResults=(action 'updateResults')}}`);
  this.$('input').val('a').trigger('keyup');
});
