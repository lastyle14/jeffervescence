const app = {
    init(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
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
    this.flicks.unshift(flickname)

    const button = document.createElement('button')
    button.setAttribute('id', 'promoteButton')
    button.classList.add('button', 'primary')
    button.textContent = 'Promote'
    const flicklist = document.querySelector('#flickList')
    listItem.appendChild(button)
    button.addEventListener('click', this.moveUp.bind(this))
    this.list.insertBefore(listItem, this.list.firstChild)

    ++this.max
    f.reset()

},

moveUp(ev) {
    const button = ev.target
    const listItem = button.parentElement
    flickList.insertBefore(listItem, listItem.previousElementSibling)
},


    renderListItem(flick) {
    const template = document.querySelector('.flick.template')
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.querySelector('flick-name')
    item.textContent = flick.name
    item.dataset.id = flick.id
    return item
    },


}

app.init({
    formSelector: '#flick-form',
    listSelector: '#flickList',
    templateSelector: '.flick.template'
})