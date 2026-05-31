// Variables
var [lightButton, themeButton] = GetThemeButtons();


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

function SetThemeButton(theme)
{
    // Check null
    if (themeButton == null)
    {
        // Fetch references
        [lightButton, themeButton] = GetThemeButtons();
    }

    // If still null give up
    if (themeButton == null)
    {
        return;
    }

    // If themes are being used
    if (theme == "y")
    {
        // Set to enable themes button
        themeButton.src = addonToGetToRoot + "Img/UI/ThemeButton_Enabled.png";
    }
    else
    {
        // Set to disable themes button
        themeButton.src = addonToGetToRoot + "Img/UI/ThemeButton_Disabled.png";
    }
}

function SetLightnessButton(lightness)
{
    // Check null
    if (lightButton == null)
    {
        // Fetch references
        [lightButton, themeButton] = GetThemeButtons();
    }

    // If still null give up
    if (lightButton == null)
    {
        return;
    }

    // If in light theme
    if (lightness == "light")
    {
        // Set to light theme button
        lightButton.src = addonToGetToRoot + "Img/UI/LightThemeButton.png";
    }
    else
    {
        // Set to dark theme button
        lightButton.src = addonToGetToRoot + "Img/UI/DarkThemeButton.png";
    }
}

function GetThemeButtons()
{
    var lightButton = document.getElementById("InvertLightnessButton");
    var themeButton = document.getElementById("InvertThemeButton");
    return [lightButton, themeButton];
}