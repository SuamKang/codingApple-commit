
// 만약 탭이 4개 5개 더 늘어나도록 하기위해선
// 확장성있게 코드를 작성해야한다

// 좋은코드란
// 1. 원하는 기능이 잘 구현되었는가
// 2. 확장성좋은가
// 3. 나중에 관리가 쉬울 것인가
// 4. 성능문제 없는가




// 1. 첫번째 버튼 누르면 
// 버튼에 orange 클래스 추가하고
// 첫번째 컨텐츠에 show 클래스 추가시켜줘야한다
// 모든 버튼탭에 있는 orange 클래스 제거하고
// 마찬가지로 모든 컨텐츠의 show 클래스도 제거하자
// 즉 첫번째 버튼을 눌렸으니 첫번째만 클래스를 추가하고 나머지는 없애주는것이다.

// jQuery에서 $는 querySelectorAll의미와 같다. 그래서 클래스가 동일한 요소를 불러오는데 특정위치의 요소만 불러오고 싶다면 $()뒤에 .eq(n)를 추가해서 n번째요소를 꺼내쓸지 정해야한다.
// 바닐라Js에서 querySelectorAll()[0]하는것과 비슷함


// 자주 쓰이는 셀렉터는 변수설정해서 사용하자! 앞으로!
const tabBtn = $(".tab-button");
const tabContent = $(".tab-content");

// // 첫번째 버튼 누를때 첫번째 탭으로
// tabBtn.eq(0).on('click', ()=>{
//     tabBtn.removeClass('orange');
//     tabBtn.eq(0).addClass('orange');
//     tabContent.removeClass('show');
//     tabContent.eq(0).addClass('show');
// });

// // 두번째 버튼 누를때 두번째 탭으로
// tabBtn.eq(1).on('click', ()=>{
//     tabBtn.removeClass('orange');
//     tabBtn.eq(1).addClass('orange');
//     tabContent.removeClass('show');
//     tabContent.eq(1).addClass('show');
// });

// // 세번째 버튼 누를때 세번째 탭으로
// tabBtn.eq(2).on('click', ()=>{
//     tabBtn.removeClass('orange');
//     tabBtn.eq(2).addClass('orange');
//     tabContent.removeClass('show');
//     tabContent.eq(2).addClass('show');
// });

// 위 코드와 같이 복붙느낌의 반복되는 코드는 for반복문으로 줄여 사용할 수 있다.


// for(let i = 0; i < tabBtn.length; i++) {
//     tabBtn.eq(i).on('click', ()=>{
//         open(i)
//     });
// }

// 함수로 축약하기

function open (idx) {
    tabBtn.removeClass('orange');
    tabBtn.eq(idx).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(idx).addClass('show');
}

//  tab을 반복문이아닌 다른 방식으로 접근하기
// 이전에는 탭 버튼 하나하나 마다 이벤트 리스너를 설정해 주었다.
// 버튼 요소들을 포함하는 상위 요소에만 이벤트를 부착한다.(이벤트를 줄여준다)
// 왜냐면 이벤트리스너를 줄이게 되면 램 용량에 여유가 있어지며 성능적으로 이점이 발생해서그렇다
// 따라서 상위요소에만 이벤트를 부착하면 이벤트 버블링으로 인해 하위요소에 이벤트가 발생하면 상위요소이벤트가 발생하여 동작이 실행되게된다

// 상위요소에 클릭이벤트 부여
$('.list').click(function(e){
    // // 지금 누른게(event.target) 0번째 버튼이면 open(0)호출
    // if(e.target === document.querySelectorAll('.tab-button')[0]) open(0);
    // // 지금 누른게 1번째 버튼이면 open(1)호출
    // if(e.target === document.querySelectorAll('.tab-button')[1]) open(1);
    // // 지금 누른게 2번째 버튼이면 open(2)호출
    // if(e.target === document.querySelectorAll('.tab-button')[2]) open(2);

    // dataset으로 
    open(Number(e.target.dataset.id))
})


// dataset 문법

// html 요소안에 속성으로 정보를 저장해둘수 있다.
// <div data-데이터이름='값'></div>
// docuement.querySelector().dataset.데이터이름; 으로 호출하면 그 값의 정보를 출력할 수 있다.
// jQuery
// 입력 : $().data('데이터이름','값');
// 출력 : $().data('데이터이름');