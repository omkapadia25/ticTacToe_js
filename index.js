let btns=document.querySelectorAll(".button");
let cell=['','','','','','','','',''];
let currentPlayer='X';
let result=document.querySelector(".result");
let reset1=document.querySelector(".btn-primary");

let conditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,8]
];

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        tictactoe(btn,i);
    })
        
   
});

const tictactoe=function(element,i)
{
    // console.log(i);
    element.value=currentPlayer;
    cell[i]=currentPlayer;
    element.disabled=true;
    if(currentPlayer=='X')
    {
        currentPlayer='O';
    }
    else
    {
        currentPlayer='X';
    }
    result.innerHTML=`Player ${currentPlayer} turn`

    for(let i=0;i<8;i++)
    {
        let condition=conditions[i];
        let a=cell[condition[0]];
        let b=cell[condition[1]];
        let c=cell[condition[2]];

        if(a=='' || b=='' || c=='')
        {
            continue;
        }
        if(a==b && b==c)
        {
            result.innerHTML=`Player ${a} won`;
            btns.forEach((btn)=>{btn.disabled=true});
        }


    }


}

function reset()
{
    let cell=['','','','','','','','',''];
    btns.forEach((btn)=>{btn.value=''});
    currentPlayer='X';
    result.innerHTML=`Player X turn`;
    btns.forEach((btn)=>{
        btn.disabled=false;
    })
}
reset1.addEventListener("click",reset);