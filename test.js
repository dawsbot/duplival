import test from 'ava';
import fn from './';

test('valid args', t => {
  t.throws(() => {
    fn();
  }, TypeError);
  t.throws(() => {
    fn();
  }, Error);
});

test('string replacement', t => {
  t.same(fn({key1: 'value1', key2: '<% key1 %>'}), {key1: 'value1', key2: 'value1'});
  t.same(fn({key1: 'value1', key2: '<%= key1 %>'}), {key1: 'value1', key2: 'value1'});
});
