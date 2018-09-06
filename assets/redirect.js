var path = window.location.pathname;

if( path.indexOf( '/blog/' ) > -1 ) {

	var pre = window.location.origin,
		post = path.split( '/' )[2];

	window.location.replace( pre + '/notes/' + post );

}