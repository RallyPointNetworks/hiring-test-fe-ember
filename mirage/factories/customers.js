import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  firstName() { return faker.firstName(); },
  lastName() { return faker.lastName(); },
  dueMonthly() { return faker.random.number(); }
});
