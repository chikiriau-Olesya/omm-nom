$(document).ready( () => {
	$('div.jGravity').on('click', () => { 
		$('body').jGravity({
			target: '.div__circle',
			ignoreClass: 'ignoreMe',
			weight: 20, 
			depth: 1,
			drag: true ,
		});
	});
});


