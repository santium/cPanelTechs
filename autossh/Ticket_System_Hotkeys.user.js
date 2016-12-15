// ==UserScript==
// @name        Ticket System Hotkeys
// @namespace   staff.cpanel.net/staff/msg.cgi
// @description Various hotkeys for ticket actions
// @include     https://staff.cpanel.net/staff/msg.cgi?*
// @version     1.3
// @grant       none
// @updateurl    https://c.darenet.org/rigrassm/greasemonkey/raw/master/Ticket_System_Hotkeys.user.js    
// ==/UserScript==


$(document).keypress(function(e) {
    if (e.ctrlKey && String.fromCharCode(e.which) == 's'){
    
        var table = document.getElementsByTagName('body')[0].getElementsByTagName('table')[6].getElementsByTagName('td')[0];

        if (table.style.display == "") {
            table.style.display = 'none';
        }      
    
        else {
            table.style.display = '';
        }
    }
    
    if (e.ctrlKey && String.fromCharCode(e.which) == 'r'){
        var form_id = 'cpwhm_info_' + server_num
        console.log(form_id)
        var uri = document.getElementById(form_id).getElementsByTagName('a')[0].attributes[0].value
        console.log(uri)
        window.open(uri,"_self")
    }
    if (e.ctrlKey && String.fromCharCode(e.which) == 'w'){
        console.log("Opening WHM for server " + server_num)
        whm_login('/',server_num)
    }
});

