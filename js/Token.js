class Token {
    constructor(owner, id) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }

    drawHTMLToken() {

        const divEle =  document.createElement('<div></div>');
        divEle('<div></div>').setAttribute("id", this.id);
        divEle('<div></div>').setAttribute("class", "token");
        divEle.style.background = divEle.ownerElement.style.background;

        document.getElementById('game-board-underlay')
            .append(divEle);

    }

    get htmlToken() {
        return document.getElementById(this.id);
    }

}