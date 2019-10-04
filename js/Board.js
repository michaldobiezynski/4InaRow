class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaces = createSpaces();
    }

    createSpaces() {
        const spaces =[];

        for(let i =0; i<this.columns; i++) {
            const column =[];

            for(let j =0; j<this.rows; j++) {
                const space = new Space(i,j);
                column.push(space);
            }
            spaces.push(column)
        }

        return spaces;
    }

    drawHTMLBoard() {
        for (let x = 0; x<this.columns; x++) {
            for (let y = 0; y<this.columns; y++) {
                this.spaces[x[y]].drawSVGSpace();

            }
        }
    }

}