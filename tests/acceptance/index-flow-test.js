import { test } from 'qunit';
import moduleForAcceptance from 'hiring-test-fe-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index flow');

test('visiting / loads the index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal(currentRouteName(), 'index');
  });
});
