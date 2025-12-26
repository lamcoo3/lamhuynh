let elmIsotopeContainer = document.getElementById("isotope-container");
let elmIsotopeFilters = document.getElementById("isotope-filters");

renderProjects(PROJECTS);

function renderProjects(data) {
  let result = "";

  for (let i = 0; i < PROJECTS.length; i++) {
    const title = PROJECTS[i].title;
    const desc = PROJECTS[i].desc;
    const link = PROJECTS[i].link;
    const thumb = PROJECTS[i].thumb;
    const categoryId = PROJECTS[i].categoryId;
    const tag = PROJECTS[i].tag
    let resultTag = "";

    for (let j = 0; j < tag.length; j++) {
      resultTag += `<span>${tag[j]}</span>`
    }

    result += `<div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-${categoryId}">
              <div class="portfolio-card">
                <div class="portfolio-img">
                  <img src="assets/img/portfolio/${thumb}" alt="Portfolio Item" class="img-fluid">
                  <div class="portfolio-overlay">
                    <a target="_blank" href="../${link}" class="portfolio-details-link"><i class="bi bi-link"></i></a>
                  </div>
                </div>
                <div class="portfolio-info">
                  <h4>${title}</h4>
                  <p>${desc}</p>
                  <div class="portfolio-tags">
                    ${resultTag}
                  </div>
                </div>
              </div>
            </div>`
  }
  elmIsotopeContainer.innerHTML = result;
}

renderCategory(CATEGORIES);

function renderCategory(data) {
  let resultCategory = "<li data-filter='*' class='filter-active'>All</li>";

  for (let i = 0; i < CATEGORIES.length; i++) {
    const id = CATEGORIES[i].id;
    const name = CATEGORIES[i].name;

    resultCategory += `<li data-filter=".filter-${id}">${name}</li>`
  }
  elmIsotopeFilters.innerHTML = resultCategory;

}