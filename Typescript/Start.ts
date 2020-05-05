class Start {
    public static generateLSystem(
        containerId: string, 
        axiom: string, 
        angle: number, 
        linelength: number,
        iterations: number, 
        startPoint: Point,
        productionRules: ((axiom:string) => string)) {

        // Generate a canvas
        let container = document.getElementById(containerId);
        let canvas = Drawing.generateCanvas();
        container.appendChild(canvas); 

        // Apply some production rules
        for (let n = 0; n < iterations; n++) {
            axiom = productionRules(axiom);     
        }

        // Translate the resulting string and draw the result
        Alphabet.drawLSystem(axiom, angle, linelength, canvas, startPoint);
    }    
}

document.addEventListener("DOMContentLoaded", function(event) { 
    Start.generateLSystem(
        'container1', 
        'A', 
        60, 
        5,
        5, 
        new Point(620, 100),
        ProductionRules.GosperCurve.applyProductionRules);

    Start.generateLSystem(
        'container2', 
        'AX', 
        90, 
        5,
        13,
        new Point(600, 300),
        ProductionRules.DragonCurve.applyProductionRules);

    Start.generateLSystem(
        'container3', 
        'ArrArrA', 
        60,
        8, 
        4,
        new Point(100, 200),
        ProductionRules.KochSnowflake.applyProductionRules);

    Start.generateLSystem(
        'container4', 
        'ArBrB', 
        120, 
        22,
        5,
        new Point(90, 150),
        ProductionRules.SierpinskiTriangle.applyProductionRules);
});