(function() {
    'use strict';

    var assert = chai.assert;

    suite('Jabberwock', function() {

      test('the zoo namespace exists', function() {
          assert.ok(window.zoo, 'the namespace exists');
      });

      test('create jabberwock with proper args', function() {

          var tim = new window.zoo.Jabberwock('Tim', 'September 4, 1982');

          assert.ok( tim, 'tim exists' );
          assert.ok( tim instanceof window.zoo.Jabberwock, 'jabberwock objects are from Jabberwock' );
          assert.strictEqual(tim.age(), 33, 'Age is 33' );
          assert.strictEqual(tim.eatAdventurers(14), 'Tim can eat 14 adventurers');
          assert.strictEqual(tim.toString(), 'Beware the Jabberwock named Tim, my son! The jaws that bite, the claws that catch!', 'toString function works as expected');

      });

      test('return new Jabberwock with layEgg function', function() {
          var tim = new window.zoo.Jabberwock('Tim', 'September 4, 1982');
          var miguel = tim.layEgg('Miguel');


          assert.ok( miguel, 'tim exists' );
          assert.strictEqual(miguel.name, 'Miguel', 'Name in argument is what is expected');
          assert.ok(Date.now() - miguel.dob < 50, 'auto-assigned date is approximately correct');

      });


    });


})();
