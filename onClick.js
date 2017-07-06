$(document).ready(function() {
  $("#more").on('click', function(){
    console.log('clicked!')
    toDisplay()})
});

function addMoreListener(id){
  $(`#more-${id}`).on('click', function(event){
    event.preventDefault()
    $.get(`https://api.dribbble.com/v1/shots/${id}?access_token=10e05172474bedfe6a6102e4d6e08be4bf6f82f29cc8b7094db994c55efe85b3`, function(data){
      $(`#${id}`).html(data.description)
    })
  })
}
