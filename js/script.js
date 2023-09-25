$(".page-scroll").on("click", function (e) {
  var tujuan = $(this).attr("href");

  var elemenTujuan = $(tujuan);

  $("html , body").animate({
    scrollTop: elemenTujuan.offset().top - 50,
  });

  e.preventDefault();
});
const fname = document.getElementById('fname');

  function changeName(e) {
    document.getElementById('name').innerHTML = fname.value;
    e.preventDefault()
}
  
function show() {
  document.getElementById('form').classList.remove('d-none')
  document.getElementById('edit').classList.add('d-none')
}
function hide() {
  document.getElementById('form').classList.add('d-none')
  document.getElementById('edit').classList.remove('d-none')
}