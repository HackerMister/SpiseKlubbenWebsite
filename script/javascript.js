// javascript

    var link = document.querySelector('link[rel="import"]');

    // Clone the <template> in the import.
    var template = link.import.querySelector('template');
    var clone = document.importNode(template.content, true);

    document.querySelector('#putfooterhere').appendChild(clone);

// code from https://www.html5rocks.com/en/tutorials/webcomponents/imports/