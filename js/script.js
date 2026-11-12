const series = [];
const containerCarte = document.querySelector("#carteContainer");
const ajouterBtn = document.getElementById("ajoute-btn");
const nomInput = document.getElementById("serie");
const genreInput = document.getElementById("list-genre");
const descriptionInput = document.getElementById("description");
const searchInput = document.getElementById("search");
const resetBtn = document.getElementById("resetButton");
const formulaire = document.getElementById("formulaire")
// const isAdded = null;

function afficher(data = series) {
  containerCarte.textContent = "";
  data.forEach((serie) => {
    const carte = document.createElement("article");
    carte.classList.add(
      "bg-[#191919]",
      "border",
      "border-[#393939]",
      "rounded-lg",
      "mt-5",
    );
    containerCarte.appendChild(carte);

    const image = document.createElement("img");
    image.src = serie.image.medium || "";
    image.alt = "thumbnail";
    image.classList.add("rounded-t-lg", "w-full", "object-cover");
    carte.appendChild(image);

    const div = document.createElement("div");
    div.classList.add("pl-3");
    carte.appendChild(div);

    const title = document.createElement("h2");
    title.classList.add("text-[#FAFAFA]", "pt-2", "pb-1");
    title.textContent = serie.name;
    div.appendChild(title);

    const genreDiv = document.createElement("div");
    genreDiv.classList.add("flex", "gap-3", "pb-1");
    div.appendChild(genreDiv);

    serie.genres.forEach((genre) => {
      const genreOne = document.createElement("h4");
      genreOne.classList.add(
        "text-[11px]",
        "text-[#EEEEEE]",
        "bg-[#292929]",
        "rounded-xl",
        "text-center",
        "w-100",
        "pt-0.5",
        "whitespace-nowrap",
      );
      genreOne.textContent = genre;
      genreDiv.appendChild(genreOne);
    });

    const description = document.createElement("p");
    description.classList.add(
      "text-[#BABABA]",
      "text-[11px]",
      "pt-1",
      "pb-2",
      "line-clamp-1",
      "md:line-clamp-2",
      "lg:line-clamp-3",
    );
    description.innerHTML = serie.summary + " ...";
    div.appendChild(description);
  });
}

afficher();

async function getData() {
  try {
    const response = await fetch("https://api.tvmaze.com/shows?page=0");
    const data = await response.json();
    series.push(...data);
    console.log(data);
    afficher(data);
  } catch (erreur) {
    alert("erreur");
  }
}
getData();

// ajouterBtn.addEventListener("click" , (e)=>{
//     e.preventDefault();
//     const listeNouveau = {
//         name : nomInput.value,
//         genres : genreInput.value,
//         summary :descriptionInput.value,
//     }
//     series.unshift(listeNouveau);
//     afficher();
// })
searchInput.addEventListener("input", () => {
  rechercheFiltrer();
});

genreInput.addEventListener("change", () => {
  rechercheFiltrer();
});

function rechercheFiltrer() {
  const recherche = searchInput.value.trim().toLowerCase();
  const filtreGenre = genreInput.value;
  const result = series.filter((S) => {
    return (
      S.name.toLowerCase().includes(recherche) &&
      S.genres.includes(filtreGenre)
    );
  });
  afficher(result);
}
resetBtn.addEventListener("click" , (e) =>{
  e.preventDefault();
  formulaire.reset();
  afficher(series)
})

// function filtrageGenre() {
//   const filtreGenre = genreInput.value;
//   // console.log(filtreGenre);
//   const selectedGenre = series.filter((type) => {
//     return type.genres.includes(filtreGenre)
//   });
//   console.log(selectedGenre);

//   afficher(selectedGenre);
// }
