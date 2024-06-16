const searchBox = document.getElementById('search_box')
const showMoreBtn = document.getElementById('show_more_btn')
const searchResult = document.getElementById('search_result')
const searchForm = document.getElementById('search_form')

let page = 1
let keyword = ''
async function searchImages(){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;
  const response  = await fetch(url);
  const data = await response.json();
  if(page === 1){
    searchResult.innerHTML = '';
  }
  const results = data.results;

  results.map((result)=>{
    const image = document.createElement('img')
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank"
    imageLink.appendChild(image)
    searchResult.appendChild(imageLink)
})
showMoreBtn.style.display = "block"
}

searchForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  page =1;
  searchImages();
})

showMoreBtn.addEventListener("click",()=>{
  page++;
  searchImages();
})




const access_key='SdQYBMYL-qn8DlC_G9O8d1NjnysTSCEK2k3HMo3TfUY'