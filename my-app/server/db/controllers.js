const url = 'https://superheroapi.com/api/10217002715925793';

function makeHeroTable() {
  let id = 1;
  while (id < 732) {
    axios.get(`${url}/${id}`)
      .then(data => {
        let hero = data.data;
        db.none(
          `INSERT INTO index VALUES(${hero.id}, ${hero.name})`
        )
      })
    id++
  }
}

function addToTeam() {

}

function showTeam() {

}

function deleteHero() {

}