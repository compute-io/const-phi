'use strict';

// MODULES //

var tape = require( 'tape' );
var PHI = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof PHI, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 1.618033988749895', function test( t ) {
	t.equal( PHI, 1.618033988749895, 'equals 1.618033988749895' );
	t.end();
});
