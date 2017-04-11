const BALL_RADIUS = 10;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

export default class Pong {
	drawBackground() {
		const { width, height } = this.canvas;

		this.ctx.fillStyle = '#dbdbdb';
		this.ctx.fillRect(0, 0, width, height);
	}

	drawBall() {
		const { width, height } = this.canvas;

		this.ctx.fillStyle = '#000000';
		this.ctx.strokeStyle = '#000000';
		this.ctx.beginPath();
		this.ball.x += this.ball.xspeed;
		this.ball.y += this.ball.yspeed;
		this.ctx.arc(this.ball.x, this.ball.y, 10, 0, Math.PI*2, true);
		this.ctx.fill();

		if (this.ball.x >= width || this.ball.x <= 0) {
			this.ball.xspeed = this.ball.xspeed * -1;
		}

		if (this.ball.y >= height || this.ball.y <= 0) {
			this.ball.yspeed = this.ball.yspeed * -1;
		}
	}

	drawTopPaddle() {
		this.ctx.fillStyle = '#0000FF';
		this.ctx.fillRect(this.topPaddle.x, 10, 100, 10);
	}

	drawBottomPaddle() {
		this.ctx.fillStyle = '#FF0000';
		this.ctx.fillRect(this.bottomPaddle.x, this.canvas.height - 20, 100, 10);
	}

	hitDetect() {
		const { width, height } = this.canvas;

		if ((this.ball.y + BALL_RADIUS) >= this.bottomPaddle.y) {
			if (this.bottomPaddle.x <= this.ball.x && this.ball.x <= (this.bottomPaddle.x + PADDLE_WIDTH)) {
				console.log('bottomPaddle hit', this.ball.x, this.ball.y, this.bottomPaddle.x, this.bottomPaddle.y);

				this.ball.yspeed = this.ball.yspeed * -1;
				this.ball.y = this.bottomPaddle.y - BALL_RADIUS;
				return;
			}
		}

		if ((this.ball.y - BALL_RADIUS) <= (this.topPaddle.y + PADDLE_HEIGHT)) {
			if (this.topPaddle.x <= this.ball.x && this.ball.x <= (this.topPaddle.x + PADDLE_WIDTH)) {
				console.log('topPaddle hit', this.ball.x, this.ball.y, this.topPaddle.x, this.topPaddle.y);

				this.ball.yspeed = this.ball.yspeed * -1;
				this.ball.y = this.topPaddle.y + BALL_RADIUS + PADDLE_HEIGHT;
				return;
			}
		}

		if ((this.ball.x + BALL_RADIUS) >= width || (this.ball.x - BALL_RADIUS) <= 0) {
			this.ball.xspeed = this.ball.xspeed * -1;
		}

		if (this.ball.y > (height + BALL_RADIUS) || this.ball.y < (0 - BALL_RADIUS)) {
			// this.initGameObjects();
		}
	}

	keyboardEvents() {
		const { width } = this.canvas;

		if (this.leftArrowHit) {
			this.bottomPaddle.x -= 6;
			this.leftArrowHit = false;
		}

		if (this.rightArrowHit) {
			this.bottomPaddle.x += 6;
			this.rightArrowHit = false;
		}

		if (this.bottomPaddle.x <= 0) {
			this.bottomPaddle.x = 0;
		}

		if (this.bottomPaddle.x >= (width - PADDLE_WIDTH)) {
			this.bottomPaddle.x = width - PADDLE_WIDTH;
		}
	}

	computerAI() {
		const { width } = this.canvas;

		if (this.ball.yspeed < 0) {
			if (this.ball.x < (this.topPaddle.x + PADDLE_WIDTH / 2)) {
				this.topPaddle.x -= 3;
			} else {
				this.topPaddle.x += 3;
			}
		}

		if (this.topPaddle.x <= 0) {
			this.topPaddle.x = 0;
		}

		if (this.topPaddle.x >= (width - PADDLE_WIDTH)) {
			this.topPaddle.x = width - PADDLE_WIDTH;
		}
	}

	pongGame() {
		this.keyboardEvents();
		this.computerAI();
		this.drawBackground();
		this.drawTopPaddle();
		this.drawBottomPaddle();
		this.drawBall();
		this.hitDetect();
	}

	keypressHandler(event) {
		const { keyCode } = event;
		console.log(keyCode);

		if (keyCode === 39) {
			this.rightArrowHit = true;
		}

		if (keyCode === 37) {
			this.leftArrowHit = true;
		}
	}

	initialise(canvas) {
		this.canvas = canvas;
		this.keyHandler = this.keypressHandler.bind(this);

		document.addEventListener('keydown', this.keyHandler, false);

		this.ctx = this.canvas.getContext('2d');
		this.ball = {};
		this.topPaddle = {};
		this.bottomPaddle = {};
		this.ball.x = 160;
		this.ball.y = 240;
		this.ball.xspeed = 2;
		this.ball.yspeed = 4;
		this.bottomPaddle.x = 0;
		this.bottomPaddle.y = 620;
		this.topPaddle.x = 0;
		this.topPaddle.y = 0;

		this.timer = setInterval(this.pongGame.bind(this), 1000/60);
	}

	destroy() {
		document.removeEventListener('keydown', this.keyHandler, false);
		clearTimeout(this.timer);
	}
}

