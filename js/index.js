/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Chris.js":
/*!**********************!*\
  !*** ./src/Chris.js ***!
  \**********************/
/***/ (() => {

eval("window.onload = function () {\r\n  let users = document.createElement('h1');\r\n  let bgg = document.querySelector('.ones');\r\n  let tree = document.querySelector('.twos');\r\n  let toys = document.querySelector('.thirds');\r\n  let audio = document.getElementById('audio')\r\n  let body = document.body\r\n  body.onclick = function() {\r\n    audio.play()\r\n  }\r\n  bgg.classList.add('bgg');\r\n  tree.classList.add('tree');\r\n  toys.classList.add('toys');\r\n  users.innerHTML = '@DanCheO';\r\n  users.classList.add('user_name');\r\n  document.body.appendChild(users);\r\n  // document.body.appendChild(canva)\r\n};\r\nconst canvas = document.querySelector('#snow');\r\nconst W = canvas.clientWidth;\r\nconst H = canvas.clientHeight;\r\n\r\n// 设置canvas画布大小\r\ncanvas.setAttribute('width', W);\r\ncanvas.setAttribute('height', H);\r\n\r\nconst ctx = canvas.getContext('2d');\r\n\r\nconst config = {\r\n  number: 200,\r\n  snowArr: [],\r\n  pic: 'https://www.deanhan.cn/wp-content/uploads/2017/12/snow.png',\r\n  speed: 0,\r\n};\r\nlet snowImg = new Image();\r\nsnowImg.src = config.pic;\r\n\r\nfor (let i = 0; i < config.number; i++) {\r\n  config.snowArr.push({\r\n    x: Math.random() * W,\r\n    y: Math.random() * H,\r\n    toX: Math.random(),\r\n    toY: Math.random() * 1 + 1,\r\n    size: Math.random() * 20 + 5,\r\n  });\r\n}\r\nconsole.log(config);\r\nconst dropAnimation = () => {\r\n  ctx.clearRect(0, 0, W, H);\r\n  for (let i = 0; i < config.snowArr.length; i++) {\r\n    let snow = config.snowArr[i];\r\n    // ctx.beginPath()\r\n    // ctx.arc(snow.x, snow.y, snow.size, 0, Math.PI * 2, true)\r\n    // ctx.fillStyle = \"#666\"\r\n    // ctx.fill()\r\n    ctx.drawImage(snowImg, snow.x, snow.y, snow.size, snow.size);\r\n\r\n    snow.x = snow.x > W ? 0 : snow.x + snow.toX;\r\n    snow.y = snow.y > H ? 0 : snow.y + snow.toY;\r\n  }\r\n  requestAnimationFrame(dropAnimation);\r\n};\r\nrequestAnimationFrame(dropAnimation);\r\n\n\n//# sourceURL=webpack://webpack/./src/Chris.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Chris.js"]();
/******/ 	
/******/ })()
;