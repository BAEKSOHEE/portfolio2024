
$(document).ready(function(){

    //인트로 얼굴 이미지 마우스 오버시 변경
    const i_face = $('.profile1 > .face > #chef_face1');
    i_face.mouseenter(function(){
        $(this).attr("src","images/profile_img2.png");
    i_face.mouseleave(function(){
        $(this).attr("src","images/profile_img1.png");
        });
    });
    
    


    // 마우스 오버, 아웃 시 이미지 자동 스크롤
    // 메뉴 PC
    const mock_tool = $('.mock_tool');
    mock_tool.mouseenter(function(){
        $('.num_mock_pc').stop().animate({'top':'-760px'},3000);
        $('.dw_mock_pc').stop().animate({'top':'-873px'},4000);
        $('.ha_mock_pc').stop().animate({'top':'-578px'},4000);
        $('.kb_mock_pc').stop().animate({'top':'-95px'},1000);
        $('.chuk_mock_pc').stop().animate({'top':'-550px'},4000);
        $('.edu_mock_pc').stop().animate({'top':'-114px'},1000);

    });
    mock_tool.mouseleave(function(){
        $('.num_mock_pc').stop().animate({'top':'0px'},0);
        $('.dw_mock_pc').stop().animate({'top':'0px'},0);
        $('.ha_mock_pc').stop().animate({'top':'0px'},0);
        $('.kb_mock_pc').stop().animate({'top':'0px'},0);
        $('.chuk_mock_pc').stop().animate({'top':'0px'},0);
        $('.edu_mock_pc').stop().animate({'top':'0px'},0);
    });
    // 메뉴 TA
    const mock_ta = $('.mock_ta');
    mock_ta.mouseenter(function(){
        $('.num_mock_ta').stop().animate({'top':'-490px'},2000);
        $('.dw_mock_ta').stop().animate({'top':'-620px'},3000);
        $('.ha_mock_ta').stop().animate({'top':'-370px'},3000);
    });
    mock_ta.mouseleave(function(){
        $('.num_mock_ta').stop().animate({'top':'0px'},0);
        $('.dw_mock_ta').stop().animate({'top':'0px'},0);
        $('.ha_mock_ta').stop().animate({'top':'0px'},0);
    });
    // 메뉴 MO
    const mock_mo = $('.mock_mo');
    mock_mo.mouseenter(function(){
        $('.num_mock_mo').stop().animate({'top':'-410px'},2000);
        $('.dw_mock_mo').stop().animate({'top':'-1220px'},6000);
        $('.kb_mock_mo').stop().animate({'top':'-28px'},1000);
        $('.ha_mock_mo').stop().animate({'top':'-410px'},3000);
        
    });
    mock_mo.mouseleave(function(){
        $('.num_mock_mo').stop().animate({'top':'0px'},0);
        $('.dw_mock_mo').stop().animate({'top':'0px'},0);
        $('.kb_mock_mo').stop().animate({'top':'0px'},0);
        $('.ha_mock_mo').stop().animate({'top':'0px'},0);
        
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

// 모달창
let popup = `
<div class="p_modal">
    <div class='banner'>
        <h2>notice</h2>
        <p>본 사이트는 상업적 목적이 아닌<br>
        개인 포트폴리오 용도로 제작되었으며,<br>
        <b>1920*1080 해상도에 최적화되어있습니다.</b><br>
        
        <span>또한, 본 사이트의 내용은 계속 수정중입니다.<br>
        부족한 부분이 있더라도 양해 부탁드리겠습니다.</span>
        </p>
        <br>
        <input type="checkbox" id="ch">
        <label for="ch">오늘은 그만 보기</label>
        <input type="button" value="닫기" id="c_btn">

        </div>
    </div>
    `
$('body').append(popup);

// 현재 브라우저에 쿠키 popup의 값이 none이면 팝업을 나오지 않게 한다.
if ($.cookie('popup') == 'none') {
$('.p_modal').hide();
}

// 체크박스 변수
let $ex = $('.p_modal #ch');

// 체크박스에 사용자가 체크를 했는지 안했는지 확인하기 위한 함수를 작성
function closePopup() {
if ($ex.is(':checked')) { // 체크박스에 체크되었다면
$.cookie('popup', 'none', { expires: 1, path: '/' });
}
$('.p_modal').hide(); // 쿠키를 생성하고 종료한다.
}

// 닫기 버튼 클릭 시 해당함수를 호출하여 모달윈도 닫기
$('.p_modal #c_btn').click(function () {
closePopup();
});



});
