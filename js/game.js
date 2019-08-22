var gameStart = new CustomEvent(
    'gameStart', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

$('.start-zone').each(function(index, starts) {
    starts.addEventListener('mouseover', function () {
        $(document).trigger('gameStart')
    })
})

$(document).on('gameStart', function() {
    $('.lose').each( function(index, hitboxes) {
        hitboxes.addEventListener('mouseenter', function() {
            $('.show-popup').show().load('partials/popups.html', {}, function() {
                $("#bone-img").attr({ 
                    "src": "images/lose-bone.svg", 
                    "alt": "Lose popup background"
                })
                $('.pop-up-background').css('background-color','#f9f871')
                $('#pop-up-msg').text("You lose!")
                $('#pop-up-msg').css('color', '#f9f871')
            })
        })
    })
}) 

$(document).on('gameStart', function() {
    $('.end-zone').on('mouseover', function () {
        $('.show-popup').show().load('partials/popups.html', {}, function () {
            $('#pop-up-msg').text("You win!")
        })
    })
})

$(function() {
    function firstBrushLoop() {
        $('#first-brush')
            .animate({bottom: 250}, 1000)
            .animate({bottom: 150}, 1000, 'linear', firstBrushLoop)
    }
    firstBrushLoop()
})

$(function() {
    function secondBrushLoop() {
        $('#second-brush')
            .animate({left: 380}, 1000)
            .animate({left: 550}, 200, 'linear', secondBrushLoop)
    }
    secondBrushLoop()
})

$(function() {
    function thirdBrushLoop() {
        $('#third-brush')
            .animate({right: 350}, 400)
            .animate({right: 290}, 400, 'linear', thirdBrushLoop)
    }
    thirdBrushLoop()
})