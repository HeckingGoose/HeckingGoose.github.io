// Fetch date
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

// Fetch singular objects
var mainBody = document.querySelector('.mainBody');
var heading = document.querySelector('.heading');
var title = document.querySelector('.title');
var currentPage = document.querySelector('.currentPage');

// Fetch plural objects
var headerItem = document.querySelectorAll('.headerItem');
var section = document.querySelectorAll('.section');
var sectionImage = document.querySelectorAll('.sectionImage');
var sectionText = document.querySelectorAll('.sectionText');
var imageRow = document.querySelectorAll('.imageRow');

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

                        mainBody.classList.remove('mainBody');
                        mainBody.classList.add('mainBody_Halloween');

                        heading.classList.remove('heading');
                        heading.classList.add('heading_Halloween');

                        title.classList.remove('title');
                        title.classList.add('title_Halloween');

                        currentPage.classList.remove('currentPage');
                        currentPage.classList.add('currentPage_Halloween');

                        for (var i = 0; i < headerItem.length; i++)
                        {
                            headerItem[i].classList.remove('headerItem');
                            headerItem[i].classList.add('headerItem_Halloween');
                        }
                        for (var i = 0; i < section.length; i++)
                        {
                            section[i].classList.remove('section');
                            section[i].classList.add('section_Halloween');
                        }
                        for (var i = 0; i < sectionImage.length; i++)
                        {
                            sectionImage[i].classList.remove('sectionImage');
                            sectionImage[i].classList.add('sectionImage_Halloween');
                        }
                        for (var i = 0; i < sectionText.length; i++)
                        {
                            sectionText[i].classList.remove('sectionText');
                            sectionText[i].classList.add('sectionText_Halloween');
                        }
                        for (var i = 0; i < imageRow.length; i++)
                        {
                            imageRow[i].classList.remove('imageRow');
                            imageRow[i].classList.add('imageRow_Halloween');
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