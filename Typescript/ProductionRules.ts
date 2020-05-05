class ProductionRules {

    // https://en.wikipedia.org/wiki/Gosper_curve
    static GosperCurve = class {
        private static rules: {[letter: string]: string} = {
            'A' : 'ArBrrBlAllAAlBr',
            'B' : 'lArBBrrBrAllAlB'
        }

        public static applyProductionRules(axiom: string) {  
            let letters = axiom.split('');     
            return letters.map(l => {
                if(ProductionRules.GosperCurve.rules[l])
                    return ProductionRules.GosperCurve.rules[l];
                return l;
            }).join('');
        }
    }

    // https://en.wikipedia.org/wiki/Dragon_curve
    static DragonCurve = class {
        private static rules: {[letter: string]: string} = {
            'X' : 'XlYAl',
            'Y' : 'rAXrY'
        }

        public static applyProductionRules(axiom: string) {  
            let letters = axiom.split('');    
            let mappedLetters = letters.map(l => {
                if(ProductionRules.DragonCurve.rules[l])
                    return ProductionRules.DragonCurve.rules[l];
                return l;
            });
            return mappedLetters.join('');
        }
    }

    // https://en.wikipedia.org/wiki/Koch_snowflake
    static KochSnowflake = class {
        private static rules: {[letter: string]: string} = {
            'A' : 'AlArrAlA',
        }

        public static applyProductionRules(axiom: string) {  
            let letters = axiom.split('');    
            let mappedLetters = letters.map(l => {
                if(ProductionRules.KochSnowflake.rules[l])
                    return ProductionRules.KochSnowflake.rules[l];
                return l;
            });
            return mappedLetters.join('');
        }
    }  

    // https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle
    static SierpinskiTriangle = class {
        private static rules: {[letter: string]: string} = {
            'A' : 'ArBlAlBrA',
            'B' : 'BB'
        }

        public static applyProductionRules(axiom: string) {  
            let letters = axiom.split('');    
            let mappedLetters = letters.map(l => {
                if(ProductionRules.SierpinskiTriangle.rules[l])
                    return ProductionRules.SierpinskiTriangle.rules[l];
                return l;
            });
            return mappedLetters.join('');
        }
    } 
}