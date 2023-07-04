
const projectName = document.querySelector("#project-name");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const description = document.querySelector("#description");
const file = document.querySelector("#input-blog-image");

const form = document.querySelector("#form");


let blogData = [];

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
   const valueProjectName = projectName.value;
   const valueStardate = startDate.value;
   const valueEndDate = endDate.value;
   const valueDescription = description.value;
   let files = file.files;
    
   files = URL.createObjectURL(files[0]);

    let data = [];
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            data.push(item.value);
        }

    })


    let schema = {
        valueProjectName,
        valueStardate,
        valueEndDate,
        valueDescription,
        // files,
        data
    }


    // pengambilan data dari checkbox

   console.log(files);

})