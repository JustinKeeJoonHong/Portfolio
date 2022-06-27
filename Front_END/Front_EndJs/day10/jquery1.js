$(() => {
  $(".hdrWrap h2").click(() => {
    $(".navWrap").slideDown();
  });

  $(`.navWrap`).mouseleave(() => {
    $(".navWrap").slideUp();
  });
});
