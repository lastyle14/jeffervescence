const app = {
    init(selectors) {
        this.flicks = []
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)
        document
            .querySelector(selectors.formSelector)
            .addEventListener('submit', this.addFlickViaForm.bind(this))

        this.load()
    },
    
   load() {
    // Get the JSON string out of localStorage
    const flicksJSON = localStorage.getItem('flicks')

    // Turn that into an array
    const flicksArray = JSON.parse(flicksJSON)

    // Set this.flicks to that array
    if (flicksArray) {
      flicksArray
        .reverse()
        .map(this.addFlick.bind(this))
    }
   },

moveUp(ev) {
    const button = ev.target
    const listItem = button.parentElement
    flickList.insertBefore(listItem, listItem.previousElementSibling)
},

addFlick(flick) {
    const listItem = this.renderListItem(flick)
    console.log(listItem)
    this.list
      .insertBefore(listItem, this.list.firstChild)
    
    ++ this.max
    this.flicks.unshift(flick)
    this.save()
},

addFlickViaForm(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickname.value,
    }

    this.addFlick(flick)

    f.reset()
  },

  save() {
    localStorage
      .setItem('flicks', JSON.stringify(this.flicks))

  },


    renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item.querySelector('.flick-name').textContent = flick.name
    // item.textContent = flick.name
 

    item.querySelector('button.remove').addEventListener('click', this.removeFlick.bind(this))
    return item
},

removeFlick(ev) {
   const listItem = ev.target.closest('.flick')

   //find flick in array
   for (let i = 0; i < this.flicks.length; i++) {
       const currentId = this.flicks[i].id.toString()
       if (listItem.dataset.id === currentId) {
        this.flicks.splice(i, 1)
        break
       }
   }

   listItem.remove()
   this.save()
},
}  
       
app.init ({
    formSelector: '#flick-form',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
})