// Autumn: September 1st - November 30th

// Fetch date
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayOfWeek = date.getDay();

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

// Set theme
var theme = "";

// Get window path
var path = window.location.pathname;
path = path.substring(1, path.lastIndexOf("/") + 1);
var offset = 0;
if (path.substring(1, 2) == ":")
{
    offset = 3;
}
var addonToGetToRoot = "";
for (var i = 0; i < path.length; i++)
{
    if (path[i] == '/')
    {
        if (offset <= 0)
        {
            addonToGetToRoot += "../";
        }
        else
        {
            offset -= 1;
        }
    }
}

// Apply custom themes based on day of week (overridden by more important events, such as specific days of year)
switch (dayOfWeek)
{
    // Sunday
    case 0:
        break;
    // Monday
    case 1:
        break;
    // Tuesday
    case 2:
        break;
    // Wednesday
    case 3:
        // Apply DnD theme background
        var background = document.querySelectorAll(".backgroundC");
        for (var i = 0; i < background.length; i++)
        {
            background[i].classList.remove("backgroundC");
            background[i].classList.add("backgroundC_DnD");
        }

        // Piggyback off halloween theme
        theme = "Halloween";

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
        break;
    // Thursday
    case 4:
        break;
    // Friday
    case 5:
        break;
    // Saturday
    case 6:
        break;
}

// Apply custom styles based on current date
switch (year)
{
    default:
        switch (month)
        {
            default:
                break;
            case 0: // January
                switch (day)
                {
                    case 1: // New years day
                        // Set theme and background colour
                        document.body.style.backgroundColor = '#88575F';
                        theme = "Autumn";

                        // Set text colours
                        SetTextColour(
                            '#FFDDDD', // a
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
            case 1: // February
                switch (day)
                {
                    case 14:
                        // Set theme and background colour
                        document.body.style.backgroundColor = '#C9B1C7';
                        theme = "Valentine";

                        // Set text colours
                        SetTextColour(
                            '#FFDDDD', // a
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
                        break;
                }
                break;
            case 8: // September
                // Set theme and background colour
                document.body.style.backgroundColor = '#88575F';
                theme = "Autumn";

                // Set text colours
                SetTextColour(
                    '#FFDDDD', // a
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
                break;
            case 9: // October
                switch (day)
                {
                    case 1: // Birthday
                        // Set theme and background colour
                        document.body.style.backgroundColor = '#101030';
                        theme = "Birthday";

                        // Set text colours
                        SetTextColour(
                            '#7F7FFF', // a
                            '#D8D8FF', // p
                            '#D8D8FF', // ul
                            '#D8D8FF', // li
                            '#D8D8FF', // h1
                            '#D8D8FF', // h2
                            '#D8D8FF', // h3
                            '#D8D8FF', // h4
                            '#D8D8FF', // h5
                            '#D8D8FF' // h6
                            );
                        break;
                    case 31: // Halloween
                        // Set theme and background colour
                        document.body.style.backgroundColor = '#2E364E';
                        theme = "Halloween";

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
                        break;
                    default:
                        // Set theme and background colour
                        document.body.style.backgroundColor = '#88575F';
                        theme = "Autumn";

                        // Set text colours
                        SetTextColour(
                            '#FFDDDD', // a
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
                        break;
                }
                break;
            case 10: // November
                // Set theme and background colour
                document.body.style.backgroundColor = '#88575F';
                theme = "Autumn";

                // Set text colours
                SetTextColour(
                    '#FFDDDD', // a
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
                break;
            case 11: // December
                if (day < 27) // Christmas zone
                {
                    // Set theme and background colour
                    document.body.style.backgroundColor = '#BCEDE3';
                    theme = "Christmas";

                    // Set text colours
                    SetTextColour(
                        '#F00000', // a
                        '#1F1111', // p
                        '#1F1111', // ul
                        '#1F1111', // li
                        '#1F1111', // h1
                        '#1F1111', // h2
                        '#1F1111', // h3
                        '#1F1111', // h4
                        '#1F1111', // h5
                        '#1F1111' // h6
                        );
                }
                else if (day == 31) // New year's eve
                {
                // Set theme and background colour
                document.body.style.backgroundColor = '#FFFFFF';
                theme = "NewYearEve";
                
                // Set text colours
                SetTextColour(
                    '#444444', // a
                    '#000000', // p
                    '#000000', // ul
                    '#000000', // li
                    '#000000', // h1
                    '#000000', // h2
                    '#000000', // h3
                    '#000000', // h4
                    '#000000', // h5
                    '#000000' // h6
                    );
                }
                break;
        }
        break;
}

// Apply themes
if (theme != "")
{
    ApplyElementTheme("mainBodyC", theme);
    ApplyElementTheme("headingC", theme);
    ApplyElementTheme("titleC", theme);
    ApplyElementTheme("currentPageC", theme);
    ApplyElementTheme("siteTreeC", theme);
    ApplyElementTheme("headerItemC", theme);
    ApplyElementTheme("sectionC", theme);
    ApplyElementTheme("profileC", theme);
    ApplyElementTheme("imageRowC", theme);
    ApplyElementTheme("itemOverlayC", theme);
}

function ApplyElementTheme(elementName, theme)
{
    var elements = document.querySelectorAll("." + elementName);
    for (var i = 0; i < elements.length; i++)
    {
        elements[i].classList.remove(elementName);
        elements[i].classList.add(elementName + "_" + theme);
    }
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