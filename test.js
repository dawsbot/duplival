/* eslint no-unused-vars: 0 */
import piglatin from 'piglatin';
import test from 'ava';
import duplival from './';

test('valid args', t => {
  t.throws(() => {
    duplival();
  }, TypeError);
});

const simpleObjTemplate = {
  key1: 'value1',
  key2: '<%= key1 %>'
};
const simpleObjSolution = {
  key1: 'value1',
  key2: 'value1'
};
const complexObjTemplate = {
  key1: 1,
  key2: '<%= key1 %>',
  key3: '<%= key1 + 2 %>'
};
const complexObjSolution = {
  key1: 1,
  key2: '1',
  key3: '3'
};

const piglatinTemplate = {
  translate: piglatin,
  englishSentence: 'This is a very very long string you would not want to duplicate or type out. Yet you do want to do some type of operation with it. Let\'s say for example that you want to translate this. With english as your base and pig-latin as your goal, let\'s have some fun',
  piglatinSentence: `<%= translate(englishSentence) %>`
};

const piglatinSolution = 'histay is a eryvay eryvay onglay tringsay ouyay ouldway otnay antway to uplicateday or ypetay utoay etyay ouyay do antway to do omesay ypetay of perationoay ithway it etlay s aysay orfay xampleeay hattay ouyay antway to ranslatetay histay ithway nglisheay as ouryay asebay ndaay igpay atinlay as ouryay oalgay etlay s avehay omesay unfay';

test('basic string replacement', t => {
  t.deepEqual(duplival(simpleObjTemplate), simpleObjSolution);
});

test('complex string replacement', t => {
  t.deepEqual(duplival(complexObjTemplate), complexObjSolution);
});

test('calling function on string', t => {
  t.deepEqual(duplival(piglatinTemplate).piglatinSentence, piglatinSolution);
});
