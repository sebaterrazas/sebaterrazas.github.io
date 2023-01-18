let tag = document.getElementsByClassName('prettyprinted')[0];
let html_data = tag.innerHTML;
tag.innerHTML = '<div class="typed-strings">' + html_data + '</div><span class="typed"></span>';

var typed = new Typed('.typed', {
    stringsElement: '.typed-strings',
    typeSpeed: 30,
    backSpeed: 10,
    loop: true,
    smartBackspace: true,
    
});
