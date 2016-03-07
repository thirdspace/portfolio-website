/***********************************************
* Easy Email Scrambler script- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var maildivider="[at]" //enter divider you use to divide your email address strings

for (i=0; i<=(document.links.length-1); i++){
if (document.links[i].href.indexOf(maildivider)!=-1)
document.links[i].href=document.links[i].href.split(maildivider)[0]+"@"+document.links[i].href.split(maildivider)[1]
}
