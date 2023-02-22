// 버튼0 누르면
// 모든 에 붙은 orange 클래스명 제거
// 버튼0 누르면 orange클래스명추가
// 모든 div에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가

// for(let i=0; i< $('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     })
// }

//자바스크립트로 우에 바꾸냐 ㅡ.ㅡ tab-button.length를 콘솔로그찍어보라는데 
//나오는게없음 ㅠ 애플샘은 생자바는 여러개요소 한번에 선택해서 바꾸는 기능없다는데 뭐라는지모르겟슴
// for(let i=0; i < tab-button.length; i++) {
//     document.querySelector('.tab-button').addEventListener('click',function(){
//         document.querySelectorAll('.tab-button').classList.remove('orange');
//         document.querySelectorAll('.tab-button')[i].addClass('orange');
//         document.querySelectorAll('.tab-content').classList.remove('show');
//         document.querySelectorAll('.tab-content')[i].addClass('show');
//     })
// }

//하코사에서 받은 바닐라 자스로 만드는 탭(클래스를 제거할때 전부제거 해야 하기 때문에 다시 forEach를 돌려서 전부 제거 해줘야합니다)
let $tabButton = document.querySelectorAll('.tab-button');
let $tabContent = document.querySelectorAll('.tab-content');

$tabButton.forEach(($el,idx)=>{
    $el.addEventListener('click',()=>{
        $tabButton.forEach(($el,idx)=>{$el.classList.remove('orange')});
        $tabButton[idx].classList.add('orange');
        $tabContent.forEach(($el,idx)=>{$el.classList.remove('show')});
        $tabContent[idx].classList.add('show');
    });
});


//함수로 축약해보기(재사용하기편해서), 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘됨(파라미터 변수 바꿔줘야함)
// for(let i=0; i<3; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     })
// }

//이벤트리스너 1개만 쓰기(이벤트 버블링 효과때문에)
// $('.list').click(function(e){
//     //지금 누른 버튼에 숨겨져있는 data-id 활용하여 출력
//     console.log(e.target.dataset.id);
//     탭열기(e.target.dataset.id)
// })

// //함수로 만든거
// function 탭열기(숫자){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(숫자).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(숫자).addClass('show');
// }

