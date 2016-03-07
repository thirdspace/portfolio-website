function mailpage()
{
mail_str = "mailto:?subject=Check out the " + document.title;
mail_str += "&body=I thought you might be interested in the " + document.title;
mail_str += ". You can view it at, " + location.href;
location.href = mail_str;
}