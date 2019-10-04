class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    createPlayers() {
        const players =[];

        const players1 = new Player("Player 1", 1, "#e15258", true);
        const players2 = new Player("Player 2", 2, "#e59a13");

        players.push(players1);
        players.push(players2);

        return players;
    }

    startGame() {
        this.style.display = 'none';
        document.getElementById('play-area').style.opacity = '1';
    }

}