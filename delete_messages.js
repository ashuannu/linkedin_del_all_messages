var tot = $('.msg-conversation-listitem__link');
for (var i = 0; i < tot.length; i++){
    tot[i].click();
    opt = $('artdeco-dropdown-item');
    for(var j=0; j<opt.length; j++){
	    if(opt[j].innerHTML=="          Delete\n\n"){
	        opt[j].click();
	        $('button.js-msg-delete')[0].click();
	    }
	}
}