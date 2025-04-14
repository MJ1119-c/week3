let button1, button2;
let sprite1Img, sprite2Img;
let frame1 = 0, frame2 = 0;
let sprite1Frames = [];
let sprite2Frames = [];
let iframe;

function preload() {
  sprite1Img = loadImage('00.png', () => console.log('00.png loaded'), () => console.error('Failed to load 00.png'));
  sprite2Img = loadImage('01.png', () => console.log('01.png loaded'), () => console.error('Failed to load 01.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  button1 = createButton('自我介紹');
  button1.position(50, 50);
  button1.size(100, 50);
  button1.style('font-size', '20px');
  button1.mousePressed(() => showIframe('https://mj1119-c.github.io/20250317/'));
  
  button2 = createButton('作品簡介');
  button2.position(180, 50);
  button2.size(100, 50);
  button2.style('font-size', '20px');
  button2.mousePressed(() => showIframe('https://mj1119-c.github.io/20250310/'));
  
  // 將精靈圖分割成小圖
  for (let i = 0; i < 6; i++) {
    sprite1Frames.push(sprite1Img.get(i * 38, 0, 38, 34));
    sprite2Frames.push(sprite2Img.get(i * 36, 0, 36, 36));
  }
}

function draw() {
  background(255);
  
  if (mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 100) {
    // 顯示第一個圖片精靈動畫
    image(sprite1Frames[frame1], 50, 120);
    if (frameCount % 10 === 0) { // 調整動畫更新速度
      frame1 = (frame1 + 1) % 6;
    }
  } else if (mouseX > 180 && mouseX < 280 && mouseY > 50 && mouseY < 100) {
    // 顯示第二個圖片精靈動畫
    image(sprite2Frames[frame2], 180, 120);
    if (frameCount % 10 === 0) { // 調整動畫更新速度
      frame2 = (frame2 + 1) % 6;
    }
  }
}

function showIframe(url) {
  if (iframe) {
    iframe.remove();
  }
  iframe = createElement('iframe');
  iframe.attribute('src', url);
  iframe.position(windowWidth * 0.1, windowHeight * 0.2);
  iframe.size(windowWidth * 0.8, windowHeight * 0.6);
}
