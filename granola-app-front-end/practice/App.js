class App{
  constructor(baseURL){
    this.baseURL = baseURL
    this.main = document.getElementById('main')
    this.menu = document.getElementById('menu')
    this.granolasAdapter = new GranolasAdapter(this.baseURL+"/granolas")
    //this.brandsAdapter = new BrandsAdapter(this.baseUrl+"/brands")
  }

  fetchData() {
    return Promise.all([this.granolasAdapter.fetchGranolas()])
  }

  renderData(){
    this.fetchData().then(() => console.log("Done"))
  }
}
