// Code adapted from paperjs.org/examples/candy-crash/
// kynd.info 2014

import paper from 'paper';

export default class Ball {
	constructor(r, p, v) {
		this.radius = r;
		this.point = p;
		this.force = v;
		this.gravity = 9.8;
		this.dampen = 0.4; // Amount of force dampening
		this.maxForce = 15;
		this.numSegment = 16; // Curve segmentation
		this.innerForceFactor = 0.1; // How much balls repel eachother
		this.deformFactor = 5; // How much balls can be deformed when adjacent
		this.shapeRetention = 15; // How responsive the deformation is
		this.boundOffset = [];
		this.boundOffsetBuff = [];
		this.sidePoints = [];
		this.mouseEnterPt = null;
		this.mouseLeavePt = null;
		this.idx = null;
		this.isVertical = true;
		this.centerCol = '#e3f994'; // Radial gradient center color
		this.outerCol = '#574DC8'; // Radial gradient outer color
		this.shadowCol = '#edebee'; // Color of shadows
		this.shadowColor = new paper.Color(this.centerCol);
		this.shadowInactiveColor = new paper.Color(this.outerCol);
		this.shadowInactiveColor.alpha = 1; // When hovered, make inactive ball's shadow fully transparent
		this.path = new paper.Path({
			fillColor: {
				gradient: {
					stops: [this.centerCol, this.outerCol],
					radial: true,
				},
				// origin: this.point,
				// destination: this.point + [this.radius, 0],
			},
			blendMode: 'normal',
			closed: true,
			shadowColor: this.shadowInactiveColor,
			shadowBlur: 5,
			shadowOffset: new paper.Point(-5, -5),
		});

		for (let i = 0; i < this.numSegment; i++) {
			this.boundOffset.push(this.radius);
			this.boundOffsetBuff.push(this.radius);
			this.path.add(new paper.Point());
			this.sidePoints.push(new paper.Point({
				angle: (360 / this.numSegment) * i,
				length: 1,
			}));
		}
	}

	iterate() {
		this.checkBorders();
		if (this.force.length > this.maxForce) this.force.length = this.maxForce;
		if (this.isVertical) {
			this.force.x += this.gravity;
			this.force.y *= 0.99;
		} else {
			this.force.y += this.gravity;
			this.force.x *= 0.99;
		}
		this.force = this.force.multiply(this.dampen);
		this.point = this.point.add(this.force);
		this.updateShape();
	}

	setIdx(val) {
		this.idx = val;
		this.path.idx = val;
	}

	updateColor() {
		this.path.fillColor.origin = this.path.position;
		this.path.fillColor.destination = this.path.bounds.rightCenter;
		this.path.fillColor.radial = true;
	}

	checkBorders() {
		const size = paper.view.size;
		const pre = this.point.add(this.force);

		const max = paper.Point.max(this.radius, this.point.add(this.force));
		this.point = paper.Point.min(max, size.subtract(this.radius));
	}

	updateShape() {
		const segments = this.path.segments;
		for (let i = 0; i < this.numSegment; i++)
			segments[i].point = this.getSidePoint(i);

		this.path.smooth();
		for (let i = 0; i < this.numSegment; i++) {
			if (this.boundOffset[i] < this.radius / 4)
				this.boundOffset[i] = this.radius / 4;
			const next = (i + 1) % this.numSegment;
			const prev = i > 0 ? i - 1 : this.numSegment - 1;
			let offset = this.boundOffset[i];

			offset += (this.radius - offset) / this.shapeRetention;
			offset +=
				((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / this.deformFactor;
			this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
		}
	}

	react(b) {
		const dist = this.point.getDistance(b.point);
		if (dist < this.radius + b.radius && dist != 0) {
			const overlap = this.radius + b.radius - dist;
			// overlap /= 10;
			const direc = this.point.subtract(b.point).normalize(overlap * this.innerForceFactor);

			this.force = this.force.add(direc);
			b.force = b.force.subtract(direc);

			this.calcBounds(b);
			b.calcBounds(this);
			this.updateBounds();
			b.updateBounds();
		}
	}

	getBoundOffset(b) {
		const diff = this.point.subtract(b);
		const angle = (diff.angle + 180) % 360;
		return this
			.boundOffset[Math.floor((angle / 360) * this.boundOffset.length)];
	}

	calcBounds(b) {
		for (let i = 0; i < this.numSegment; i++) {
			const tp = this.getSidePoint(i);
			const bLen = b.getBoundOffset(tp);
			const td = tp.getDistance(b.point) * 0.9;
			if (td < bLen) {
				this.boundOffsetBuff[i] -= (bLen - td) / 5;
			}
		}
	}

	getSidePoint(index) {
		return this.point.add(
			this.sidePoints[index].multiply(this.boundOffset[index]));
	}

	updateBounds() {
		for (let i = 0; i < this.numSegment; i++)
			this.boundOffset[i] = this.boundOffsetBuff[i];
	}
}