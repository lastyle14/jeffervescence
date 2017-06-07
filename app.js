const app = {
    array : [],
    init(selectors) {
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.addFlick.bind(this))
    },

addFlick(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
        id: this.max + 1,
        name: f.flickname.value,
    }

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)
    this.array.push('flickname')

    const button = document.createElement('button')
    button.setAttribute('id', 'promoteButton')
    button.classList.add('button', 'primary')
    button.textContent = 'Promote'
    const flicklist = document.querySelector('#flickList')
    flicklist.appendChild(button)
    button.addEventListener('click', this.moveUp.bind(this))
},

moveUp(ev) {
    const newItem = document.createElement('li')
    flickList.appendChild(newItem)
    const flickname = document.querySelector('#flickname')
    newItem.appendChild(flickname)
    flicklist.insertBefore(newItem, ChildNode)
},

    renderListItem(flick) {
const item = document.createElement('li')
item.textContent = flick.name
return item
    },


}

app.init({
    formSelector: '#flick-form',
    listSelector: '#flickList',
})