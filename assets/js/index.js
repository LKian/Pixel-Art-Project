

$("input[type='submit']").on('click',function(event) {
	event.preventDefault();
	$('#pixelCanvas').empty();
	const height = $('#inputHeight').val();
	const width = $('#inputWidth').val(); 
	console.log($('#colorPicker').val());
	makeGrid(height, width);

});

function makeGrid(height, width) {
	console.log(height, width);
	for (let y=0; y<height; y++) {
		$('#pixelCanvas').append($('<tr></tr>')); 
		for (let x=0; x<width; x++) {
			$('tr').last().append($('<td></td>'));
		}
	}
}

$('#pixelCanvas').on('mousedown mouseover', 'td', function(e) {
	if (e.buttons===1) {
	$(this).css('backgroundColor', $('#colorPicker').val());
}
})