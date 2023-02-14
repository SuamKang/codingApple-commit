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
        console.log('젤밑에 감소')
        clearTimeout(timer);
        $('.alert-danger').hide();
    }
},1000);

// ----------------------------------------------------------




