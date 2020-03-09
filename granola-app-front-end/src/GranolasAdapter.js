class GranolasAdapter{
  constructor(baseURL){
    this.baseURL = baseURL
  }

  //the adapter is going to do all fetch requests that correspond to granolas
  fetchGranolas(){
    fetch(this.baseURL)
      .then(res => res.json())
      .then(resObj => {
        resObj.data.forEach(this.sanitizeAndAddGranola)
      })
      .then(() => console.log(Granola.all))
  }

  newGranola(granolaObj){
    let configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json", "Accepts": "application/json"},
      body: JSON.stringify(granolaObj)
    }
    fetch(this.baseURL, configObj)
      .then(res => res.json())
      .then((resObj) => this.sanitizeAndAddGranola(resObj.data))
  }

  sanitizeAndAddGranola(granolaObj){
    console.log(granolaObj);
    let sanitized = {...granolaObj.attributes, id: granolaObj.id, brandId: granolaObj.relationships.brand.data.id}
    new Granola(sanitized)
  }
}
