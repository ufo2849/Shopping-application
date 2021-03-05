const items= document.querySelector('.items');
const input= document.querySelector('.footer_input');
const btn= document.querySelector('.footer_button');

function Addon() {
    const text= input.value;

    if (text === '') {
        input.focus();
        return;
    }
    const item= createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block: 'center'});

    input.value= '';
    input.focus();
}

let id= 0;
function createItem(text) {
    const itemRow= document.createElement('li');
    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML= `
        <div class="item">
            <span class="item_name">
                ${text}
            </span>
            <button class="item_delete">
                <i class="fas fa-trash-alt" data-id=${id}></i>
            </button>
        </div>
        <div class="divider">
        </div>`;
    id++;
    return itemRow;
}

btn.addEventListener('click', () => {
    Addon();
});

input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        Addon();
    }
});

items.addEventListener('click', (event) => {
    const id= event.target.dataset.id;
    // console.log(id);
    if (id) {
        const tobeDeleted= document.querySelector(`.item_row[data-id="${id}"]`);
        tobeDeleted.remove();
    }
});