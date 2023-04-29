// const str =
//   "`,1,2,3,4,5,6,7,8,9,0,-,=,Backspace,Tab,q,w,e,r,t,y,u,i,o,p,[,],\\,Capslock,a,s,d,f,g,h,j,k,l,;,',leftshift,z,x,c,v,b,n,m,,,.,/,rigthshift,leftctrl,win,leftalt,space,rigthalt,rigthctrl";

const arr = [
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
  ["Capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  ["leftshift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "rigthshift"],
  ["leftctrl", "win", "leftalt", "space", "rigthalt", "rigthctrl"],
];

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.prepend(wrapper);

arr.forEach((el) => {
  let rows = document.createElement("div");
  rows.classList.add("row");
  wrapper.append(rows);
  el.forEach((el) => {
    let btn = document.createElement("button");
    switch (el) {
      case "Tab":
        btn.classList.add("key", "tab");
        break;
      case "leftshift":
        btn.classList.add("key", "leftshift");
        break;
      case "rigthshift":
        btn.classList.add("key", "rigthshift");
        break;
      case "Enter":
        btn.classList.add("key", "enter");
        break;
      case "Backspace":
        btn.classList.add("key", "back");
        break;
      case "Capslock":
        btn.classList.add("key", "capslock");
        break;
      case "leftctrl":
        btn.classList.add("key", "leftctrl");
        break;
      case "win":
        btn.classList.add("key", "win");
        break;
      case "leftalt":
        btn.classList.add("key", "leftalt");
        break;
      case "space":
        btn.classList.add("key", "space");
        break;
      case "rigthalt":
        btn.classList.add("key", "rigthalt");
        break;
      case "rigthctrl":
        btn.classList.add("key", "rigthctrl");
        break;
      case "\\":
        btn.classList.add("key", "line");
    }
    btn.classList.add(`key`);
    btn.textContent = el;
    btn.value = el;
    rows.append(btn);
  });
});

let textArea = document.createElement("textarea");
textArea.cols = "80";
textArea.rows = "7";
wrapper.prepend(textArea);
