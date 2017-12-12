(function (win,doc){
    function change(){
        doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
    }
    change();
    win.addEventListener('resize',change,false);
})(window,document);
$(function(){
	$('#jiaoyu').toggle(function(){
		$('.jiaoyu-list').slideDown()
	},function(){
		$('.jiaoyu-list').slideUp()
	})
	$('#xinli').toggle(function(){
		$('.xinli-list').slideDown()
	},function(){
		$('.xinli-list').slideUp()
	})
	$('#falv').toggle(function(){
		$('.falv-list').slideDown()
	},function(){
		$('.falv-list').slideUp()
	})
})