
$(document).ready(function(){

    //인트로 얼굴 이미지 마우스 오버시 변경
    const i_face = $('.profile1 > .face > #chef_face1');
    i_face.mouseenter(function(){
        $(this).attr("src","images/profile_img1.png");
    i_face.mouseleave(function(){
        $(this).attr("src","images/profile_img2.png");
        });
    });
    
    


    // 마우스 오버, 아웃 시 이미지 자동 스크롤
    // 메뉴1 PC
    const mock_tool = $('.mock_tool');
    mock_tool.mouseenter(function(){
        $('.num_mock_pc').stop().animate({'top':'-760px'},1000);
        $('.dw_mock_pc').stop().animate({'top':'-873px'},1000);
        $('.kb_mock_pc').stop().animate({'top':'-95px'},1000);
    });
    mock_tool.mouseleave(function(){
        $('.num_mock_pc').stop().animate({'top':'0px'},0);
        $('.dw_mock_pc').stop().animate({'top':'0px'},0);
        $('.kb_mock_pc').stop().animate({'top':'0px'},0);
    });
    // 메뉴1 TA
    const mock_ta = $('.mock_ta');
    mock_ta.mouseenter(function(){
        $('.num_mock_ta').stop().animate({'top':'-490px'},900);
        $('.dw_mock_ta').stop().animate({'top':'-620px'},900);
    });
    mock_ta.mouseleave(function(){
        $('.num_mock_ta').stop().animate({'top':'0px'},0);
        $('.dw_mock_ta').stop().animate({'top':'0px'},0);
    });
    // 메뉴1 MO
    const mock_mo = $('.mock_mo');
    mock_mo.mouseenter(function(){
        $('.num_mock_mo').stop().animate({'top':'-410px'},1000);
        $('.dw_mock_mo').stop().animate({'top':'-1220px'},1000);
        $('.kb_mock_mo').stop().animate({'top':'-28px'},1000);
    });
    mock_mo.mouseleave(function(){
        $('.num_mock_mo').stop().animate({'top':'0px'},0);
        $('.dw_mock_mo').stop().animate({'top':'0px'},0);
        $('.kb_mock_mo').stop().animate({'top':'0px'},0);
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

    // // 인트로 랜덤 이미지
    // let ran = Math.ceil(Math.random()*2);
    // document.getElementById('r_img').src="./images/profile_img"+ran+".png";

    $('main section').each(function(){
        // 개별적으로 Wheel 이벤트 적용
    $(this).on('mousewheel',function(e){
        
        var delta = 0;
        var moveTop = null;
        var boxMax = $("main section").length - 1;
        var winEvent = "";
        console.log(boxMax);
        
        if(!winEvent) { //만약에 이벤트가 발생하지 않는다면
        winEvent = window.event; //이벤트는 없다
        }
        if(winEvent.wheelDelta) { //만약에 이벤트에서 휠데이터값이 있다면
        delta = winEvent.wheelDelta / 120; //데이터값을 저장
        if(window.opera) {
            delta = -delta;
        }
        }          
        else if(winEvent.detail) { //그렇지 않으면
        delta = -winEvent.detail / 3; 
        }
            
        // 마우스휠을 위에서 아래로 이동(처음에서 다음박스로 이동)
        if(delta < 0) {
            // 마지막 BOX 보다 순서값이 작은 경우에 실행
            if($(this).index() < boxMax) {
                console.log("▼");
                if($(this).next() != undefined) {
                    moveTop =$(this).next().offset().top;
                }
            }
            // 마지막 section보다 더 오른쪽으로 이동하려고 하는 경우 알림창 출력
            else {
                // alert("마지막 페이지 입니다.");
                return false;
            }
        }
        // 마우스휠을 아래에서 위로 이동( 뒤에서 앞으로 이동)
        else {
            // 첫번째 section보다 순서값이 큰 경우에 실행
            if($(this).index() > 0) {
                console.log("▲");
                if($(this).prev() != undefined) {
                    moveTop =$(this).prev().offset().top;
                }
            }
            // 첫번째 section보다 더 위로 이동하려고 하는 경우 알림창 출력
            else {
                // alert("첫번째 페이지 입니다.");
                return false;
            }
        }
            //화면 이동 0.3초(300)
            $("html,body").stop().animate({scrollTop : moveTop + "px"}, 300);
        });
    });
    
    $(window).scroll(function(){
        var scrT=$(window).scrollTop()
    
    $('section').each(function(i){
        
        var top=$(this).offset().top;
    
        if(scrT>= top ){
        // $('').removeClass('on')
            $('.gnb ul li').removeClass('on')
                $('.gnb ul li').eq(i).addClass('on')
    
                // $(this).find('article').addClass('on')
        }
    });
});
});
