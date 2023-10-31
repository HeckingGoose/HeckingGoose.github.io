
// Script that patches over a change that halloween styling causes on this website
// a proper fix for this would be to split out the classes properly

var headingH1 = document.querySelector('.heading_Halloween h1');
var headingH3 = document.querySelector('.heading_Halloween h3');
if (headingH1 != null && headingH3 != null)
{
    headingH1.style.fontSize = "45px";
    headingH3.style.fontSize = "30px";
}