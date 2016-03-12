(function(){
	var questions = Array.from(document.querySelectorAll('.question-list__question'))

	questions.map(function(element) {
		element.addEventListener('click', function(e){
			var href = element.getAttribute('href');
			var target = document.getElementById(href.replace('#', ''));

			target.classList.toggle('hidden');

			e.preventDefault();
		});
	});
}());