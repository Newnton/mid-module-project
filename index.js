$(document).ready(function() {
  toDisplay()
});

function displayStuff(data){
  data.forEach((shot)=>{
    // let title = shot.title
    if(shot.description && shot.description.length > 240){
      $('#main-container .card-columns').append(`<div class="card" style="width: 410px; border: 1px solid #0275d8;"><img class="card-img-top" src="${shot.images.normal}"><div class="card-block"><h4 class="card-title">${shot.title}</h4><p class="card-text" id='${shot.id}'>${shot.description.substring(0, 240)}...</p><br><div class="card-footer"><div style="class="btn-group" role="group"><button type="button" id='more-${shot.id}' class="btn btn-outline-success">...</button><a href=${shot.html_url} class="btn btn-outline-primary">view post</a></div></div></div></div>`)
      addMoreListener(shot.id)
    }
    else{
      $('#main-container .card-columns').append(`<div class="card" style="width: 410px; border: 1px solid #0275d8;"><img class="card-img-top" src="${shot.images.normal}"><div class="card-block"><h4 class="card-title">${shot.title}</h4><p class="card-text">${shot.description}</p><div class="card-footer"><a href=${shot.html_url} class="btn btn-outline-primary">view post</a></div></div></div>`)
    }
  })
}
