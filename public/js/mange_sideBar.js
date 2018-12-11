window.onload=mangeInit;

function mangeInit() {
  $('.hamburger').on('click',function () {
   hamburger_cross();
  });

  //   //点击切换不同的显示
  // let Ul = document.getElementById("Ul");
  // let oLi = Ul.getElementsByTagName("li");
  // let oA = Ul.getElementsByTagName("a");
  // let oDiv = document.getElementsByClassName("showIt");
  // for(let i = 1; i < oA.length; i++) {
  //
  //   oA[i].onclick = function () {
  //       for(let j = 0; j < oDiv.length; j++){
  //         oDiv[j].style.display = 'none';
  //         oLi[j+1].className = '';
  //       }
  //       oDiv[i-1].style.display="block";
  //       oLi[i].className = 'current';
  //   }
  //
  // }
  //
  //   //实现各部分的搜索功能
  //   let getUser = document.getElementById("findUser");

}

function hamburger_cross() {
  let trigger = $('.hamburgar');

  $('#wrapper').toggleClass('toggled');
  trigger.toggleClass('is-open');
  trigger.toggleClass('is-close');
}
