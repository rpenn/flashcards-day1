var app = angular.module('FlashCards', []);

app.controller('FlashCardController', function($scope) {
	// removed the original flashcard, since this FlashCardController
	// will only be used to define methods, not as data/object storage.

	$scope.answerQuestion = function (theAnswer) {
		// changed this to pass 'answer.correct' (from line 23, index.html) as a parameter into our
		// answerQuestion function.
	    $scope.answered = true;
	    $scope.answeredCorrectly = theAnswer; //this may seem somewhat counter-intuitive that we read 
	    // the variable from index.html to be used as a parameter in public/app.js instead of just within
	    // public/app.js, but I think it's the point of the modularity of controllers, that we can define
	    // various controllers and because they're modular, we can simply pull variables from our html file.
	};
});

app.controller('MainController', function($scope) {
	$scope.flashCards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true },
            { text: 'Something lame, who cares, whatever.', correct: false },
            { text: 'Some kind of fish, right?', correct: false }
        ]
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false },
            { text: 'A function that allows me to manage a scope', correct: true },
            { text: 'An Angular template', correct: false }
        ]
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false },
            { text: 'It looks for variables in HTML', correct: false },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
        ]
    }
	];
});