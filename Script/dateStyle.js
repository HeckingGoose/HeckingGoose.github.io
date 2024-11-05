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


function ApplyTheme()
{
    // Get themes
    var targetTheme = sessionStorage.getItem("targetTheme");
    var appliedTheme = sessionStorage.getItem("appliedTheme");

    // Check null, and update if needed
    if (targetTheme == null)
    {
        targetTheme = GenerateThemeString();
        sessionStorage.setItem("targetTheme", targetTheme);
    }
    if (appliedTheme == null)
    {
        appliedTheme = "";
        sessionStorage.setItem("appliedTheme", appliedTheme);
    }

    // Reset background
    var background = document.querySelectorAll(".backgroundC_DnD");
    for (var i = 0; i < background.length; i++)
    {
        background[i].classList.remove("backgroundC_DnD");
        background[i].classList.add("backgroundC");
    }

    // Apply theme colouring
    switch (targetTheme)
    {
        case "Halloween":
            // Set theme and background colour
            document.body.style.backgroundColor = '#2E364E';

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
        case "DnD":
            // Apply DnD theme background
            var background = document.querySelectorAll(".backgroundC");
            for (var i = 0; i < background.length; i++)
            {
                background[i].classList.remove("backgroundC");
                background[i].classList.add("backgroundC_DnD");
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
            break;
        case "Christmas":
            // Set theme and background colour
            document.body.style.backgroundColor = '#BCEDE3';

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
            break;
        case "Autumn":
            // Set theme and background colour
            document.body.style.backgroundColor = '#88575F';

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
        case "Valentine":
            // Set theme and background colour
            document.body.style.backgroundColor = '#C9B1C7';

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
        case "NewYearEve":
            // Set theme and background colour
            document.body.style.backgroundColor = '#FFFFFF';

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
            break;
        case "NewYearDay":
            // Set theme and background colour
            document.body.style.backgroundColor = '#88575F';

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
        case "Birthday":
            // Set theme and background colour
            document.body.style.backgroundColor = '#101030';

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
        case "Debtors":
            // Set theme and background colour
            document.body.style.backgroundColor = '#FFFFFF';

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
            break;
        case "Dark":
            // Set theme and background colour
            document.body.style.backgroundColor = '#2E2E2E';

            // Set text colours
            SetTextColour(
                '#DDDDDD', // a
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
            document.body.style.backgroundColor = '#FFFFFF';

            // Set text colours
            SetTextColour(
                '#000000', // a
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
            break;
    }

    // Apply CSS theme styling
    ApplyElementTheme("mainBodyC", targetTheme, appliedTheme);
    ApplyElementTheme("headingC", targetTheme, appliedTheme);
    ApplyElementTheme("titleC", targetTheme, appliedTheme);
    ApplyElementTheme("currentPageC", targetTheme, appliedTheme);
    ApplyElementTheme("siteTreeC", targetTheme, appliedTheme);
    ApplyElementTheme("headerItemC", targetTheme, appliedTheme);
    ApplyElementTheme("sectionC", targetTheme, appliedTheme);
    ApplyElementTheme("profileC", targetTheme, appliedTheme);
    ApplyElementTheme("imageRowC", targetTheme, appliedTheme);
    ApplyElementTheme("itemOverlayC", targetTheme, appliedTheme);

    // Store applied theme
    sessionStorage.setItem("appliedTheme", targetTheme);
}

function GenerateThemeString()
{
    // Declare output
    var output = "";

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
                        output = "NewYearDay";
                    }
                case 1: // February
                    switch (day)
                    {
                        case 14:
                            output = "Valentine";
                    }
                    break;
                case 8: // September
                    output = "Autumn";
                    break;
                case 9: // October
                    switch (day)
                    {
                        case 1: // Birthday
                            output = "Birthday";
                            break;
                        case 12: // Debtor's Grimoire release date
                            output = "Debtors";
                            break;
                        case 31: // Halloween
                            output = "Halloween";
                            break;
                        default: // Autumn theme
                            output = "Autumn";
                            break;
                    }
                    break;
                case 10: // November
                    output = "Autumn";
                    break;
                case 11: // December
                    if (day < 27) // Christmas zone
                    {
                        output = "Christmas";
                    }
                    else if (day == 31) // New year's eve
                    {
                        output = "NewYearEve";
                    }
                    break;
            }
            break;
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
            output = "DnD";
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

    // Store it
    sessionStorage.setItem("targetTheme", output);
}

function ApplyElementTheme(elementName, theme, currentTheme)
{
    // Current item string
    var currentElementID = elementName;
    // If a theme is currently applied
    if (currentTheme.length != "")
    {
        currentElementID += "_" + currentTheme;
    }

    var elements = document.querySelectorAll("." + currentElementID);
    for (var i = 0; i < elements.length; i++)
    {
        elements[i].classList.remove(currentElementID);

        // If there is a theme
        if (theme.length > 0)
        {
            elements[i].classList.add(elementName + "_" + theme);
        }
        else
        {
            // Otherwise apply no theme
            elements[i].classList.add(elementName);
        }
    }
}

function SetTextColour(
    aC,
    pC,
    ulC,
    liC,
    h1C,
    h2C,
    h3C,
    h4C,
    h5C,
    h6C
    )
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