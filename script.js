let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newBtn = document.querySelector(".newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector(".msg");
let hide= document.querySelector(".hide");


let turnO = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const res = () =>{
    let turnO = true;
    enableBox();
    msgContainer.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>
    {
        if(turnO ==true)
        {
            box.innerText = "O";
            turnO=false;
        }
        else
        {
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disBox = () =>{
    for(let box of boxes)
    {
        box.disabled =true;
    }
}

const enableBox = () =>{
    for(let box of boxes)
    {
        box.enabled =true;
        box.innerText ="";

    }
}

const dispWinner = (winner) =>{
    msg.innerText=`Congratulations, The Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disBox();
}

const checkWinner = () =>{
    for (pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos1==pos3)
            {
                dispWinner(pos1);
            }
        }
    }
}

resetBtn.addEventListener("click", res());
newBtn.addEventListener("click", res());
