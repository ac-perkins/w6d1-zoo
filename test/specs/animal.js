(function() {
    'use strict';

    var assert = chai.assert;

    suite('Animal', function() {

      test('the zoo namespace exists', function() {
          assert.ok(window.zoo, 'the namespace exists');
      });

      test('create animal with proper args', function() {

          var tim = new window.zoo.Animal('Tim', 'September 4, 1982');
          // var dob = new Date(1982, 9 , 4);

          assert.ok( tim, 'tim exists' );
          assert.ok( tim instanceof window.zoo.Animal, 'animal objects are from Animal' );
          assert.strictEqual(tim.age(), 33, 'Age is 33' );

      });


    });



})();
