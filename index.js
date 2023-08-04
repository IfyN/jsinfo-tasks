//Hide Messages with event delegation 

<!DOCTYPE HTML>
<html>

<head>
  <link rel="stylesheet" href="messages.css">
  <meta charset="utf-8">

  <style>
body {
  margin: 10px auto;
  width: 470px;
}

h3 {
  margin: 0;
  padding-bottom: 0.3em;
  padding-right: 20px;
  font-size: 1.1em;
}

p {
  margin: 0;
  padding: 0 0 0.5em;
}

.pane {
  background: #edf5e1;
  padding: 10px 20px 10px;
  border-top: solid 2px #c4df9b;
  position: relative;
}

.remove-button {
  position: absolute;
  font-size: 110%;
  top: 0;
  color: darkred;
  right: 10px;
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
}

  </style>
</head>

<body>

  <div id="container">
    <div class="pane">
      <h3>Horse</h3>
      <p>The horse is one of two extant subspecies of Equus ferus. It is an odd-toed ungulate mammal belonging to the taxonomic family Equidae. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.</p>
      <button class="remove-button">[x]</button>
    </div>
    <div class="pane">
      <h3>Donkey</h3>
      <p>The donkey or ass (Equus africanus asinus) is a domesticated member of the horse family, Equidae. The wild ancestor of the donkey is the African wild ass, E. africanus. The donkey has been used as a working animal for at least 5000 years.</p>
      <button class="remove-button">[x]</button>
    </div>
    <div class="pane">
      <h3>Cat</h3>
      <p>The domestic cat (Latin: Felis catus) is a small, typically furry, carnivorous mammal. They are often called house cats when kept as indoor pets or simply cats when there is no need to distinguish them from other felids and felines. Cats are often valued by humans for companionship and for their ability to hunt vermin.
      </p>
      <button class="remove-button">[x]</button>
    </div>
  </div>

  <script>
   let container = document.getElementById("container");
//add event listener
container.addEventListener("click", function (event) {
  //get the element that was clicked
  let target = event.target;
  target.closest(".pane").remove();
});

  </script>

</body>
</html>
