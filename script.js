// const str =
//   "`,1,2,3,4,5,6,7,8,9,0,-,=,Backspace,Tab,q,w,e,r,t,y,u,i,o,p,[,],\\,Capslock,a,s,d,f,g,h,j,k,l,;,',leftshift,z,x,c,v,b,n,m,,,.,/,rigthshift,leftctrl,win,leftalt,space,rigthalt,rigthctrl";

const enArr = [
  ["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"],
  [
    "Tab",
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "\\",
    "del",
  ],
  ["Capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  [
    "leftshift",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    ".",
    "/",
    "∧",
    "rigthshift",
  ],
  [
    "leftctrl",
    "win",
    "leftalt",
    "space",
    "rigthalt",
    "rigthctrl",
    "<",
    "∨",
    ">",
  ],
];

const rusArr = [
  ["`", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "=", "Backspace"],
  [
    "Tab",
    "й",
    "ц",
    "у",
    "к",
    "е",
    "н",
    "г",
    "ш",
    "щ",
    "з",
    "х",
    "ъ",
    "\\",
    "del",
  ],
  ["Capslock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  [
    "leftshift",
    "я",
    "ч",
    "с",
    "м",
    "и",
    "т",
    "ь",
    "б",
    "ю",
    ".",
    "∧",
    "rigthshift",
  ],
  [
    "leftctrl",
    "win",
    "leftalt",
    "space",
    "rigthalt",
    "rigthctrl",
    "<",
    "∨",
    ">",
  ],
];

let enType = true;
let ruType = false;

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.prepend(wrapper);

function init(arr) {
  arr.forEach((el) => {
    let rows = document.createElement("div");
    rows.classList.add("row");
    wrapper.append(rows);
    el.forEach((el) => {
      let btn = document.createElement("button");
      btn.textContent = el;
      btn.classList.add(`key`);
      if (typeof el == "number") {
        btn.value = `Digit${el}`;
      }
      if (typeof el == "string") {
        btn.value = `Key${el.toUpperCase()}`;
      }
      switch (el) {
        case "Tab":
          btn.classList.add("key", "tab");
          btn.value = "Tab";
          break;
        case "leftshift":
          btn.classList.add("key", "leftshift");
          btn.value = "ShiftLeft";
          btn.textContent = "shift";
          break;
        case "rigthshift":
          btn.classList.add("key", "rigthshift");
          btn.value = "ShiftRight";
          btn.textContent = "shift";
          break;
        case "Enter":
          btn.classList.add("key", "enter");
          btn.value = "Enter";
          break;
        case "Backspace":
          btn.classList.add("key", "back");
          btn.value = "Backspace";
          break;
        case "Capslock":
          btn.classList.add("key", "capslock");
          btn.value = "CapsLock";
          break;
        case "leftctrl":
          btn.classList.add("key", "leftctrl");
          btn.value = "ControlLeft";
          btn.textContent = "ctrl";
          break;
        case "win":
          btn.classList.add("key", "win");
          break;
        case "leftalt":
          btn.classList.add("key", "leftalt");
          btn.value = "AltLeft";
          btn.textContent = "alt";
          break;
        case "space":
          btn.classList.add("key", "space");
          btn.value = "Space";
          btn.textContent = "";
          break;
        case "rigthalt":
          btn.classList.add("key", "rigthalt");
          btn.value = "AltRight";
          btn.textContent = "alt";
          break;
        case "rigthctrl":
          btn.classList.add("key", "rigthctrl");
          btn.value = "ControlRight";
          btn.textContent = "ctrl";
          break;
        case "\\":
          btn.classList.add("key", "line");
          btn.value = "Backslash";
          break;
        case "`":
          btn.value = "Backquote";
          break;
        case "[":
          btn.value = "BracketLeft";
          break;
        case "]":
          btn.value = "BracketRight";
          break;
        case "-":
          btn.value = "Minus";
          break;
        case "=":
          btn.value = "Equal";
          break;
        case ",":
          btn.value = "Comma";
          break;
        case ".":
          btn.value = "Period";
          break;
        case "/":
          btn.value = "Slash";
          break;
        case "del":
          btn.value = "Delete";
      }
      rows.append(btn);
    });
  });
}

init(enArr);

let textArea = document.createElement("textarea");
textArea.cols = "80";
textArea.rows = "7";
textArea.classList.add("text");
wrapper.prepend(textArea);

const container = document.querySelector(".wrapper");
const text = document.querySelector(".text");
const keys = document.querySelectorAll(".key");

// let shiftPress = false;
// function shiftDown() {
//   let shiftPress = !shiftPress;
//   if (shiftPress) {
//     keys.forEach((el) => {
//       el.textContent.toUpperCase();
//     });
//   }
// }

wrapper.addEventListener("click", (e) => {
  e.preventDefault();
  drawClick(e.target);
});

document.addEventListener("keydown", (e) => {
  text.focus();
  keys.forEach((el) => {
    el.classList.remove("active");
    if (e.code == el.value) {
      el.classList.add("active");
    }
  });
});

function drawClick(target) {
  keys.forEach((el) => {
    el.classList.remove("active");
  });
  if (
    target.classList == "wrapper" ||
    target.classList == "row" ||
    target.classList == "text"
  ) {
    return;
  }
  switch (target.value) {
    case "Backspace":
      Backspace();
      target.classList.add("active");
      break;
    case "Enter":
      text.value = text.value += "\n";
      target.classList.add("active");
      break;
    case "Space":
      text.value += " ";
      target.classList.add("active");
      break;
    case "Tab":
      text.value += "  ";
      target.classList.add("active");
      break;
    case "Delete":
      del();
      target.classList.add("active");
      break;

    default:
      text.value += target.textContent;
      target.classList.add("active");
  }
}

function capsLockToggle() {}

document.addEventListener("keydown", (e) => {
  console.log(e.code);
});

function getCaret(el) {
  if (el.selectionStart) {
    return el.selectionStart;
  } else if (document.selection) {
    el.focus();

    let r = document.selection.createRange();
    if (r == null) {
      return 0;
    }

    let re = el.createTextRange(),
      rc = re.duplicate();
    re.moveToBookmark(r.getBookmark());
    rc.setEndPoint("EndToStart", re);

    return rc.text.length;
  }
  return 0;
}

function resetCursor(txtElement, currentPos) {
  if (txtElement.setSelectionRange) {
    txtElement.focus();
    txtElement.setSelectionRange(currentPos, currentPos);
  } else if (txtElement.createTextRange) {
    let range = txtElement.createTextRange();
    range.moveStart("character", currentPos);
    range.select();
  }
}

function Backspace() {
  let currentPos = getCaret(text);
  let newText = text.value;

  let backSpace =
    newText.substr(0, currentPos - 1) +
    newText.substr(currentPos, newText.length);
  console.log(newText.substr(0, currentPos - 1));
  console.log(newText.substr(currentPos, newText.length));
  text.value = backSpace;

  resetCursor(text, currentPos - 1);
}

function del() {
  let currentPos = getCaret(text);
  let newText = text.value;
  let deleted =
    newText.substr(0, currentPos - 1) +
    newText.substr(currentPos, newText.length);
  text.value = deleted;
  resetCursor(text, currentPos);
}
