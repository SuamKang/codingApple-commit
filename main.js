//열기
$("#open").on("click", () => {
$("#alert").css('display','block');
$("#title").html("히스토리 입니다");
});
$("#open2").on("click", () => {
$("#alert").css('display','block');
$("#title").html("상품 페이지입니다");
});
$("#open3").on("click", () => {
$("#alert2").css('display','block');
$("#title2").html("정보 페이지입니다");
});

//닫기
$("#close1").on("click", () => {
$("#alert").css('display','none');
});
$("#close2").on("click", () => {
$("#alert2").css('display','none');
});

// 모달창은 전체 블랙배경위에 흰색모달창으로 구성되어있음
//로그인 버튼 누르면 모달창 열리기(show클래스를 모달창에 붙이기)
$("#logIn").on("click", () => {
$(".black-bg").addClass("show");
});

// 닫기 누르면 모달창 닫히고 배경
$("#close").on("click", () => {
$(".black-bg").removeClass("show");
});

// 네비게이션바 토글 버튼
$(".navbar-toggler").on("click", () => {
$(".list-group").toggleClass("show");
});

//전송버튼 눌렀을때, input창에 입력한 값이 공백이면 -> 알림창띄우기
//폼 전송 기본 속성 막기 e.preventDefault()
//아이디 입력칸 띄우면 '아이디입력하세요'
//비번 입력칸 띄우면 '비번 입력하세요'
// + 비밀번호 자릿수 조건 추가

// 정규표현식을 사용한 이메일형식 검사 추가!
// 과제) 비번입력도 영어 대문자가 적어도 1개(최소1개)있는지
document.querySelector('form').addEventListener('submit', (e)=>{
    let email = document.querySelector('#email').value;
    let pw = document.querySelector('#pw').value;
    // if(email === ''){
    //     e.preventDefault();
    //     alert('아이디를 입력하세요')}
    // 이메일 형식 검사하기 위한 정규식 작성(aaaa@bbb.ccc형태)
    if(!(/\S+@\S+\.\S+/.test(email))){ // 이메일 형식이 아니면 (false가 나오면)
        e.preventDefault(); // 폼전송 막음
        alert('올바른 이메일 형식이 아닙니다.')
    }
    // 대문자가 적어도 1개 있는지
    if(!(/A-Z/.test(pw))){
        alert('적어도 대문자 1개는 들어가야지')
    }
    if(pw === ''){
        e.preventDefault();
        alert('비밀번호를 입력하세요')}
    if(pw.length < 8){
        e.preventDefault();
        alert('비밀번호는 8자리 이상 입력해야합니다!')
    }
})


// 다크모드 라이트모드 변경 토글 만들기

// 뱃지 클릭횟수 변수설정
let count = 0;
// 클릭할때마다 count 1씩 증가
$('.badge').on('click',()=>{
count++; 
// 클릭횟수가 홀수면 다크모드
if(count % 2 === 1){
    $('.badge').html('Light🔄')
    $('body').toggleClass('bg-dark') // 실제 배경 다크모드 body태그의 속성을 움직여주면된다.
    $('nav').toggleClass('navbar-dark bg-dark') // nav바도 다크모드
}
// 클릭횟수가 짝수면 라이트모드
if(count % 2 === 0){
    $('.badge').html('Dark🔄')
    $('body').toggleClass('bg-dark') // 배경 라이트모드
    $('nav').toggleClass('navbar-dark bg-dark') // nav바도 라이트모드
    }
})

// -----------------------------------------------------------

// Q. 타이머 만들기
// 숙제: div안에 "5초이내 구매시 사은품 증정"이라는 문자에서 1초마다 숫자 '5'라는 문자를 1씩 감소하게 만들어야한다.
// 감소하다 0이 되면, div박스를 안보이게 처리해야한다.

// 힌트 : '5'라는 문자만 따로 span태그로 떼어 분리후 적용시켜보자

// todo
// 1초마다 span안에 있는 문자타입의 숫자인 5가 줄어들어야함 ->count--
// 줄어들 카운터를 미리 5로 세팅해주고 조건에 맞으면 1감소하는 코드를 넣어주자
let setCount = 5;
let timer = setInterval(function(){
    setCount--;
    if(setCount >= 0){
        $('#sec').html(setCount);
    } else{
        clearTimeout(timer);
        $('.alert-danger').hide();
    }
},1000);

// ----------------------------------------------------------

// 케러셀 만들기


// 2번 버튼 클릭시 2번이미지 화면으로 이동시키기
// 전체 컨테이너 박스를 왼쪽으로 -100vw 이동시키는 코드 구현해주면 된다. 그럼 3번째는 전체 컨테이너에 -200vw에 위치하고 있으니 그리 바꾸면 됨

// 1번버튼으로 눌렀을때 첫번째 이미지로 오게
$(".slide-1").on('click', ()=>{
    $(".slide-container").css("transform","translateX(0vw)")
});
// 2번버튼 눌렀을 때 두번째 이미지로 오게
$(".slide-2").on('click', ()=>{
    $(".slide-container").css("transform","translateX(-100vw)")
    now++; // 이동후 변수 바꿔줘야함
});
// 3번 버튼 눌렀을 때 세번째 이미지로 오게
$(".slide-3").on('click', ()=>{
    $(".slide-container").css("transform","translateX(-200vw)")
    now++;
});
// 4번 버튼 눌렀을 때 세번째 이미지로 오게
$(".slide-4").on('click', ()=>{
    $(".slide-container").css("transform","translateX(-300vw)")
    now++;
});
// 5번 버튼 눌렀을 때 세번째 이미지로 오게
$(".slide-5").on('click', ()=>{
    $(".slide-container").css("transform","translateX(-400vw)")
    now++;
});




// 이전 or 다음 버튼
let now = 1;// 현재 사진 

// 다음 버튼 누르면 다음으로 사진 이동(조건식적용)
// $(".next").on('click', ()=>{
//     if(now === 1){
//         // 2번사진 보여줌
//         $(".slide-container").css("transform","translateX(-100vw)");
//         now++; // 여기서 now는 2가 됨
//     }else if(now === 2){
//         // 3번사진 보여줌
//         $(".slide-container").css("transform","translateX(-200vw)");
//         now++; // 여기서 now는 3이 됨
//     } 
// });

// // 이전 버튼 누르면 이전으로 사진 이동
// $(".before").on('click', ()=>{
//     if(now === 3){
//         // 2번사진 보여줌
//         $(".slide-container").css("transform","translateX(-100vw)");
//         now--; // 여기서 now는 2가 됨
//     }else if(now === 2){
//         // 1번사진 보여줌
//         $(".slide-container").css("transform","translateX(0vw)");
//         now--; // 여기서 now는 1이 됨
//     }
// });

// 확장성 좋게 코드 짜기
// 만약 사진이 여러개 더 추가 된다고 했을땐?
// 규칙이 존재함
// 지금사진이 1이면 translateX(-100vw)
// 지금사진이 2이면 translateX(-200vw)
// 지금사진이 3이면 translateX(-300vw)

// 다음버튼 누를때
$(".next").on('click', ()=>{
    $('.slide-container').css("transform",`translateX(-${now}00vw)`)
    // 제일 마지막 사진위치에서 다음버튼 눌르면 넘어감 이거 해결
    // now변수 조건걸어서 마지막 사진위치에서는 증가 안되게 
    if(now === 4){
        $(".next").attr("disabled","disabled"); // 버튼 비활성화 시킴
    }else{
        now++;
    }
});

// 이전버튼 누를때
$(".before").on('click', ()=>{
    $('.slide-container').css("transform",`translateX(-${now}00vw)`)
    now--;
});


// ----------------------------------------------------------

// 함수 리턴문법 & 소수점 다루기

// 소수점 반올림하는 메서드
// Number객체의 내장메서드인 .toFixed() -> 반환값이 문자로 나옴
// parseFloat(num) // 문자형태의 숫자를 찐 숫자로

function vat(n){
    let round = (n * 1.3).toFixed(2); // 소수2째자리까지 반올림되서 나옴
    return parseFloat(round); 
}

// console.log(vat(3500));



// 숙제

// 1. 분과 초를 인자로 받는 함수를 만들고 입력된 분과 초를 ms단위로 바꿔 출력해야함

function ms단위로 (min, sec) {
    // 입력된 min을 sec로 만들어서 변수 할당
    // 초단위로 만든 분과 두번째 sec를 더해서 변수에 저장
    // 그걸 * 1000 해서 리턴
    let minSec = min*60;
    let total = sec + minSec;
    return total*1000;
}

console.log(ms단위로(1,30));


// 2. 가격을 파라미터로 입력시 10%할인가를 리턴하는 함수 구현하기
// 첫번째 인자로 가격(Nmber) 두번째 인자로 첫구매여부(boolean)

function discount (price, isFirst){
    // 먼저 구매여부가 처음이면(true) 할인가 0.1 에 추가로 1.5를 곱함
    // 처음아니면(false) 그냥 0.1 만 곱해서 리턴

    if(isFirst === true){
        return parseFloat((price * 0.9 - 1.5).toFixed(2));
    }else{
        return parseFloat((price * 0.9).toFixed(2));
    }
}

console.log(discount(70,false)); // 63
console.log(discount(10,true)); // 7.5


// ----------------------------------------------------------

// 스크롤 이벤트

// nav바 메뉴 html 재사용

// window.scrollTo(x,y): 강제로 좌표위치(x,y)로 스크롤 하여 도착함
// window.scrollBy(x,y): 강제로 현재 위치서부터 좌표만큼 스크롤 하기
// window.scrollX : 유저가 얼마나 스크롤바를 가로로 옮겼나
// window.scrollY : 유저가 얼마나 스크롤바를 내렸나 -> scrollX,Y는 window객체에만 활용가능 (일반 태그엔 적용X)
// 그럴땐 아래 메서드 사용 (세 속성 모두정수값으로 표현됨)
// document.scrollTop : 유저가 내린 높이(스크롤바 내린 양)
// document.scrollHeight : 실제 높이(스크롤 가능한 높이)
// document.clientHeight : 눈에보이는높이()




// jQery 로 하면
// $(window).scrollTop() 현재 스크롤바 위치 출력 === window.scrollY

// 숙제
// 1. 스크롤을 100만큼 내렸을 때 제목 글자 크기가 20px로 작아지도록 
// 다시 올라가면 원래크기로!!


$(window).on('scroll', ()=>{
    // 스크롤 될때,
    // 만약 밑으로 100만큼 위치했을때부터 제목 글자 줄어들게
    // 다시 올리면 커지게
    if(window.scrollY > 100){
        $('.navbar-brand').css('font-size','20px');
    } else {
        document.querySelector('.navbar-brand').style.fontSize = '40px'
    }
})
