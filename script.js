
$(document).scroll(function() {
    var winHeight = $( document ).height();
    var y = $(document).scrollTop(), //get page y value 
        header = $("#navbar");
    if(y >= winHeight)  {
        header.css({position: "fixed", "top" : "0", "left" : "0"});
    } else {
        header.css("position", "relative");
    }
});
    
    

$(document).ready(function() {    
    
    let firstLetterTiming = function(letter, timing) {
            setTimeout(function() {
                document.getElementById('first').innerHTML = letter;
            }, timing);
        },
        
        secondLetterTiming = function(letter, timing) {
            setTimeout(function() {
                document.getElementById('second').innerHTML = letter;
            }, timing);
        },
        
        thirdLetterTiming = function(letter, timing) {
            setTimeout(function() {
                document.getElementById('third').innerHTML = letter;
            }, timing);
        },
        
        loop = function() {
            setInterval(function() {firstLetterChange()}, 12000);
            setInterval(function() {secondLetterChange()}, 12000);
            setInterval(function() {thirdLetterChange()}, 12000);
        };

    function firstLetterChange() {
        firstLetterTiming('D', 1020);
        firstLetterTiming('W', 1120);
        firstLetterTiming('D', 2950);
        firstLetterTiming('W', 3000);
        firstLetterTiming('D', 3050);
        firstLetterTiming('A', 6800);
        firstLetterTiming('D', 9000);
        firstLetterTiming('W', 12000);
    }

    function secondLetterChange() {
        secondLetterTiming('N', 7000);
        secondLetterTiming('&', 7800);
        secondLetterTiming('N', 7900);
        secondLetterTiming('&', 8000);
        secondLetterTiming('E', 9000);
    }

    function thirdLetterChange() {
        thirdLetterTiming('S.', 2950);
        thirdLetterTiming('B', 3000);
        thirdLetterTiming('S.', 3050);
        thirdLetterTiming('D', 6800);
        thirdLetterTiming('V.', 9000);
        thirdLetterTiming('S.', 9888);
        thirdLetterTiming('V.', 10080);
        thirdLetterTiming('B', 12000);
    }

    firstLetterChange();
    secondLetterChange();
    thirdLetterChange();
    loop();
    
   
    $('#bars').click(function(){
        $('.dropdown').toggle('dropMenuDown')
    })

    $('#projectInfoBox1').mouseenter(function() {
        $('#project1').addClass('imgFocusFilter');
        $('#projectInfoBox1').css('opacity', '1');
        setTimeout(function() {
            $('#projectInfo1').fadeIn(1000);
        }, 10);
    });
    $('#projectInfoBox1').mouseleave(function() {
        $('#project1').removeClass('imgFocusFilter');
        $('#projectInfo1').css('display', 'none');
        $('#projectInfoBox1').css('opacity', '0');
    });
    
    $('#projectInfoBox2').mouseenter(function() {
        $('#project2').addClass('imgFocusFilter');
        $('#projectInfoBox2').css('opacity', '1');
        $('#projectInfoBox2').css('opacity', '1');
        setTimeout(function() {
            $('#projectInfo2').fadeIn(1000);
        }, 10);
    });
    $('#projectInfoBox2').mouseleave(function() {
        $('#project2').removeClass('imgFocusFilter');
        $('#projectInfo2').css('display', 'none');
        $('#projectInfoBox2').css('opacity', '0');
    });
    
    $('#projectInfoBox3').mouseenter(function() {
        $('#project3').addClass('imgFocusFilter');
        $('#projectInfoBox3').css('opacity', '1');
        $('#projectInfoBox3').css('opacity', '1');
        setTimeout(function() {
            $('#projectInfo3').fadeIn(1000);
        }, 10);
    });
    $('#projectInfoBox3').mouseleave(function() {
        $('#project3').removeClass('imgFocusFilter');
        $('#projectInfo3').css('display', 'none');
        $('#projectInfoBox3').css('opacity', '0');
    });
    
    $('#projectInfoBox4').mouseenter(function() {
        $('#project4').addClass('imgFocusFilter');
        $('#projectInfoBox4').css('opacity', '1');
        $('#projectInfoBox4').css('opacity', '1');
        setTimeout(function() {
            $('#projectInfo4').fadeIn(1000);
        }, 10);
    });
    $('#projectInfoBox4').mouseleave(function() {
        $('#project4').removeClass('imgFocusFilter');
        $('#projectInfo4').css('display', 'none');
        $('#projectInfoBox4').css('opacity', '0');
    });
    
    $('#projectInfoBox5').mouseenter(function() {
        $('#project5').addClass('imgFocusFilter');
        $('#projectInfoBox5').css('opacity', '1');
        $('#projectInfoBox5').css('opacity', '1');
        setTimeout(function() {
            $('#projectInfo5').fadeIn(1000);
        }, 10);
    });
    $('#projectInfoBox5').mouseleave(function() {
        $('#project5').removeClass('imgFocusFilter');
        $('#projectInfo5').css('display', 'none');
        $('#projectInfoBox5').css('opacity', '0');
    });
    
    $('#projectInfoBox6').mouseenter(function() {
        $('#project6').addClass('imgFocusFilter');
        $('#projectInfoBox6').css('opacity', '1');
        $('#projectInfoBox6').css('opacity', '1');
        setTimeout(function() {
            $('#projectInfo6').fadeIn(1000);
        }, 10);
    });
    $('#projectInfoBox6').mouseleave(function() {
        $('#project6').removeClass('imgFocusFilter');
        $('#projectInfo6').css('display', 'none');
        $('#projectInfoBox6').css('opacity', '0');
    });



})




