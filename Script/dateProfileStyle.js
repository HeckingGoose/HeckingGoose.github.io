// Script uses theme generated from dateStyle.js
// It also inherits dates from dateStyle.js
// Autumn: September 1st - November 30th

// Get profile image
var profileImage = document.getElementById("profileImage");

function ApplyProfileTheme()
{
    // Check profile image not null
    if (profileImage == null)
    {
        return;
    }

    // Get theme
    var appliedTheme = sessionStorage.getItem("appliedTheme");
    if (appliedTheme == null)
    {
        appliedTheme = "";
        sessionStorage.setItem("appliedTheme", appliedTheme);
    }

    // Get whether we are using a theme and whether it's light theme
    var [seasonal, lightness] = GetStorage();
    
    // If we are using seasonal theming
    if (seasonal == "y")
    {
        // Pick image based on time of year
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
                                profileImage.src = "Img/Themes/NewYear/Profile.png";
                                break;
                        }
                        break;
                    case 1: // February
                        switch (day)
                        {
                            case 14: // Valentines
                                profileImage.src = "Img/Themes/Valentine/Profile.png";
                                break;
                        }
                        break;
                    case 3: //April
                        switch (day)
                        {
                            case 1: // April fools
                            profileImage.src = "Img/Themes/Fools/Profile.png";
                                break;
                        }
                        break;
                    case 8: // September
                        profileImage.src = "Img/Themes/Autumn/Profile.png";
                        break;
                    case 9: // October
                        switch (day)
                        {
                            case 1: // Birthday
                                profileImage.src = "Img/Themes/Birthday/Profile.png";
                                break;
                            case 12: // Debtor's Grimoire release date
                                profileImage.src = "Img/Themes/Debtors/Profile.png";
                                break;
                            case 31: // Halloween
                                profileImage.src = "Img/Themes/Halloween/Profile.png";
                                break;
                            default: // Autumn
                                profileImage.src = "Img/Themes/Autumn/Profile.png";
                                break;
                        }
                        break;
                    case 10: // November
                        profileImage.src = "Img/Themes/Autumn/Profile.png";
                        break;
                    case 11: // December
                        if (day < 25) // Run up to Christmas
                        {
                            profileImage.src = "Img/Themes/ChristmasLeadup/Profile.png";
                        }
                        else if (day == 25) // Christmas day
                        {
                            profileImage.src = "Img/Themes/Christmas/Profile.png";
                        }
                        else if (day == 26) // Boxing day
                        {
                            profileImage.src = "Img/Themes/ChristmasOver/Profile.png";
                        }
                        else if (day == 31) // New year's eve
                        {
                            profileImage.src = "Img/Themes/NewYearEve/Profile.png";
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
                // Apply DnD theme
                profileImage.src = "Img/Themes/DnD/Profile.gif";
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
    }
    // Otherwise pick light or dark
    else
    {
        if (lightness == "light")
        {
            profileImage.src = "Img/Themes/Default/Profile.png";
        }
        else
        {
            profileImage.src = "Img/Themes/Dark/Profile.png";
        }
    }
}