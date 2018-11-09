window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = ".1em 0";
  //  document.getElementById("logo").style.fontSize = ".1em"
    document.getElementById("logo").width = "200"
  //  document.getElementById("logo").height = "40"
    document.getElementById("navbar").style.boxShadow = "0 4px 10px -4px black";
  } else {
    document.getElementById("navbar").style.padding = "2.5em 0";
    //document.getElementById("logo").style.fontSize = "1em";
    document.getElementById("logo").width = "300"
  //  document.getElementById("logo").height = "75"
  }
}

    var link = document.querySelector('link[rel="import"]');

    // Clone the <template> in the import.
    var template = link.import.querySelector('template');
    var clone = document.importNode(template.content, true);

    document.querySelector('#putfooterhere').appendChild(clone);

// code from https://www.html5rocks.com/en/tutorials/webcomponents/imports/

