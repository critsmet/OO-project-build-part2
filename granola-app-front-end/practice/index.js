//Upon page load, we make a request to our API and display the Granola's name and description

const granolaList = document.getElementById('granola-list')
const granolaName = document.getElementById('granola-name')
const granolaDescription = document.getElementById('granola-description')
const granolaButton = document.getElementById('add-button')

granolaButton.addEventListener('click', handleSubmitGranola)

function handleSubmitGranola(){
  //Grab the values of the inputs
  let name = granolaName.value
  let description = granolaDescription.value

  let newGranolaObj = JSON.stringify({
    name: name,
    description: description
  })

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json"
    },
    body: newGranolaObj
  }

  //Optimistic
  // fetch("http://localhost:3000/granolas", configObj)
  // putGranolaOnDom()

  //Pessimistic
  fetch("http://localhost:3000/granolas", configObj)
    .then(resToJson)
    .then(function(respObj){
      let granolaObj = respObj.data
      putGranolaOnDom(granolaObj)
    })

  //Reuse fetchGranolas to 'repaint' the DOM
  // fetch("http://localhost:3000/granolas", configObj)
  //   .then(function(){
  //     granolaList.innerHTML = ""
  //     fetchGranolas()
  //   })
}

//Pessimistic rendering is when you wait until the response has been returned succesfully from the server before changing the DOM
//Optimistic rendering where we render the information to the DOM whether or not the server returns a successful request

function fetchGranolas(){
  //fetch all granolas
  fetch("http://localhost:3000/granolas")
    .then(resToJson)
    .then(function(jsonObj){
      granolaList.innerHTML = ""
      //what do I want to do with this JSON object
      //access the data key, which points to an array of granola objects
      //iterate over each object to get the name and description
      //put that information on the DOM
      let data = jsonObj.data
      data.forEach(putGranolaOnDom)
      //a callback function is a function that we pass to another function or a method that determines the logic or return value/result of that function

    })
}

function resToJson(res){
    return res.json()
}

function putGranolaOnDom(granola){
  granolaList.innerHTML += `
    <div id="granola-${granola.id}">
      <li> ${granola.attributes.name}: ${granola.attributes.description}</li>
      <button class="delete" data-id="${granola.id}">Delete</button>
    </div>
  `
}

granolaList.addEventListener('click', handleDelete)

function handleDelete(e){
  if (e.target.className = "delete"){

    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      }
    }

    let id = e.target.dataset.id
    fetch(`http://localhost:3000/granolas/${id}`, configObj)
      .then(function(){
        console.log("Done!")
      })
    let el = document.getElementById(`granola-${id}`)
    el.remove()
    console.log("removed!")
  }
}


fetchGranolas()

// let app = new App("http://localhost:3000")
//
// app.renderData()





//
