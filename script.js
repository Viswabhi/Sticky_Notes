let container2 = document.querySelector('.container2');
let container3 = document.querySelector('.container3');
let checkIcon = document.querySelector('#check-icon');
let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    typeNote();
})

let xIcon = document.querySelector('#x-icon');

let i = 0;

xIcon.addEventListener('click',function(){
    typeNote();
})


checkIcon.addEventListener('click',function(){
    createNote();
})

function typeNote(){
    if(container3.style.display === 'none')
    {
        container3.style.display = 'block';
    }

    else
    {
        container3.style.display = 'none';
    }
}



function createNote(){
    let editButton = document.createElement('button')
    let noteText = document.querySelector('#note-text').value;
    let node0 = document.createElement('div');

    let node1 = document.createElement('h1');

    let dateElement = document.createElement('p');

    let currentDate = new Date();
    let dateString = currentDate.toLocaleDateString();
    let timeString = currentDate.toLocaleTimeString();

    node1.innerHTML = noteText;
    node1.setAttribute("style","width:250px; height:250px; font-size:26px; padding:25px margin-top:10px; overflow:hidden; box-shadow: 0px 10px 24px 0px rgba(0,0,0,0.75)");

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();

    dateElement.innerHTML = "Created: " + dateString + " at " + timeString;

    node0.append(dateElement);
    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend",node0);

    node0.addEventListener('mouseenter',function(){
        node0.style.transform = "scale(1.1)";
    })

    
    node0.addEventListener('mouseleave',function(){
        node0.style.transform = "scale(1)";
    })


    node0.addEventListener('dblclick',function(){
        node0.remove();
    })

    document.querySelector('#note-text').value = '';
}



function margin(){
    let random_margin = ["-5px","1px","5px","10px","15px","20px"]

    //this will give random number in the index of random_margin
    return random_margin[Math.floor(Math.random()* random_margin.length)];
}

function rotate(){
    let random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];
    return random_rotate[Math.floor(Math.random()* random_rotate.length)];
}

function color(){
    let random_color =  ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];

    //return in order of the array;
    if(i>random_color.length-1)
    {
        i=0;
    }
    return random_color[i++]
}