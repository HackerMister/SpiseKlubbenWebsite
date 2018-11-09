window.onscroll = function() {scrollFunction()};  //funksjon i det det scrolles

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) { //når det scrolles 80 pixler fra toppen skal det
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
    document.getElementById("navbar").style.boxShadow = "none";
  }
}

    var link = document.querySelector('link[rel="import"]');

    // Clone the <template> in the import.
    var template = link.import.querySelector('template');
    var clone = document.importNode(template.content, true);

    document.querySelector('#putfooterhere').appendChild(clone);

// code from https://www.html5rocks.com/en/tutorials/webcomponents/imports/
