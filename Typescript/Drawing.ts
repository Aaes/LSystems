class Drawing {
    public static generateCanvas(): HTMLCanvasElement {
        let container = document.createElement("canvas");
        container.width = 800;
        container.height = 800;
        return container;
    }

    public static drawLineSegment(ctx: CanvasRenderingContext2D, lineLength: number, angle: number, startPoint: Point) {
        let endpoint = new Point(
            startPoint.x + lineLength * Math.cos(this.toRadian(angle)),
            startPoint.y + lineLength * Math.sin(this.toRadian(angle))
        );

        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endpoint.x,endpoint.y);
        ctx.stroke();

        return endpoint;
    }

    private static toRadian(degree: number) {
        return degree * Math.PI / 180;
    }
}