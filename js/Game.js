class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    createPlayers() {
        const players =[
            new Player("Player 1", 1, "#e15258", true),
            new Player("Player 2", 2, "#e59a13")
        ];

        return players;
    }

    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeTokens.drawHTMLToken();
        this.ready = true;
    }

    get activePlayer() {
       return this.players.find( player => player.active);

    }

    handleKeydown(e) {
        if(this.ready) {
            if(e.key === "ArrowLeft") {
                //move left
            } else if(e.key === "ArrowRight") {
                //move right
            } else if(e.key === "ArrowDown") {
                //play token
            }
        }
    }

}