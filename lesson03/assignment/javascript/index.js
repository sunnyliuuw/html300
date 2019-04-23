//document ready function, it starts while the document is loaded
$(document).ready(function(){
  //fetch json data. this method only works when page is hosted by gulp
  fetch("./data/data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        //use map function to loop and map all elements in the array
        let dataToDisplay = data.map(function(obj){
          //console the objects in json
          console.log(Object.entries(obj));
          //maps the value
          return `
            <main class="main">
              <article class = "card-container">
                <div class = "card-background">
                  <section class="profile">
                    <img class="profile_headshot" src="./img/unsplash-headshot.jpg" alt="Steve Smith photo">
                    <h1 class="profile_name">${obj.name}</h1>
                    <h2 class="profile_role">${obj.jobTitle}</h2>
                  </section>
                  <section class="card">
                    <div class="card_title">Company: <span class="card_content">${obj.Company}</span></div>
                    <div class="card_title">Experience: <span class="card_content">${obj.Experience}</span></div>
                    <div class="card_title">School: <span class="card_content">${obj.School}</span></div>
                    <div class="card_title">Major: <span class="card_content">${obj.Major}</span></div>
                    <div class="card_title">Email: <span class="card_content">${obj.Email}</span></div>
                    <div class="card_title">
                      <img class="card_linkedin" src="./img/linkedin.svg" alt="linkedin icon"><span class="card_content">${obj.LinkedInUrl}</span>
                    </div>
                  </section>
                </div>
              </article>
            </main>`
        }) //end of map function
        //display the data to html
        $(".template-hook").append(dataToDisplay);

    })
})
