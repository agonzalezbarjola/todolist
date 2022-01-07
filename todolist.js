const input$$ = document.querySelector ('input');
const add_btn$$= document.querySelector ('.add_btn');
const ul$$ = document.querySelector ('ul');
const empty$$ = document.querySelector('.empty');

add_btn$$.addEventListener('click', (e)=>{
    e.preventDefault();
    

    const text = input$$.value;

    const li$$ = document.createElement('li');
    const p$$ = document.createElement('p');
    p$$.textContent = text;

    li$$.appendChild(p$$);
    ul$$.appendChild(li$$);
})
