class Granola{

  static all = []

  constructor({id, brandId, name, description}){
    this.id = id
    this.brandId = brandId
    this.name = name
    this.description = description

    Granola.all.push(this)
  }
}
