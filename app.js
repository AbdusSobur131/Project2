var ball1 = document.createElement('div');
ball1.style.width = '50px';
ball1.style.height = '50px';
ball1.style.backgroundColor ='purple';
ball1.style.borderRadius = '50%';
ball1.style.position = 'absolute';
ball1.style.top = '0px';
ball1.style.left = '0px';
document.body.appendChild(ball1);

var ball2 = document.createElement('div');
ball2.style.width = '50px';
ball2.style.height = '50px';
ball2.style.backgroundColor = 'purple';
ball2.style.borderRadius = '50%';
ball2.style.position = 'absolute';
ball2.style.top = '0px';
ball2.style.left = '0px';
document.body.appendChild(ball2);

var ball1_x = 0;
var ball1_y = 0;
var ball1_x_velocity = 1;
var ball1_y_velocity = 1;

var ball2_x = 0;
var ball2_y = 0;
var ball2_x_velocity = 1;
var ball2_y_velocity = 1;

function update() {
  ball1_x += ball1_x_velocity;
  ball1_y += ball1_y_velocity;
  ball1.style.left = ball1_x + 'px';
  ball1.style.top = ball1_y + 'px';

  ball2_x += ball2_x_velocity;
  ball2_y += ball2_y_velocity;
  ball2.style.left = ball2_x + 'px';
  ball2.style.top = ball2_y + 'px';

  if (ball1_x > window.innerWidth - 50) {
    ball1_x_velocity = -1;
  }
  if (ball1_x < 0) {
    ball1_x_velocity = 1;
  }
  if (ball1_y > window.innerHeight - 50) {
    ball1_y_velocity = -1;
  }
  if (ball1_y < 0) {
    ball1_y_velocity = 1;
  }

  if (ball2_x > window.innerWidth - 50) {
    ball2_x_velocity = -1;
  }
  if (ball2_x < 0) {
    ball2_x_velocity = 1;
  }
  if (ball2_y > window.innerHeight - 50) {
    ball2_y_velocity = -1;
  }
  if (ball2_y < 0) {
    ball2_y_velocity = 1;
  }

  window.requestAnimationFrame(update);
}

update();

