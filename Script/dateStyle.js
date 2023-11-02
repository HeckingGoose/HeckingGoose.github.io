// Fetch date
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

// Fetch singular objects
var mainBody = document.querySelector('.mainBodyC');
var heading = document.querySelector('.headingC');
var title = document.querySelector('.titleC');
var currentPage = document.querySelector('.currentPageC');
var siteTree = document.querySelector('.siteTreeC');

// Fetch plural objects
var headerItem = document.querySelectorAll('.headerItemC');
var section = document.querySelectorAll('.sectionC');
var sectionImage = document.querySelectorAll('.sectionImageC');
var sectionText = document.querySelectorAll('.sectionTextC');
var imageRow = document.querySelectorAll('.imageRowC');

// Fetch tags
var link = document.getElementsByTagName('a');
var p = document.getElementsByTagName('p');
var ul = document.getElementsByTagName('ul');
var li = document.getElementsByTagName('li');
var h1 = document.getElementsByTagName('h1');
var h2 = document.getElementsByTagName('h2');
var h3 = document.getElementsByTagName('h3');
var h4 = document.getElementsByTagName('h4');
var h5 = document.getElementsByTagName('h5');
var h6 = document.getElementsByTagName('h6');

// Apply custom styles based on current date
switch (year)
{
    default:
        switch (month)
        {
            default:
                break;
            case 9: // October
                switch (day)
                {
                    default:
                        break;
                    case 1: // Birthday
                        break;
                    case 31: // Halloween
                        // Set classes and background colour
                        document.body.style.backgroundColor = '#2E364E';
                        if (mainBody != null)
                        {
                            mainBody.classList.remove('mainBodyC');
                            mainBody.classList.add('mainBodyC_Halloween');
                        }
                        if (heading != null)
                        {
                            heading.classList.remove('headingC');
                            heading.classList.add('headingC_Halloween');
                        }
                        if (title != null)
                        {
                            title.classList.remove('titleC');
                            title.classList.add('titleC_Halloween');
                        }
                        if (currentPage != null)
                        {
                            currentPage.classList.remove('currentPageC');
                            currentPage.classList.add('currentPageC_Halloween');
                        }
                        if (siteTree != null)
                        {
                            siteTree.classList.remove('siteTreeC');
                            siteTree.classList.add('siteTreeC_Halloween');
                        }

                        for (var i = 0; i < headerItem.length; i++)
                        {
                            headerItem[i].classList.remove('headerItemC');
                            headerItem[i].classList.add('headerItemC_Halloween');
                        }
                        for (var i = 0; i < section.length; i++)
                        {
                            section[i].classList.remove('sectionC');
                            section[i].classList.add('sectionC_Halloween');
                        }
                        for (var i = 0; i < sectionImage.length; i++)
                        {
                            sectionImage[i].classList.remove('sectionImageC');
                            sectionImage[i].classList.add('sectionImageC_Halloween');
                        }
                        for (var i = 0; i < sectionText.length; i++)
                        {
                            sectionText[i].classList.remove('sectionTextC');
                            sectionText[i].classList.add('sectionTextC_Halloween');
                        }
                        for (var i = 0; i < imageRow.length; i++)
                        {
                            imageRow[i].classList.remove('imageRowC');
                            imageRow[i].classList.add('imageRowC_Halloween');
                        }

                        // Set text colours
                        SetTextColour(
                            '#5F5FFF', // a
                            '#FFFFFF', // p
                            '#FFFFFF', // ul
                            '#FFFFFF', // li
                            '#FFFFFF', // h1
                            '#FFFFFF', // h2
                            '#FFFFFF', // h3
                            '#FFFFFF', // h4
                            '#FFFFFF', // h5
                            '#FFFFFF' // h6
                            );
                }
        }
        break;
}
function SetTextColour(aC, pC, ulC, liC, h1C, h2C, h3C, h4C, h5C, h6C)
{
    for (var i = 0; i < link.length; i++)
    {
        link[i].style.color = aC;
    }
    for (var i = 0; i < p.length; i++)
    {
        p[i].style.color = pC;
    }
    for (var i = 0; i < ul.length; i++)
    {
        ul[i].style.color = ulC;
    }
    for (var i = 0; i < li.length; i++)
    {
        li[i].style.color = liC;
    }
    for (var i = 0; i < h1.length; i++)
    {
        h1[i].style.color = h1C;
    }
    for (var i = 0; i < h2.length; i++)
    {
        h2[i].style.color = h2C;
    }
    for (var i = 0; i < h3.length; i++)
    {
        h3[i].style.color = h3C;
    }
    for (var i = 0; i < h4.length; i++)
    {
        h4[i].style.color = h4C;
    }
    for (var i = 0; i < h5.length; i++)
    {
        h5[i].style.color = h5C;
    }
    for (var i = 0; i < h6.length; i++)
    {
        h6[i].style.color = h6C;
    }
}