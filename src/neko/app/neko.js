"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Neko = void 0;
var NEKO_WIDTH = 32;
var NEKO_HEIGHT = 32;
var NEKO_HALF_WIDTH = NEKO_WIDTH / 2;
var NEKO_HALF_HEIGHT = NEKO_HEIGHT / 2;
var NEKO_SPEED = 20;
var FRAME_RATE = 300;
var Z_INDEX = Number.MAX_SAFE_INTEGER;
var ALERT_TIME = 3;
var IDLE_THRESHOLD = 3;
var IDLE_ANIMATION_CHANCE = 1 / 20;
var MIN_DISTANCE = 10;
var SPRITE_GAP = 1;
var BACKGROUND_TARGET_COLOR = [0, 174, 240];
var AXIS_THRESHOLD = 4;
// TODO: offset neko when dragging
var Neko = /** @class */ (function () {
    function Neko(_a) {
        var nekoName = _a.nekoName, nekoImageUrl = _a.nekoImageUrl, initialPosX = _a.initialPosX, initialPosY = _a.initialPosY;
        var _this = this;
        this.isMouseMoving = false;
        this.mouseMoveTimeoutId = null;
        this.dragAnimationLastTimestamp = null;
        this.currentScratchSprite = null;
        this.handleMouseMove = function (event) {
            if (_this.isDragging) {
                var dx = event.clientX - _this.lastMouseX;
                var dy = event.clientY - _this.lastMouseY;
                var movementDistance = Math.hypot(dx, dy);
                var MOVEMENT_THRESHOLD = 2;
                if (!_this.wasDragged) {
                    if (movementDistance > MOVEMENT_THRESHOLD) {
                        _this.wasDragged = true;
                    }
                    else {
                        _this.setSprite("alert", 0);
                        _this.render();
                        _this.lastMouseX = event.clientX;
                        _this.lastMouseY = event.clientY;
                        return;
                    }
                }
                _this.isMouseMoving = true;
                if (_this.mouseMoveTimeoutId !== null) {
                    clearTimeout(_this.mouseMoveTimeoutId);
                }
                _this.mouseMoveTimeoutId = window.setTimeout(function () {
                    _this.isMouseMoving = false;
                    _this.setSprite("alert", 0);
                    _this.render();
                }, 100);
                _this.posX = event.clientX;
                _this.posY = event.clientY;
                _this.updateDraggingSprite(dx, dy, event.timeStamp);
                _this.lastMouseX = event.clientX;
                _this.lastMouseY = event.clientY;
                _this.render();
            }
            else {
                _this.mouseX = event.clientX;
                _this.mouseY = event.clientY;
            }
        };
        this.handleMouseDown = function (event) {
            _this.isDragging = true;
            _this.wasDragged = false;
            _this.lastMouseX = event.clientX;
            _this.lastMouseY = event.clientY;
            _this.idleAnimationFrame = 0;
            _this.dragAnimationLastTimestamp = null;
            _this.isMouseMoving = false;
            if (_this.nekoElement) {
                _this.nekoElement.style.cursor = "grabbing";
            }
            _this.setSprite("alert", 0);
            _this.render();
            event.preventDefault();
        };
        this.handleMouseUp = function () {
            _this.isDragging = false;
            _this.idleAnimationFrame = 0;
            _this.dragAnimationLastTimestamp = null;
            _this.isMouseMoving = false;
            _this.currentScratchSprite = null;
            if (_this.nekoElement) {
                _this.nekoElement.style.cursor = "grab";
            }
            if (_this.mouseMoveTimeoutId !== null) {
                clearTimeout(_this.mouseMoveTimeoutId);
                _this.mouseMoveTimeoutId = null;
            }
        };
        this.nekoName = nekoName;
        this.nekoImageUrl = nekoImageUrl;
        this.posX = initialPosX !== undefined ? initialPosX : NEKO_HALF_WIDTH;
        this.posY = initialPosY !== undefined ? initialPosY : NEKO_HALF_HEIGHT;
        this.initialPosX = initialPosX !== undefined ? initialPosX : this.posX;
        this.initialPosY = initialPosY !== undefined ? initialPosY : this.posY;
        this.mouseX = 0;
        this.mouseY = 0;
        this.frameCount = 0;
        this.idleTime = 0;
        this.idleAnimation = null;
        this.idleAnimationFrame = 0;
        this.isFollowing = false;
        this.isReturningToOrigin = false;
        this.nekoElement = null;
        this.lastFrameTimestamp = null;
        this.animationFrameId = null;
        this.isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        this.isDragging = false;
        this.wasDragged = false;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.currentScratchSprite = null;
        this.spriteSets = {
            idle: [[0, 0]],
            alert: [[7, 0]],
            lickPaw: [[1, 0]],
            scratchSelf: [
                [2, 0],
                [3, 0],
            ],
            scratchWallS: [
                [0, 3],
                [1, 3],
            ],
            scratchWallE: [
                [2, 3],
                [3, 3],
            ],
            scratchWallN: [
                [4, 3],
                [5, 3],
            ],
            scratchWallW: [
                [6, 3],
                [7, 3],
            ],
            tired: [[4, 0]],
            sleeping: [
                [5, 0],
                [6, 0],
            ],
            S: [
                [0, 1],
                [1, 1],
            ],
            SE: [
                [2, 1],
                [3, 1],
            ],
            E: [
                [4, 1],
                [5, 1],
            ],
            NE: [
                [6, 1],
                [7, 1],
            ],
            N: [
                [0, 2],
                [1, 2],
            ],
            NW: [
                [2, 2],
                [3, 2],
            ],
            W: [
                [4, 2],
                [5, 2],
            ],
            SW: [
                [6, 2],
                [7, 2],
            ],
        };
    }
    Neko.prototype.init = function () {
        if (this.isReducedMotion) {
            console.log('No neko - reduced motion.');
            return;
        }
        if (document.getElementById(this.nekoName))
            return;
        this.createNekoElement();
        this.addEventListeners();
        this.animationLoop();
    };
    Neko.makeTransparent = function (imageUrl, targetColor) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var img = new Image();
                        img.src = imageUrl;
                        img.crossOrigin = "Anonymous";
                        img.onload = function () {
                            var canvas = document.createElement("canvas");
                            var ctx = canvas.getContext("2d");
                            if (!ctx)
                                return reject("Canvas not supported");
                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx.drawImage(img, 0, 0);
                            var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                            var data = imageData.data;
                            for (var i = 0; i < data.length; i += 4) {
                                var r = data[i];
                                var g = data[i + 1];
                                var b = data[i + 2];
                                if (r === targetColor[0] &&
                                    g === targetColor[1] &&
                                    b === targetColor[2]) {
                                    data[i + 3] = 0;
                                }
                            }
                            ctx.putImageData(imageData, 0, 0);
                            var transparentImageUrl = canvas.toDataURL("image/png");
                            resolve(transparentImageUrl);
                        };
                        img.onerror = function (err) { return reject(err); };
                    })];
            });
        });
    };
    Neko.prototype.createNekoElement = function () {
        return __awaiter(this, void 0, void 0, function () {
            var transparentImageUrl, err_1, idleSprite, posX, posY;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.nekoElement = document.createElement("div");
                        this.nekoElement.id = this.nekoName;
                        this.nekoElement.ariaHidden = "true";
                        this.nekoElement.style.width = "".concat(NEKO_WIDTH, "px");
                        this.nekoElement.style.height = "".concat(NEKO_HEIGHT, "px");
                        this.nekoElement.style.position = "fixed";
                        this.nekoElement.style.pointerEvents = "auto";
                        this.nekoElement.style.imageRendering = "pixelated";
                        this.nekoElement.style.left = "".concat(this.posX - NEKO_HALF_WIDTH, "px");
                        this.nekoElement.style.top = "".concat(this.posY - NEKO_HALF_HEIGHT, "px");
                        this.nekoElement.style.zIndex = Z_INDEX.toString();
                        this.nekoElement.style.backgroundImage = "url(\"".concat(this.nekoImageUrl, "\")");
                        this.nekoElement.style.cursor = "grab";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Neko.makeTransparent(this.nekoImageUrl, BACKGROUND_TARGET_COLOR)
                                .then(function (data) { return console.log(data); })
                                .catch(function (err) { return console.log(err); })];
                    case 2:
                        transparentImageUrl = _a.sent();
                        if (this.nekoElement) {
                            this.nekoElement.style.backgroundImage = "url(\"".concat(transparentImageUrl, "\")");
                        }
                        if (this.nekoElement) {
                            document.body.appendChild(this.nekoElement);
                        }
                        else {
                            throw new Error("Neko element is null, cannot append to document.");
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error("Failed to process the image:", err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        idleSprite = this.spriteSets["idle"]
                            ? this.spriteSets["idle"][0]
                            : null;
                        if (idleSprite && this.nekoElement) {
                            posX = idleSprite[0] * (NEKO_WIDTH + SPRITE_GAP);
                            posY = idleSprite[1] * (NEKO_HEIGHT + SPRITE_GAP);
                            this.nekoElement.style.backgroundPosition = "-".concat(posX, "px -").concat(posY, "px");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Neko.prototype.updateDraggingSprite = function (dx, dy, timeStamp) {
        var _a, _b, _c, _d;
        if (!this.isMouseMoving) {
            return;
        }
        var absDx = Math.abs(dx);
        var absDy = Math.abs(dy);
        var spriteName;
        if (absDx - absDy > AXIS_THRESHOLD) {
            if (dx > 0) {
                spriteName = "scratchWallW";
            }
            else {
                spriteName = "scratchWallE";
            }
        }
        else if (absDy - absDx > AXIS_THRESHOLD) {
            if (dy > 0) {
                spriteName = "scratchWallN";
            }
            else {
                spriteName = "scratchWallS";
            }
        }
        else {
            spriteName = this.currentScratchSprite || "idle";
        }
        this.currentScratchSprite = spriteName;
        if (this.dragAnimationLastTimestamp === null) {
            this.dragAnimationLastTimestamp = timeStamp;
        }
        var timeSinceLastFrame = timeStamp - this.dragAnimationLastTimestamp;
        var DRAG_ANIMATION_FRAME_INTERVAL = 100;
        if (timeSinceLastFrame >= DRAG_ANIMATION_FRAME_INTERVAL) {
            this.idleAnimationFrame += 1;
            this.dragAnimationLastTimestamp = timeStamp;
        }
        var frameIndex = ((_b = (_a = this.spriteSets[spriteName]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0
            ? this.idleAnimationFrame % ((_d = (_c = this.spriteSets[spriteName]) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 1)
            : 0;
        this.setSprite(spriteName, frameIndex);
    };
    Neko.prototype.addEventListeners = function () {
        var _this = this;
        if (!this.nekoElement)
            return;
        this.nekoElement.addEventListener("click", function () {
            if (!_this.wasDragged) {
                _this.isFollowing = !_this.isFollowing;
                if (_this.isFollowing) {
                    _this.isReturningToOrigin = false;
                }
                else {
                    _this.isReturningToOrigin = true;
                }
            }
        });
        this.nekoElement.addEventListener("mousedown", this.handleMouseDown);
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("mousemove", this.handleMouseMove);
    };
    Neko.prototype.animationLoop = function () {
        var _this = this;
        var loop = function (timestamp) {
            if (_this.lastFrameTimestamp === null) {
                _this.lastFrameTimestamp = timestamp;
            }
            var delta = timestamp - _this.lastFrameTimestamp;
            if (_this.isDragging || delta > FRAME_RATE) {
                _this.lastFrameTimestamp = timestamp;
                _this.updateState();
                if (!_this.isDragging) {
                    _this.render();
                }
            }
            _this.animationFrameId = window.requestAnimationFrame(loop);
        };
        this.animationFrameId = window.requestAnimationFrame(loop);
    };
    Neko.prototype.updateState = function () {
        if (this.isDragging) {
            return;
        }
        this.frameCount += 1;
        if (this.isReturningToOrigin) {
            this.moveToInitialPosition();
        }
        else if (this.isFollowing) {
            this.followMouse();
        }
        else {
            this.idleBehavior();
        }
    };
    Neko.prototype.render = function () {
        if (!this.nekoElement)
            return;
        this.nekoElement.style.left = "".concat(this.posX - NEKO_HALF_WIDTH, "px");
        this.nekoElement.style.top = "".concat(this.posY - NEKO_HALF_HEIGHT, "px");
    };
    Neko.prototype.setSprite = function (name, frame) {
        if (!this.nekoElement)
            return;
        var spriteSet = this.spriteSets[name];
        if (!spriteSet)
            return;
        var sprite = spriteSet[frame % spriteSet.length];
        if (sprite) {
            var posX = sprite[0] * (NEKO_WIDTH + SPRITE_GAP);
            var posY = sprite[1] * (NEKO_HEIGHT + SPRITE_GAP);
            this.nekoElement.style.backgroundPosition = "-".concat(posX, "px -").concat(posY, "px");
        }
    };
    Neko.prototype.resetIdleAnimation = function () {
        this.idleAnimation = null;
        this.idleAnimationFrame = 0;
    };
    Neko.prototype.idleBehavior = function () {
        this.idleTime += 1;
        if (this.idleTime > IDLE_THRESHOLD &&
            Math.random() < IDLE_ANIMATION_CHANCE &&
            this.idleAnimation == null) {
            var availableIdleAnimations = [
                "sleeping",
                "scratchSelf",
                "lickPaw",
                "scratchWallW",
                "scratchWallN",
                "scratchWallE",
                "scratchWallS",
            ];
            this.idleAnimation =
                availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)] || null;
        }
        switch (this.idleAnimation) {
            case "sleeping":
                if (this.idleAnimationFrame < 8) {
                    this.setSprite("tired", 0);
                    break;
                }
                else if (this.idleAnimationFrame < 16) {
                    this.setSprite("idle", 0);
                    break;
                }
                this.setSprite("sleeping", Math.floor(this.idleAnimationFrame / 4));
                if (this.idleAnimationFrame > 192) {
                    this.resetIdleAnimation();
                }
                break;
            case "lickPaw":
                this.setSprite("lickPaw", 0);
                if (this.idleAnimationFrame > 4) {
                    this.resetIdleAnimation();
                }
                break;
            case "scratchWallN":
            case "scratchWallS":
            case "scratchWallE":
            case "scratchWallW":
            case "scratchSelf":
                this.setSprite(this.idleAnimation, this.idleAnimationFrame);
                if (this.idleAnimationFrame > 9) {
                    this.resetIdleAnimation();
                }
                break;
            default:
                this.setSprite("idle", 0);
                return;
        }
        this.idleAnimationFrame += 1;
    };
    Neko.prototype.followMouse = function () {
        var diffX = this.posX - this.mouseX;
        var diffY = this.posY - this.mouseY;
        var distance = Math.hypot(diffX, diffY);
        if (distance < NEKO_SPEED || distance < MIN_DISTANCE) {
            this.idleBehavior();
            return;
        }
        this.idleAnimation = null;
        this.idleAnimationFrame = 0;
        if (this.idleTime > 1) {
            this.setSprite("alert", 0);
            this.idleTime = Math.min(this.idleTime, ALERT_TIME);
            this.idleTime -= 1;
            return;
        }
        var direction = "";
        direction += diffY / distance > 0.5 ? "N" : "";
        direction += diffY / distance < -0.5 ? "S" : "";
        direction += diffX / distance > 0.5 ? "W" : "";
        direction += diffX / distance < -0.5 ? "E" : "";
        this.setSprite(direction, this.frameCount);
        this.posX -= (diffX / distance) * NEKO_SPEED;
        this.posY -= (diffY / distance) * NEKO_SPEED;
        this.posX = Math.min(Math.max(NEKO_HALF_WIDTH, this.posX), window.innerWidth - NEKO_HALF_WIDTH);
        this.posY = Math.min(Math.max(NEKO_HALF_HEIGHT, this.posY), window.innerHeight - NEKO_HALF_HEIGHT);
    };
    Neko.prototype.moveToInitialPosition = function () {
        var diffX = this.posX - this.initialPosX;
        var diffY = this.posY - this.initialPosY;
        var distance = Math.hypot(diffX, diffY);
        if (distance < NEKO_SPEED) {
            this.posX = this.initialPosX;
            this.posY = this.initialPosY;
            this.isReturningToOrigin = false;
            this.idleBehavior();
            return;
        }
        var direction = "";
        direction += diffY / distance > 0.5 ? "N" : "";
        direction += diffY / distance < -0.5 ? "S" : "";
        direction += diffX / distance > 0.5 ? "W" : "";
        direction += diffX / distance < -0.5 ? "E" : "";
        this.setSprite(direction, this.frameCount);
        this.posX -= (diffX / distance) * NEKO_SPEED;
        this.posY -= (diffY / distance) * NEKO_SPEED;
    };
    Neko.prototype.destroy = function () {
        if (this.nekoElement) {
            this.nekoElement.removeEventListener("mousedown", this.handleMouseDown);
            this.nekoElement.remove();
            this.nekoElement = null;
        }
        if (this.animationFrameId) {
            window.cancelAnimationFrame(this.animationFrameId);
        }
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mouseup", this.handleMouseUp);
    };
    return Neko;
}());
exports.Neko = Neko;
