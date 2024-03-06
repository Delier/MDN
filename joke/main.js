const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText  = `今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。
`;
const insertX  = [`怪兽威利`,`大老爹`,`圣诞老人`];

const insertY = [`肯德基`,`迪士尼乐园`,`白宫`];

const insertZ = [`自燃了`,`在人行道化成了一坨泥`,`变成一条鼻涕虫爬走了`];


let newStroy = ``;

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result);

function result() {
  newStroy = storyText;
  if(customName.value !== '') {
    let name = customName.value;
    newStroy = newStroy.replaceAll("李雷",name);
  }

  if(document.getElementById("american").checked) {
    let weight = Math.round(130 * 2.20462);
    newStroy = newStroy.replaceAll("130 公斤",`${weight} 磅`)
    let temperature = Math.round(34*1.8+32);
    newStroy = newStroy.replaceAll("34 摄氏度",`${temperature} 摄氏度`)
  }

  xItem = randomValueFromArray(insertX);
  yItem = randomValueFromArray(insertY);
  zItem = randomValueFromArray(insertZ);

  newStroy = newStroy.replaceAll(":inserta:",xItem);
  newStroy = newStroy.replaceAll(":insertb:",yItem);
  newStroy = newStroy.replaceAll(":insertc:",zItem);
  story.textContent = newStroy;
  story.style.visibility = 'visible';
}