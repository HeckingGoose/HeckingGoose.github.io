// Fetch date
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();

// Fetch classes/ids
var mainBody = document.querySelector('.mainBody');

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
                        document.body.style.backgroundColor = "#000000";
                        mainBody.classList.remove('mainBody');
                        mainBody.classList.add('mainBody_Halloween');
                }
        }
        break;
}