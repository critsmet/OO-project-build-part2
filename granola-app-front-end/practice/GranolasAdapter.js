class GranolasAdapter{
  constructor(baseURL){
    this.baseURL = baseURL
  }

  fetchGranolas(){
    console.log(this.baseURL);
    fetch(this.baseURL)
      .then(res => res.json())
      .then(({data}) => {
        data.forEach(granola => {
          let granolaObj = {...granola.attributes, id: granola.id, brandId: granola.relationships.brand.data.id}
          let newGran = new Granola(granolaObj)
          console.log(newGran);
        })
      })
  }


}
