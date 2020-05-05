var Alphabet = (function () {
    function Alphabet() {
    }
    Alphabet.drawLSystem = function (letters, turnAngle, lineLength, canvas, startPoint) {
        var ctx = canvas.getContext("2d");
        var currentPoint = startPoint;
        var splitLetters = letters.split('');
        ctx.save();
        ctx.strokeStyle = 'white';
        var angle = 0;
        for (var index = 0; index < splitLetters.length; index++) {
            switch (splitLetters[index]) {
                case 'A':
                case 'B':
                    currentPoint = Drawing.drawLineSegment(ctx, lineLength, angle, currentPoint);
                    break;
                case 'r':
                    angle += turnAngle;
                    break;
                case 'l':
                    angle -= turnAngle;
                    break;
                default:
                    break;
            }
        }
        ctx.restore();
    };
    return Alphabet;
}());
var Drawing = (function () {
    function Drawing() {
    }
    Drawing.generateCanvas = function () {
        var container = document.createElement("canvas");
        container.width = 800;
        container.height = 800;
        return container;
    };
    Drawing.drawLineSegment = function (ctx, lineLength, angle, startPoint) {
        var endpoint = new Point(startPoint.x + lineLength * Math.cos(this.toRadian(angle)), startPoint.y + lineLength * Math.sin(this.toRadian(angle)));
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endpoint.x, endpoint.y);
        ctx.stroke();
        return endpoint;
    };
    Drawing.toRadian = function (degree) {
        return degree * Math.PI / 180;
    };
    return Drawing;
}());
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var ProductionRules = (function () {
    function ProductionRules() {
    }
    var _a, _b, _c, _d;
    ProductionRules.GosperCurve = (_a = (function () {
            function class_1() {
            }
            class_1.applyProductionRules = function (axiom) {
                var letters = axiom.split('');
                return letters.map(function (l) {
                    if (ProductionRules.GosperCurve.rules[l])
                        return ProductionRules.GosperCurve.rules[l];
                    return l;
                }).join('');
            };
            return class_1;
        }()),
        _a.rules = {
            'A': 'ArBrrBlAllAAlBr',
            'B': 'lArBBrrBrAllAlB'
        },
        _a);
    ProductionRules.DragonCurve = (_b = (function () {
            function class_2() {
            }
            class_2.applyProductionRules = function (axiom) {
                var letters = axiom.split('');
                var mappedLetters = letters.map(function (l) {
                    if (ProductionRules.DragonCurve.rules[l])
                        return ProductionRules.DragonCurve.rules[l];
                    return l;
                });
                return mappedLetters.join('');
            };
            return class_2;
        }()),
        _b.rules = {
            'X': 'XlYAl',
            'Y': 'rAXrY'
        },
        _b);
    ProductionRules.KochSnowflake = (_c = (function () {
            function class_3() {
            }
            class_3.applyProductionRules = function (axiom) {
                var letters = axiom.split('');
                var mappedLetters = letters.map(function (l) {
                    if (ProductionRules.KochSnowflake.rules[l])
                        return ProductionRules.KochSnowflake.rules[l];
                    return l;
                });
                return mappedLetters.join('');
            };
            return class_3;
        }()),
        _c.rules = {
            'A': 'AlArrAlA',
        },
        _c);
    ProductionRules.SierpinskiTriangle = (_d = (function () {
            function class_4() {
            }
            class_4.applyProductionRules = function (axiom) {
                var letters = axiom.split('');
                var mappedLetters = letters.map(function (l) {
                    if (ProductionRules.SierpinskiTriangle.rules[l])
                        return ProductionRules.SierpinskiTriangle.rules[l];
                    return l;
                });
                return mappedLetters.join('');
            };
            return class_4;
        }()),
        _d.rules = {
            'A': 'ArBlAlBrA',
            'B': 'BB'
        },
        _d);
    return ProductionRules;
}());
var Start = (function () {
    function Start() {
    }
    Start.generateLSystem = function (containerId, axiom, angle, linelength, iterations, startPoint, productionRules) {
        var container = document.getElementById(containerId);
        var canvas = Drawing.generateCanvas();
        container.appendChild(canvas);
        for (var n = 0; n < iterations; n++) {
            axiom = productionRules(axiom);
        }
        Alphabet.drawLSystem(axiom, angle, linelength, canvas, startPoint);
    };
    return Start;
}());
document.addEventListener("DOMContentLoaded", function (event) {
    Start.generateLSystem('container1', 'A', 60, 5, 5, new Point(620, 100), ProductionRules.GosperCurve.applyProductionRules);
    Start.generateLSystem('container2', 'AX', 90, 5, 13, new Point(600, 300), ProductionRules.DragonCurve.applyProductionRules);
    Start.generateLSystem('container3', 'ArrArrA', 60, 8, 4, new Point(100, 200), ProductionRules.KochSnowflake.applyProductionRules);
    Start.generateLSystem('container4', 'ArBrB', 120, 22, 5, new Point(90, 150), ProductionRules.SierpinskiTriangle.applyProductionRules);
});
//# sourceMappingURL=LSystem.js.map