const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

 const getNewHeroDiv = document.getElementById('newhero')
 const newOneDiv = document.getElementById('newOne')
 const searchBtn = document.getElementById('searchHero')
 const searchInput = document.getElementById('searchInput')

const getSuperHero = (id,name) => {
     
      fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            const name = `<h2>${json.name}</h2>`
            const superHero =json
            showHeroInfo(superHero)
            })
        }

        const statToEmoji = {
              intelligence: '🧠',
              strength: '💪',
              speed: '⚡',
              durability: '🏋️‍♂️',
              power: '📊',
              combat: '⚔️',
            }

            const showHeroInfo = (character) => {
                  const name = `<h2>${character.name}</h2>`
                
                  const img = `<img src="${character.image.url}" height=200 width=200/>`
                  
                  const stats = Object.keys(character.powerstats).map(stat => {
                    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
                  }).join('')
                  
                 newOneDiv.innerHTML = `${name}${img}${stats}`
                }
const getSuperHeroSearch =(name) =>{
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
        .then(json => {
           
            const hero=json.results[0]
            console.log(hero)
      showHeroInfo(hero)
            })


}        
 const randomHero = () =>{
            const numberofHero = 731
            return Math.floor(Math.random() * numberofHero)+1
        } 
        
        getNewHeroDiv.onclick=()=> getSuperHero(randomHero()) 
        searchBtn.onclick=()=>getSuperHeroSearch(searchInput.value)
 