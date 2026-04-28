let board = document.getElementById("board")

class Piece{
    constructor(){
        this.x;
        this.y;
        this.captured = false;
        this.color;
        this.move;
        this.possibleMoves = [];
    }

    makeMove(){}

    verifyMove(){}

    displayPiece(){}

    displayMoves(){
        for(let i = 0; i < 8; i++){
            if (i % 2 == 0){
                for(let j = 0; j < 8; j++){
                    map[i][j].tile.style.backgroundColor = "white"
                    j++;
                    map[i][j].tile.style.backgroundColor = "tan"
                }}
            else{
                for(let j = 0; j < 8; j++){
                    map[i][j].tile.style.backgroundColor = "tan"
                    j++;
                    map[i][j].tile.style.backgroundColor = "white"
                }
            }
        }

        for (let i = 0; i < this.possibleMoves.length; i++){
            this.possibleMoves[i].style.backgroundColor = "orange"
        }
    }
}

class Pawn extends Piece{
    constructor(y, x, color){
        super()
        this.x = x;
        this.y = y;
        this.color = color;
        this.hasmoved = false;
        if(this.color == "white"){
            this.image = "whitePawn"
        } else{
            this.image = "blackPawn"
        }
    }
    
    makeMove(move){
        console.log(move)
        this.move = move
        if (this.possibleMoves.includes(move)){
            map[this.y][this.x].backgroundImage = this.image
        } else{
        }
    }

    verifyMove(){
        this.possibleMoves = []
        if (this.color == "white"){
            if (this.hasmoved == false && map[this.y-2][this.x].hasPiece == false){
                this.possibleMoves.push(map[this.y - 2][this.x].tile)
            }
            if (map[this.y - 1][this.x + 1].hasPiece == true){
                this.possibleMoves.push(map[this.y - 1][this.x + 1].tile)
            }
            if (map[this.y - 1][this.x - 1].hasPiece == true){
                this.possibleMoves.push(map[this.y - 1][this.x - 1].tile)
            }
            if (map[this.y - 1][this.x].hasPiece == false){
                this.possibleMoves.push(map[this.y - 1][this.x].tile)
            }
        }
        else{
            if (this.hasmoved == false && map[this.y + 2][this.x].hasPiece == false){
                this.possibleMoves.push(map[this.y + 2][this.x].tile)
            }
            if (map[this.y + 1][this.x + 1].hasPiece == true){
                this.possibleMoves.push(map[this.y + 1][this.x + 1].tile)
            }
            if (map[this.y + 1][this.x - 1].hasPiece == true){
                this.possibleMoves.push(map[this.y + 1][this.x - 1].tile)
            }
            if (map[this.y + 1][this.x].hasPiece == false){
                this.possibleMoves.push(map[this.y + 1][this.x].tile)
            }
        }
        this.displayMoves()
    }

    displayPiece(){
        if (this.color == "white"){
            map[this.y][this.x].tile.innerHTML = "<img src = \"whitePawn.png\">"
        } else{
            map[this.y][this.x].tile.innerHTML = "<img src = \"blackPawn.png\">"
        }
    }
}

class Knight extends Piece{
    constructor(){
        super();
    }
    
    move(newCoords){
        if (this.verifyMove()){
            this.coords = newCoords;
            this.display()
        } else{
            
        }
    }

    verifyMove(){
    }
}
class Bishop extends Piece{
    constructor(){
        super();
    }
    
    move(newCoords){
        this.verifyMove()
        this.displayMoves()
        //if (this.possibleMoves.includes(this.move)){
            //this.coords = newCoords;
            //this.display()
        //} else{
            
        //}
    }

    verifyMove(){
    }
}
class Rook extends Piece{
    constructor(){
        super();
        this.displayPiece()
    }
    
    move(newCoords){
        this.verifyMove()
        this.displayMoves()
        //if (this.possibleMoves.includes(this.move)){
            //this.coords = newCoords;
            //this.display()
        //} else{
            
        //}
    }

    verifyMove(){
        let yCounter = this.y
        let xCounter = this.x
        while(yCounter < 8)
            if (board[yCounter][this.x].hasPiece == false){
                this.possibleMoves.push(board[yCounter][this.x])
            }
            yCounter++;
        while(yCounter > -1){
            if (board[yCounter][this.x].hasPiece == false){
                this.possibleMoves.push(board[yCounter][this.x])
            }
            yCounter--;
        }
        while(xCounter < 8){
            if (board[this.y][xCounter].hasPiece == false){
                this.possibleMoves.push(board[this.y][xCounter])
            }
            xCounter++;
        }
        while(xCounter > -1){
            if (board[this.y][xCounter].hasPiece == false){
                this.possibleMoves.push(board[this.y][xCounter])
            }
            xCounter--;
        }
    }
    displayPiece(){
        map[this.y][this.x].style.backgroundImage = "rook.png"
    }
}
class Queen extends Piece{
    constructor(){
        super();
    }
    
    move(newCoords){
        if (this.verifyMove()){
            this.coords = newCoords;
            this.display()
        } else{
            
        }
    }

    verifyMove(){
    }
}

class King extends Piece{
    constructor(){
        super();
    }
    
    move(newCoords){
        if (this.verifyMove()){
            this.coords = newCoords;
            this.display()
        } else{
            
        }
    }

    verifyMove(){
    }

}

class Node{
    constructor(coords, tile, piece){
        this.hasPiece = false;
        this.coords = coords;
        this.tile = tile
        this.piece;
    }
}

class Map{
    constructor(){

    }
}




function createMap(){    
    let nodes = [];
    let x = 0;
    let y = 0;

    for (let i = 0; i < 8; i++){
        let row = document.createElement("tr")
        document.getElementById("table").appendChild(row)
        nodes.push([])
        if (i % 2 == 0){
            for (let j = 0; j < 8; j++){
                nodes[i].push(new Node([y, x], document.createElement("td")));
                nodes[i][j].tile.style.width = "80px";
                nodes[i][j].tile.style.height = "80px"; 
                nodes[i][j].tile.style.border = "3px solid black";
                row.appendChild(nodes[i][j].tile)
                x++;
                j++;
                nodes[i].push(new Node([y, x], document.createElement("td")));
                nodes[i][j].tile.style.width = "80px";
                nodes[i][j].tile.style.height = "80px"  ;
                nodes[i][j].tile.style.border = "3px solid black";
                nodes[i][j].tile.style.backgroundColor = "tan";
                row.appendChild(nodes[i][j].tile)
                x++;
            }
        }else {
            for (let j = 0; j < 8; j++){
                nodes[i].push(new Node([y, x], document.createElement("td")));
                nodes[i][j].tile.style.width = "80px";
                nodes[i][j].tile.style.height = "80px"; 
                nodes[i][j].tile.style.border = "3px solid black";
                 nodes[i][j].tile.style.backgroundColor = "tan";
                row.appendChild(nodes[i][j].tile)
                x++;
                j++;
                nodes[i].push(new Node([y, x], document.createElement("td")));
                nodes[i][j].tile.style.width = "80px";
                nodes[i][j].tile.style.height = "80px"  ;
                nodes[i][j].tile.style.border = "3px solid black";
                row.appendChild(nodes[i][j].tile)
                x++;
            }
        x = 0;
        }
        y++;
    }
    return nodes
}

function resetBoard(){
    console.log("ran")
    for (let i = 0; i < 8; i++){
        map[6][i].piece = new Pawn(6, i, "white")
        map[6][i].piece.displayPiece()
        map[6][i].tile.addEventListener("click", function(){
            map[6][i].piece.verifyMove(5)
            for(let j = 0; j < 8; j++){
                for (let n = 0; n < 8; n++){
                    map[j][n].tile.addEventListener("click", function(){
                        console.log("thing")
                        map[6][i].piece.makeMove(map[i][n].tile)
                    })
                }
            }
        }) 
    }
    for (let i = 0; i < 8; i++){
        map[1][i].piece = new Pawn(1, i, "black")
        map[1][i].piece.displayPiece()
        map[1][i].tile.addEventListener("click", function(){map[1][i].piece.verifyMove(5)}) 
    }
}

let map = createMap()
console.log(map)
resetBoard()