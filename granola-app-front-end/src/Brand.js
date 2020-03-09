class Brand{

  static all = []

  constructor({id, name} ){
    this.name = name
    this.id = id

    this.element = document.createElement('div')
    this.element.className = "brand"
    this.element.id = `brand-${this.id}`

    Brand.all.push(this)
  }

  granolas(){
    return Granola.all.filter(function(granola){
      return granola.brandId === this.id
    }, this)
  }

  fullRender(){
    this.element.innerHTML = `
      <h1>${this.name}</h1>
      <h3>This brand's Granolas:</h3>
      ${this.granolas().map(granola => granola.name).join(", ")}
    `
    return this.element
  }

}
