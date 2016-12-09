import { test } from 'qunit';
import moduleForAcceptance from 'hiring-test-fe-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | customer search flow');

test('visiting /customers loads customer search', function(assert) {
  visit('/customers');

  andThen(function() {
    assert.equal(currentURL(), '/customers');
    assert.equal(currentRouteName(), 'customers');
  });
});

test('Show correct number of items from search', function(assert) {
  server.create('customer', {
    firstName: 'Bob',
    lastName: 'Barker'
  });
  server.create('customer', {
    firstName: 'Lester',
    lastName: 'Kester'
  });
  visit('/customers');
  fillIn('.customer-search-field input', 'a');
  andThen(function() {
    assert.equal(find('.customer-result-list li').length, 1);
  });
});
