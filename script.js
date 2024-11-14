function eightBall() {

    const responseName= document.getElementById('name');
    const responseQuestion = document.getElementById('question');
    const responseAnswer = document.getElementById('answer');


    var userName = prompt('What is your name?');
    var userQuestion = prompt("What is your question for the Magic 8-Ball?");
    var output = document.getElementById('output');
    var ball = document.querySelector('.ball');

    if (userName) {
        responseName.innerHTML = 'Name: ' + userName;
    } else {
        responseName.innerText = '';
    }

    if (userQuestion) {
        responseQuestion.innerHTML = `${userName}'s asked: ${userQuestion}`;

        var eightBall = Math.floor(Math.random() * 8);
        var response = '';

        switch (eightBall) {
            case 7: response = 'It is certain'; break;
            case 6: response = 'It is decidedly so'; break;
            case 5: response = 'Reply hazy, try again'; break;
            case 4: response = 'Cannot predict now'; break;
            case 3: response = 'Do not count on it'; break;
            case 2: response = 'My sources say no'; break;
            case 1: response = 'Outlook not so good'; break;
            case 0: response = 'Signs point to yes'; break;
            default: response = 'Invalid number';
        }

        responseAnswer.innerText = response;


    } else {
        userQuestionDisplay.innerText = '';
        output.innerText = 'You didn\'t ask a question. Please try again!';
    }
}