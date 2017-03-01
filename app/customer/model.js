import DS from 'ember-data';
const { Model, attr } = DS;

export default Model.extend({
  firstName: attr('String'),
  lastName: attr('String'),
  dueMonthly: attr('Number')
});
