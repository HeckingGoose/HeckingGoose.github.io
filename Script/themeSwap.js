// Add check to only use local and session storage if available
/*
    V W3Schools example V

    if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    } else {
    // Sorry! No Web Storage support..
    }
*/

// Reset local themes
sessionStorage.setItem("appliedTheme", "");
sessionStorage.setItem("targetTheme", "");

// Apply theme
ReApplyThemes();

function GetStorage()
{
    // Check storage
    var seasonal = localStorage.getItem("usingSeasonal");
    var lightness = localStorage.getItem("lightness");

    // Check for null
    if (seasonal == null)
    {
        seasonal = "y";
        localStorage.setItem("usingSeasonal", seasonal);
    }
    if (lightness == null)
    {
        lightness = "light";
        localStorage.setItem("lightness", lightness);
    }
    return [seasonal, lightness];
}
function InvertTheme()
{
    // Fetch storage
    var [seasonal, lightness] = GetStorage();
    
    // Check if we are seasonal now
    if (seasonal == "y")
    {
        seasonal = "n";
        localStorage.setItem("usingSeasonal", seasonal);
    }
    else
    {
        seasonal = "y";
        localStorage.setItem("usingSeasonal", seasonal);
    }

    // Apply change
    ReApplyThemes();
}
function InvertLightness()
{
    // Fetch storage
    var [seasonal, lightness] = GetStorage();
    
    // Check if we are light theme now
    if (lightness == "light")
    {
        lightness = "dark";
        localStorage.setItem("lightness", lightness);
    }
    else
    {
        lightness = "light";
        localStorage.setItem("lightness", lightness);
    }

    // Apply change
    ReApplyThemes();
}
function ReApplyThemes()
{
    // Fetch storage
    var [seasonal, lightness] = GetStorage();

    // If we are using seasonal themes
    if (seasonal == "y")
    {
        // Get theme string
        GenerateThemeString();
    }
    else
    {
        // If we are using light theme
        if (lightness == "light")
        {
            // Set theme to none (default is light)
            sessionStorage.setItem("targetTheme", "");
        }
        // If we are using dark theme
        else
        {
            // Set theme to dark
            sessionStorage.setItem("targetTheme", "Dark");
        }
    }

    // Apply theme
    ApplyTheme();
    SetLightnessButton(lightness);
    SetThemeButton(seasonal);
    try
    {
        ApplyProfileTheme();
    }
    catch{}
}