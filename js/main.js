document.querySelector('button').addEventListener('click', getColor)

async function getColor() {
    const characterName = document.querySelector('input').value
    try{
    const res = await fetch(`https://red-rising-api.herokuapp.com/api/characters/${characterName}`)
    const data = await res.json()
    document.querySelector('h2').innerText = data.birthColor
    }catch(err) {
    console.log(err)
    }
    
}