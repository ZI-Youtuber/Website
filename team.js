fetch("/team.json")
  .then((res) => {
    return res.text();
  })
  .then((res) => {
    let team = JSON.parse(res);
    for (let i in team) {
      let card = "";
      card += (team[i].link != undefined) ?
        `<a href="${team[i].link}">`
        : "";
      card += `<div class="team-member">`;
      card += (team[i].pfp != undefined) ?
        `<div class="team-icon" style="background: url(${team[i].pfp})"></div>`
        : "";
      card += `<h2>${team[i].name}</h2>`;
      let jobs = team[i].jobs.join(" • ")
      card += `<p>${jobs}</p>`;
      card += `</div>`;
      card += (team[i].link != undefined) ?
        `</a>`
        : "";
      document.getElementById("team-cards").innerHTML += card;
    }
  })
  .catch(function(err) {
    console.warn(err.message);
  });