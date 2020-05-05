class Alphabet {
    public static drawLSystem(
        letters: string, 
        turnAngle: number, 
        lineLength: number,
        canvas: HTMLCanvasElement,
        startPoint: Point) { 

        let ctx = canvas.getContext("2d");
        let currentPoint = startPoint;
        let splitLetters = letters.split('');    

        ctx.save();
        ctx.strokeStyle  = 'white'; 

        let angle = 0;

        for (let index = 0; index < splitLetters.length; index++) {
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
    }
}