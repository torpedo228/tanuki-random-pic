const imageArray = [
  "./img/小狸貓偕同未整形二狸貓.png",
  "./img/小狸貓可愛愛.png",
  "./img/狸貓企鵝.png",
  "./img/狸貓俯視.png",
  "./img/狸貓倒下.png",
  "./img/狸貓兔子.png",
  "./img/狸貓哦.png",
  "./img/狸貓在星龜身上黏嘴巴.png",
  "./img/狸貓地瓜堆.png",
  "./img/狸貓好乖.png",
  "./img/狸貓屁眼.png",
  "./img/狸貓彩虹兔兔.png",
  "./img/狸貓整張貓嘴.PNG",
  "./img/狸貓機型貓嘴.png",
  "./img/狸貓生氣.png",
  "./img/狸貓背影.png",
  "./img/狸貓與星龜會合.png",
  "./img/狸貓蓋頭.png",
  "./img/狸貓裝死.png",
  "./img/狸貓跩貓嘴.png",
  "./img/狸貓長方形.png",
  "./img/狸貓降臨.png",
  "./img/狸貓難過.png",
  "./img/狸貓鼓鼓臉頰.png",
  "./img/禿頭海豹吸血鬼.png",
  "./img/禿頭海豹呆滯.png",
  "./img/禿頭海豹與帥氣星龜.png",
  "./img/禿頭海豹興奮.png",
  "./img/禿頭海豹貓嘴2.png"
];


const image = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => generateRandomPictureAndGetImageName(imageArray));

function generateRandomPictureAndGetImageName(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  image.setAttribute("src", array[randomNum]);
  
  
  let imgName = array[randomNum].replace(/^.*[\\\/]/, '').split('.')
  document.getElementById("imgName").innerText = imgName
  [0]
  console.log( document.getElementById("imgName").innerText );
}

window.onload = () => generateRandomPictureAndGetImageName(imageArray);




