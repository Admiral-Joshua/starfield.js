function degToRads(degs) {
    return degs * Math.PI / 180;
}

function radsToDegs(rads) {
    return rads * 180 / Math.PI;
}

function randomInt(min, max) {
    return (Math.floor(Math.random() * max)) + min;
}

class debrisParticle {
    constructor(x, y, direction, speed, size, opacity) {
        this._start = { x: x, y: y };

        this.x = x;
        this.y = y;
        this.direction = direction || 0;
        this.speed = speed || 4;
        this.size = size || 3;

        this.opacity = opacity || 0;
    }
    update() {
        let newX = this.x + (this.speed * Math.sin(this.direction));
        let newY = this.y + (this.speed * Math.cos(this.direction));

        if (this.opacity < 1 && Math.abs(this.x - this._start.x) > 20) {
            this.opacity += 0.005;
        }

        this.x = newX;
        this.y = newY;
        //console.log(this);
    }
}

class SpaceDebris {
    constructor(docId, config) {

        var el = document.getElementById(docId);

        if (el) {
            this._canvas = document.createElement("canvas");

            // try to configure with config object.
            if (config) {
                this.width = config.width;
                this.height = config.height;
                this.speed = config.speed;
            }
            // where nothing has been set, set to defaults.
            this.width = this.width ? this.width : window.innerWidth;
            this.height = this.height ? this.height : window.innerHeight;
            this.speed = this.speed ? this.speed : 1.5;
            this.maxRadius = this.maxRadius ? this.maxRadius : 3;
            this.particleCount = this.particleCount ? this.particleCount : 500;
            this.offsets = this.offsets ? this.offsets : 80;

            this._canvas.width = this.width;
            this._canvas.height = this.height;
            this._canvas.style.positoin = "absolute";

            this._context = this._canvas.getContext('2d');

            el.appendChild(this._canvas);
        }
    }

    tick() {
        // Check we have a context.
        if (this._context) {
            console.log("tick call");
            // Clear context
            this._context.clearRect(0, 0, this.width, this.height);
            this._context.fillStyle = "black";
            this._context.rect(0, 0, this.width, this.height);
            this._context.fill();

            // Do we have any particles??
            if (this._particles) {
                // Iterate over, and move...
                this._particles.forEach(particle => {
                    // Update x & y
                    particle.update();

                    // Has this particle exceeded the screen?
                    if (particle.x < 0 || particle.x > this.width ||
                        particle.y < 0 || particle.y > this.height) {
                        particle.x = Math.floor(this.width / 2);
                        particle.y = Math.floor(this.height / 2);
                        particle.opacity = 0;
                        particle.direction = randomInt(0, 360);
                    }


                    // TODO: Render onto Canvas.
                    this._context.beginPath();
                    this._context.fillStyle = `rgba(190, 190, 190, ${particle.opacity})`;
                    this._context.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
                    //this._context.closePath();
                    this._context.fill();
                });
            } else {
                console.log("initialised particles");
                // initialise particles
                this._particles = [];
                for (var i = 0; i < this.particleCount; i++) {
                    window.setTimeout(() => {
                        this._particles.push(
                            new debrisParticle(Math.floor(this.width / 2), Math.floor(this.height / 2), randomInt(0, 360), this.speed, randomInt(0, this.radius))
                        );
                    }, randomInt(100, 5000));
                }
            }
        } else {
            console.error("context not defined");
        }
    }
}

// Initialise the canvas
function initialise(docId) {

}