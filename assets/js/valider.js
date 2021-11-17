function valider()
{
var input = document.form1.motSecret.value;
if (input === "SPACETIC")
{
    window.location = "file:///C:/Users/DELL-10/Desktop/ETIC/DEV TEAM 2021_2022/Website WD/qrcode.html"
return true;
}
else 
{
alert('oops ! mauvais code ');
return false; 
}
}