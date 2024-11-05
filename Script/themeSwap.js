// Check storage
var seasonal = sessionStorage.getItem("usingSeasonal", "y");
var lightness = sessionStorage.getItem("lightness", "light");

// Check for null
if (seasonal == null)
{
    seasonal = "y";
    sessionStorage.setItem("usingSeasonal", seasonal);
}
if (lightness == null)
{
    lightness = "light";
    sessionStorage.setItem("lightness", lightness);
}

// Apply theme
ReApplyThemes();


function InvertTheme()
{

}
function InvertLightness()
{

}
function ReApplyThemes()
{
    // Apply themes
    ApplyTheme();
    ApplyProfileTheme();
}