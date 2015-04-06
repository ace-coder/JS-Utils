	var headID = document.getElementsByTagName("head")[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';
    headID.appendChild(script);

    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = SGL_JS_WEBROOT + '/js/patient-form.js';
    headID.appendChild(script);

//Add bootstrap css at the beginning of existing css files
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css';
    css.type = 'text/css';
    var firstCSS = document.getElementsByTagName('link')[0];
    firstCSS.parentNode.insertBefore(css, firstCSS);

//Add meta tags to make the page responsive
    var meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'X-UA-Compatible');
    meta.setAttribute('content', 'IE=Edge');
    var title = document.getElementsByTagName('title')[0];
    title.parentNode.insertBefore(meta, title);

    meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1';
    title.parentNode.insertBefore(meta, title);

//    jQuery(document).ready(function () {
//        $('#patientForm').parent().css({'width': 'auto'}).parent().css({'width': 'auto', 'float': 'none'});
//    });

function loadjscssfile(filename, filetype) {
	if (filetype == "js") { //if filename is a external JavaScript file
		var fileref = document.createElement('script')
		fileref.setAttribute("type", "text/javascript")
		fileref.setAttribute("src", filename)
	}
	else if (filetype == "css") { //if filename is an external CSS file
		var fileref = document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if (typeof fileref != "undefined")
		document.getElementsByTagName("head")[0].appendChild(fileref)
}
