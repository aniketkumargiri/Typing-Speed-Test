const arrayOfWords =
    [
        "My name is Aniket Kumar Giri and I am a fronted developer. Currently I am learning ReactJS",
        "India is my country and all Indians are my brothers and sisters. I love my country.",
        "Currently I am working on a JavScript Project which checks the typing speed along with the accuracy",
        "This Website includes pure HTML, CSS & JavaScript and multiple concepts of it.",
        "This all above lines are the complete description of this project. Let's do it.",
        "When user pressed start button then only active the textarea else disabled it & vice-versa.",
        "Every time a new set of lines on top. Whenever a start buttton is pressed. Not the previous one.",
        "Get the time after you complete and change the button text to Done!",
        "Get the end time when user clicked on Done button. Find the total time taken.",
        "Find the total number of words on the arrayOfWords",
        "Find the speed of user and show it on top when user clicked on Done",
        "Then call the compareWords fun and find how many of the words are matching and how  many not.",
        "Finally display the result on top with speed and accuracy. That's all.",
        "The quick brown fox jump over a lazy dog!"
    ];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime;
let endTime;

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * arrayOfWords.length);
    msg.innerText = arrayOfWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item == words2[index]) {
            cnt++;
        }
    })

    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of " + words1.length + " words and the total number of errors are " + errorWords + ".");
}

const StopTyping = () => {
    let date = new Date();
    endTime = date.getTime();
    let totaltime = ((endTime - startTime) / 1000); // for converting ms to sec

    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totaltime) * 60);
    let finalMsg = " You typed total at " + speed + " words per minute.";

    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
}

btn.addEventListener('click', function () {
    if (this.innerText == 'Start') {
        typedWords.disabled = false;
        startTyping();
    }
    else if (this.innerText == "Done") {
        typedWords.disabled = true;
        btn.innerText = "Start";
        StopTyping();
    }
});