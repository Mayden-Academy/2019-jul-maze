var gameStarted = false

$('.start-zone').each(function (index, startZone) {
    startZone.addEventListener('mouseover', function () {
        if (!gameStarted) {
            $('.lose').each(function (index, hitboxes) {
                hitboxes.addEventListener('mouseenter', loseGame)
            })
            $('.end-zone').on('mouseover', winGame)
            $('#twelfth-section').on('mouseover', moveTail)
            gameStarted = true
        }
    })
})

function loseGame() {
    if(gameStarted) {
        $('.show-popup').show().load('partials/popups.html', {}, function () {
            $("#bone-img").attr({
                "src": "images/lose-bone.svg",
                "alt": "Lose popup background"
            })
            $('.pop-up-container').css('background-color', '#f9f871')
            $('#pop-up-msg')
                .text("You lose!")
                .css('color', '#f9f871')
            $('#reset-button').on('click', resetGame)
        })
        stopBrushes()
        gameStarted = false
    }
}

function winGame() {
    if(gameStarted) {
        $('.show-popup').show().load('partials/popups.html', {}, function () {
            $('#pop-up-msg').text("You win!")
            $('#reset-button').css('background', '#ff64a7').css('color', '#f9f871').on('click', resetGame)
        })
        stopBrushes()
        gameStarted = false
    }
}

function moveTail() {
    $('#tail').css({'animation-play-state': 'running', '-webkit-animation-play-state': 'running'})
}

function stopBrushes() {
    $('#second-brush').hide()
}

function resetGame() {
    $('.container').load('partials/splash.html')
}
