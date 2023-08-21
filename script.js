// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    if (scoreCounter >= 8){
        document.getElementById("pass-end-screen").style.display = "flex"
    } else {
        document.getElementById("fail-end-screen").style.display = "flex"
    }
}
// END HERE

let questionBank = [
    [
        "The maximum number of students in a class is 30.", false
    ],
    [
        "Some delivery platforms used for online deliveries are Zoom, BigSky, and Google Meet.", true
    ],
    [
        "Synchronous sessions are scheduled classes that require your attendance as set by your professor.", true
    ],
    [
        "Students are not required to attend all class meetings in all their courses.", false
    ],
    [
        "Students shall be considered late if they arrive in class within the first 30 minutes of a 1-hour class", false
    ],
    [
        "Students who incur absences of more than 20% of the total course hours get a failing grade (R)", true
    ],
    [
        "Blended Delivery means you won’t have classes online but have full onsite classes.", false
    ],
    [
        "We still utilize the online setup to maximize the power and convenience of the online modality.", true
    ],
    [
        "The course syllabus provides essential information about the course, including its description, learning outcomes, structure, and plan.", true
    ],
]

function startGame() {
    hideStartScreen()
}

let scoreCounter = 0
let roundIndex = 0

const choiceButtonA = document.getElementById("choice-a")
const choiceButtonB = document.getElementById("choice-b")

const promptText = document.getElementById("prompt-text")

const scoreDisplay = document.getElementById("score")

function changeDisplay() {
    promptText.innerHTML = questionBank[roundIndex][0]
    score.innerHTML = "SCORE: " + scoreCounter
}

function selectChoiceA() {
     const choiceButtonA = true
    if (roundIndex <= 8 && questionBank[roundIndex][1] == true){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

function selectChoiceB() {
    const choiceButtonB = false
    if (roundIndex <= 8 && questionBank[roundIndex][1] == false){
        scoreCounter++
        roundIndex++
        changeDisplay()
    } else if (roundIndex == 9){
        endGame()
    } else {
        roundIndex++
        changeDisplay()
    }
}

choiceButtonA.addEventListener("click", selectChoiceA)
choiceButtonB.addEventListener("click", selectChoiceB)


