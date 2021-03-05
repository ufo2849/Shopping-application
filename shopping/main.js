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

function createItem(text) {
    const itemRow= document.createElement('li');
    itemRow.setAttribute('class', 'item_row');

    const item= document.createElement('div');
    item.setAttribute('class', 'item');

    const name= document.createElement('span');
    name.setAttribute('class', 'item_name');
    name.innerHTML= text;

    const deleteBtn= document.createElement('button');
    deleteBtn.setAttribute('class', 'item_delete');
    deleteBtn.innerHTML= '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    const divider= document.createElement('div');
    divider.setAttribute('class', 'divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);
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