(function() {
    'use strict';

    var assert = chai.assert;

    suite('Bandersnatch', function() {

      test('the zoo namespace exists', function() {
          assert.ok(window.zoo, 'the namespace exists');
      });

      test('create Bandersnatch with proper args', function() {

          var tim = new window.zoo.Bandersnatch('Tim', 'September 4, 1982');

          assert.ok( tim, 'tim exists' );
          assert.ok( tim instanceof window.zoo.Bandersnatch, 'jabberwock objects are from Bandersnatch' );
          assert.strictEqual(tim.age(), 33, 'Age is 33' );
          assert.strictEqual(tim.extendNeck(14), 'Tim can extend its neck 14 meters in order to catch its prey');
          assert.strictEqual(tim.toString(), 'Tim the Bandersnatch was born in 1982', 'toString function works as expected');

      });

      test('return new Bandersnatch with birth function', function() {
          var tim = new window.zoo.Bandersnatch('Tim', 'September 4, 1982');
          var miguel = tim.birth('Miguel');


          assert.ok( miguel, 'miguel exists' );
          assert.strictEqual(miguel.name, 'Miguel', 'Name in argument is what is expected');
          assert.ok(Date.now() - miguel.dob < 50, 'auto-assigned date is approximately correct');

      });


    });



})();
