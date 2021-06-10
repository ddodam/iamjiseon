

// const navbarMenu = document.querySelector('.navbar__menu');

// navbarMenu.addEventListener("click",(event) => {
//   scrollIntoView('#life');
  
// });

// function scrollIntoView(selector) {
//   const scrollTo = document.querySelector(selector);
//   scrollTo.scrollIntoView({behavior : 'smooth'});
// }



const navbarMenu = document.querySelectorAll('.navbar__menu');//li list 불러온다

for(let i=0; i<navbarMenu.length; i++){ //불러온 list를 따로 떼어준다
    const menuitem = navbarMenu[i]//navbarmenu 배열을 menuitem변수에 할당하고 

  menuitem.addEventListener("click",(event) => { //menuitem이 클릭되면 scrollintoview함수가 실행되도록 
    const link = event.target.dataset.link; //data-link값으로 할당한 id값을 변수로 지정
    const id = document.querySelector(link);//id값을 따로 불러와야하는 불편함을 막기 위해서 

    function scrollIntoView(selector) {//함수선언
      id.scrollIntoView({behavior : 'smooth'});//작동시 smooth하게 동작하도록 도와주는 구문
    }
    scrollIntoView(id);//함수호출할 때 변수로 지정한 link값을 넣어준다.
  });
  }



  //#hello에 img slide 넣기!
  const showing = "showing";//.showing을 변수로 지정
  const firstPhoto = document.querySelector(".hello__photo:first-child");//왜?순서가 끝났을 때 다시 처음으로 돌리기 위해 따로 지정.

  function slide() {  
    const currentPhoto = document.querySelector(`.${showing}`);//.showing이 추가되었는지 판별하기 위해서 변수에 할당
    if(currentPhoto){//<1>만약 현재 .showing이 추가된 currentPhoto가 있다면! 근데 null이므로 else실행될 것
      currentPhoto.classList.remove(showing);//.showing를 지우고

      const nextPhoto = currentPhoto.nextElementSibling;//currentPhoto의 다음 element를 찾아주는 메소드
          if(nextPhoto){//다음 element가 있으면
            nextPhoto.classList.add(showing);//.showing을 추가해라
          }else{//다음 element가 없다면(마지막 element)
            firstPhoto.classList.add(showing);//첫번째 element에 .showing 추가해라
          }

    }else{
        firstPhoto.classList.add(showing);//firstPhoto에 .showing을 추가해라
      }
  }


    slide();//함수 호출 
  setInterval(slide,2000);//slide 함수를 반복하게 해줌