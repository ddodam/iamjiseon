

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
  const showing = "showing";//showing string을 변수로 지정
  const firstPhoto = document.querySelector(".hello__photo:first-child");//왜?순서가 끝났을 때 다시 처음으로 돌리기 위해 따로 지정.

  function slide() {  
    const currentPhoto = document.querySelector(`.${showing}`);//.showing가 추가된 태그를 받아옴
    if(currentPhoto){//만약 현재 .showing이 추가된 currentPhoto가 있다면! 근데 null이므로 else실행될 것
      currentPhoto.classList.remove(showing);//.showing를 지우고

      const nextPhoto = currentPhoto.nextElementSibling;//currentPhoto의 다음 element를 찾아주는 메소드
          if(nextPhoto){//다음 element가 있으면
            nextPhoto.classList.add(showing);//.showing을 추가해라
          }
          else{//다음 element가 없다면(마지막 element)
            firstPhoto.classList.add(showing);//firstPhoto에 .showing을 추가해라
          }

    }else{
        firstPhoto.classList.add(showing);//firstPhoto에 .showing을 추가해라
      }
  }


    slide();//함수 호출 
  setInterval(slide,2000);//slide 함수를 반복하게 해줌


  // 스크롤 내리면 arrow 보이기
const arrow = document.querySelector('.arrow');

document.addEventListener('scroll',()=>{//scroll되면 다음처럼 움직여라
  if(window.scrollY>700){//scrollY:내가 얼마나 스크롤 되었는지 알려준다, 그래서 700보다 많이 스크롤되면
  arrow.classList.add('up');//arrow에 classlist를 추가해라
  }else{//그렇지 않으면
    arrow.classList.remove('up');///arrow에 classlist를 제거해라
  } 
});

//arrow클릭하면 #hello찾아가기
const hello = document.querySelector('#hello');
arrow.addEventListener('click',()=>{//arrow을 클릭하면

  function scrollIntoView(){
  hello.scrollIntoView({behavior : 'smooth'});//hello로 scroll되도록 지정
  }
  scrollIntoView();
});


