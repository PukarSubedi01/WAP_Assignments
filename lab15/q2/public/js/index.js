$(eventHandler);

function eventHandler() {
  $("#submit").click(() => {
    $.get("/8ball").done(success).fail(failure);
  });

  $("#qText").keyup((e) => {
    if (e.key !== "Enter") return;
    $.get("/8ball").done(success).fail(failure);
  });
}

function success(res) {
  $("#qText").val(res.data);
}

function failure(err) {
  console.log(err);
}
