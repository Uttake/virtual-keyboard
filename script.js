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

let lang = true;
let caps = false;
let shift = false;

const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");
document.body.prepend(wrapper);

function init(arr) {
  document.querySelectorAll(".row").forEach((item) => {
    item.remove();
  });
  arr.forEach((el) => {
    let rows = document.createElement("div");
    rows.classList.add("row");
    wrapper.append(rows);
    el.forEach((el) => {
      let btn = document.createElement("button");
      btn.textContent = el;
      if (caps) {
        btn.textContent =
          typeof el == "string" && el.length == 1 ? el.toUpperCase() : el;
      }
      btn.classList.add(`key`);
      if (typeof el == "number") {
        // btn.value = `Digit${el}`;
        btn.value = el;
      }
      if (typeof el == "string") {
        // btn.value = `Key${el.toUpperCase()}`;
        btn.value = el;
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
          break;
        case "∧":
          btn.value = "ArrowUp";
          break;
        case "<":
          btn.value = "ArrowLeft";
          break;
        case "∨":
          btn.value = "ArrowDown";
          break;
        case ">":
          btn.value = "ArrowRight";
          break;
        case ";":
          btn.value = "Semicolon";
          break;
        case "'":
          btn.value = "Quote";
          break;
      }

      rows.append(btn);
    });
  });
}

if (lang) {
  init(enArr);
} else {
  init(rusArr);
}

let textArea = document.createElement("textarea");
textArea.cols = "80";
textArea.rows = "7";
textArea.classList.add("text");
wrapper.prepend(textArea);

const container = document.querySelector(".wrapper");
const text = document.querySelector(".text");
const keys = document.querySelectorAll(".key");

function shiftCase() {
  let btn = document.querySelectorAll(".leftshift, .rigthshift");
  btn.forEach((el) => {
    el.addEventListener("click", () => {
      capsLock();
      console.log("click");
    });
    el.removeEventListener("click", () => {
      capsLock();
      console.log("stop");
    });
  });
}

function drawClick() {
  wrapper.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;
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
        break;
      case "Enter":
        text.value = text.value += "\n";
        text.focus();
        break;
      case "Space":
        spaceBar();
        text.focus();
        break;
      case "Tab":
        tab();
        text.focus();
        break;
      case "Delete":
        del();
        break;
      case "ArrowLeft":
        leftPos();
        break;
      case "ArrowRight":
        rightPos();
        break;
      case "ArrowUp":
        upPos();
        break;
      case "ArrowDown":
        downPos();
        break;
      case "CapsLock":
        capsLock();
        break;
      case "ShiftLeft":
      case "ShiftRight":
        shiftCase();
        break;
      default:
        if (caps) {
          text.value += target.textContent.toUpperCase();
        } else {
          text.value += target.textContent.toLowerCase();
        }
    }
  });
}

drawClick();

function changeLang(e) {
  if (e.altKey && e.shiftKey) {
    lang = !lang;
    if (lang) {
      init(enArr);
      lang = true;
    } else {
      init(rusArr);
      lang = false;
    }
  }
}

document.addEventListener("keydown", (e) => {
  text.focus();
  if (e.code === "CapsLock") {
    capsLock();
  }
  changeLang(e);
  let keys = document.querySelectorAll(".key");
  keys.forEach((el) => {
    el.classList.remove("active");
    if (e.key == el.textContent) {
      el.classList.add("active");
    } else if (e.code == el.value) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }

    setTimeout(() => {
      el.classList.remove("active");
    }, 1000);
  });
});

// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });

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
    console.log(re);
    console.log(rc);
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
  text.value = backSpace;

  resetCursor(text, currentPos - 1);
}

function del() {
  let currentPos = getCaret(text);
  let newText = text.value;
  let deleted =
    newText.substr(0, currentPos) +
    newText.substr(currentPos + 1, newText.length);
  text.value = deleted;
  resetCursor(text, currentPos);
}

function leftPos() {
  let currentPos = getCaret(text);
  let newPos = currentPos - 1;
  if (currentPos == 1) {
    resetCursor(text, 0);
  }
  resetCursor(text, newPos);
}

function rightPos() {
  let currentPos = getCaret(text);
  let newPos = currentPos + 1;
  resetCursor(text, newPos);
}

function upPos() {
  let currentPos = getCaret(text);
  currentPos = 0;
  resetCursor(text, currentPos);
}

function downPos() {
  let newPos = text.value.length;
  resetCursor(text, newPos);
}

function capsLock() {
  caps = !caps;
  if (lang) {
    init(enArr);
  } else {
    init(rusArr);
  }
}

function tab() {
  let currentPos = getCaret(text);
  text.value =
    text.value.substr(0, currentPos) + "  " + text.value.substr(currentPos);
  let newPos = currentPos + 2;
  resetCursor(text, newPos);
}

function spaceBar() {
  let currentPos = getCaret(text);
  text.value =
    text.value.substr(0, currentPos) + " " + text.value.substr(currentPos);
  let newPos = currentPos + 1;
  resetCursor(text, newPos);
}
