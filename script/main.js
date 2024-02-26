
$(document).ready(function(){




    // 마우스 오버, 아웃 시 이미지 자동 스크롤
    // 메뉴1 PC
    const mock_tool = $('.mock_tool');
    mock_tool.mouseenter(function(){
        $('#num_mock_pc').stop().animate({'top':'-1000px'},10000);
    });
    mock_tool.mouseleave(function(){
        $('#num_mock_pc').stop().animate({'top':'0px'},0);
    });
    // 메뉴1 TA
    const mock_ta = $('.mock_ta');
    mock_ta.mouseenter(function(){
        $('#num_mock_ta').stop().animate({'top':'-620px'},9000);
    });
    mock_ta.mouseleave(function(){
        $('#num_mock_ta').stop().animate({'top':'0px'},0);
    });
    // 메뉴1 MO
    const mock_mo = $('.mock_mo');
    mock_mo.mouseenter(function(){
        $('#num_mock_mo').stop().animate({'top':'-1300px'},10000);
    });
    mock_mo.mouseleave(function(){
        $('#num_mock_mo').stop().animate({'top':'0px'},0);
    });

    // 갤러리 텍스트 올라오기

    const g_img = $('.gallery > .g_all > ul > li');

    g_img.mouseenter(function(){
        $(this).find('.g_txt').stop().animate({'bottom':'0px'},300);
    });
    g_img.mouseleave(function(){
        $('.g_txt').stop().animate({'bottom':'-60px'},300);
    });

        
    // 갤러리 모달창
    const g_list = $('.gallery > .g_all > ul > li > a');

    g_list.click(function(){
        let img_src = $(this).attr('href');
        let title = $(this).find('span').text();

        console.log(img_src);
        
        let modal=`
        <div class="modal">
            <div class="center">
                <h3>${title}</h3>
                <img src=${img_src} alt="">
                <i class="fas fa-times"></i>
            </div>
        </div>
        `
        $('body').append(modal);

        $('.modal i.fa-times').click(function(){
            $('.modal').fadeOut();
            });

        return false;
    });

    // 브라우저 윈도우 세로스크롤 값을 사용하여 nav, top 나오고 숨기고 하기

    let scrollNT;
    const N_btn = document.querySelector('.gnb');
    const T_btn = document.querySelector('.top');

    window.addEventListener('scroll', function(){
        scrollNT = this.pageYOffset;
        // console.log(scrollNT); //700
        if(scrollNT>=700){
            N_btn.classList.add('act');
        }else{
            N_btn.classList.remove('act');
        }
        if(scrollNT>=700){
            T_btn.classList.add('act');
        }else{
            T_btn.classList.remove('act');
        }
    });

    // nav 클릭 시 해당 페이지로 이동
    let gnb = $('.gnb ul li');
    let i;

    gnb.click(function(){
        i=$(this).index();
        console.log(i);

        $('html, body').stop().animate({scrollTop:$('section').eq(i).offset().top},500,'easeOutQuint');

        return false;
    });

    // 인트로 랜덤 이미지
    let ran = Math.ceil(Math.random()*2);
    document.getElementById('r_img').src="./images/profile_img"+ran+".png";


});

