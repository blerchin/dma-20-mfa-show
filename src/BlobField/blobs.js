import paper from "paper";

import Ball from "./ball";

export default class Blobs {
	constructor(artists, { onArtistHovered, onArtistClicked }) {
		console.log("Blobs#constructor");
		this.artists = artists;
		this.balls = [];
		this.numBalls = artists.length;
		this.viewRatio = 0.75; // Ball will occupy viewRatio * viewArea of window
		this.squeezeFactor = 0.3; // How squeeshy balls can be
		this.animationDuration = 250;
		this.mouseBall = null;
		this.mouseCurrX = 0;
		this.mouseCurrY = 0;
		this.mouseTargetX = 0;
		this.mouseTargetY = 0;
		this.mouseRadiusMultiplier = 1.5; // Hidden mouse ball radius is * by this value
		this.defaultEasing = 0.03; // Cursor position easing
		this.slowSimEasing = this.defaultEasing / 30; // Cursor position easing on hover
		this.opacity = 0.8;
		this.hoverFadedOpacity = 0.2;
		this.hoverActiveOpacity = 1;
		this.isSlowSim = false;
		this.collapsed = false;
		this.onArtistHovered = onArtistHovered;
		this.onArtistClicked = onArtistClicked;
	}

	B(idx) {
		return this.balls[idx];
	}

	setIsCollapsed(val) {
		this.collapsed = val;
		this.recalcCanvasSize();
		this.recalcRadii();
	}

	calcCollapsedRadius() {
		let radius;
		let orentation = window.innerWidth > window.innerHeight;
		let totalLength = orentation ? window.innerHeight : window.innerWidth;
		radius = totalLength / (this.numBalls * 2);
		return radius;
	}

	recalcRadii() {
		for (let i = 0; i < this.balls.length; i++) {
			this.balls[i].radius = this.calcRadius(i);
		}
	}

	calcRadius(idx) {
		const viewArea = window.innerWidth * window.innerHeight * this.viewRatio;
		let radius;
		if (this.collapsed && idx !== 0) {
			radius = this.calcCollapsedRadius();
		} else {
			radius = Math.sqrt(viewArea / this.numBalls / Math.PI);
			radius += Math.random() * (this.squeezeFactor * radius);
			if (idx === 0)
				radius *= this.mouseRadiusMultiplier;
		}
		return radius;
	}

	setup() {
		const mouseBall = new Ball(
			this.calcRadius(0),
			new paper.Point(0, 0),
			new paper.Point(0, 0)
		);
		mouseBall.radius = this.calcRadius(0);
		mouseBall.path.opacity = 0;
		mouseBall.path.isMouse = true;
		mouseBall.isVertical = window.innerWidth > window.innerHeight;
		mouseBall.setIdx(0);
		this.balls.push(mouseBall);

		for (let i = 0; i < this.numBalls; i++) {
			const position = paper.Point.random().multiply(paper.view.size);
			const force = new paper.Point({
				angle: 1 * Math.random(),
				length: Math.random() * 10,
			});
			const currBall = new Ball(this.calcRadius(i), position, force);
			currBall.path.opacity = this.opacity;
			currBall.shadowColor.alpha = this.opacity / 2;
			currBall.path.artist = this.artists[i];
			currBall.setIdx(this.balls.length);
			currBall.isVertical = window.innerWidth > window.innerHeight;
			currBall.path.onMouseEnter = this.pathOnMouseEnter.bind(this);
			currBall.path.onMouseLeave = this.pathOnMouseLeave.bind(this);
			currBall.path.onClick = this.pathOnClick.bind(this);
			this.balls.push(currBall);
		}

		if (this.collapsed)
			this.recalcCanvasSize()
	}

	onFrame() {
		for (let i = 0; i < this.balls.length - 1; i++)
			for (let j = i + 1; j < this.balls.length; j++)
				this.balls[i].react(this.balls[j]);

		for (let i = 1; i < this.balls.length; i++) {
			this.balls[i].iterate();
			this.balls[i].updateColor();
		}

		this.balls[0].updateShape();
		this.balls[0].updateColor();

		// Mouse Easing
		let easeFactor = this.defaultEasing;
		if (this.isSlowSim) {
			easeFactor = this.slowSimEasing;
		}
		const dx = this.mouseTargetX - this.mouseCurrX;
		this.mouseCurrX += dx * easeFactor;
		const dy = this.mouseTargetY - this.mouseCurrY;
		this.mouseCurrY += dy * easeFactor;

		// Move the hidden/mouse blob
		if (this.collapsed) {
			this.balls[0].point = new paper.Point(
				-this.balls[0].radius,
				-this.balls[0].radius
			);
		} else {
			this.balls[0].point = new paper.Point(this.mouseCurrX, this.mouseCurrY);
		}
	}

	onResize(evt) {
		this.recalcCanvasSize();
		for (let i = 0; i < this.balls.length; i++) {
			this.balls[i].radius = this.calcRadius(i);
			let tempIsVert = window.innerWidth > window.innerHeight;
			this.balls[i].isVertical = tempIsVert;
		}
	}

	recalcCanvasSize() {
		let currWidth = document.body.clientWidth;
		let currHeight = window.innerHeight;
		if (this.collapsed) {
			// let tempBall = this.balls[1];
			let rad = Math.ceil(this.calcCollapsedRadius());
			if (currWidth > currHeight)
				currWidth = rad * 2;
			else
				currHeight = rad * 2;
		}
		paper.view.viewSize = new paper.Size(currWidth, currHeight);
	}

	onMouseMove(x, y) {
		this.mouseTargetX = x;
		this.mouseTargetY = y;
	}

	pathOnMouseEnter(event) {
		this.isSlowSim = true;

		const idx = event.target.idx;
		this.balls[idx].mouseEnterPt = event.point;

		for (let i = 1; i < this.balls.length; i++) {
			if (this.balls[i].path !== event.target) {
				this.balls[i].path.tween(
					{
						opacity: this.balls[i].path.opacity,
						shadowColor: this.balls[i].path.shadowColor,
					},
					{
						opacity: this.hoverFadedOpacity,
						shadowColor: this.balls[i].shadowInactiveColor,
					},
					this.animationDuration
				);
			} else {
				this.balls[i].path.tween(
					{
						opacity: this.balls[i].path.opacity,
						// shadowColor: this.balls[i].path.shadowColor,
					},
					{
						opacity: this.hoverActiveOpacity,
						// shadowColor: this.balls[i].shadowColor,
					},
					this.animationDuration
				);
			}
		}
		this.onArtistHovered && this.onArtistHovered(event);
	}

	pathOnMouseLeave(event) {
		this.isSlowSim = false;

		const idx = event.target.idx;
		this.balls[idx].mouseLeavePt = event.point;

		// Add force on mouse leave
		// this.repulseBall(idx);

		for (let i = 1; i < this.balls.length; i++) {
			this.balls[i].path.tween(
				{
					opacity: this.balls[i].path.opacity,
					shadowColor: this.balls[i].path.shadowColor,
				},
				{
					opacity: this.opacity,
					shadowColor: this.balls[i].shadowInactiveColor,
				},
				this.animationDuration
			);
		}

		this.onArtistHovered && this.onArtistHovered(event);
	}

	repulseBall(idx) {
		if (!this.collapsed) {
			const repulsionV = this.balls[idx].mouseEnterPt.subtract(
				this.balls[idx].mouseLeavePt
			);
			this.balls[idx].vector = this.balls[idx].vector.add(
				repulsionV.normalize()
			);
			this.balls[idx].vector = this.balls[idx].vector.subtract(
				this.balls[idx].radius
			);
		}
	}

	pathOnClick(event) {
		//this.collapsed = !this.collapsed; this now happens in react -BL
		this.onArtistClicked && this.onArtistClicked(event);
	}

	onKeyDown(event) {
		for (let i = 1; i < this.balls.length; i++) {
			let curr = this.balls[i].path.blendMode;
			this.balls[i].path.blendMode =
				curr === "normal" ? "color-burn" : "normal";
		}
	}
}
