const loadpost = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const aPosts = data.posts;
    console.log(data);
    displayPost(aPosts);

}
const displayPost = aPosts => {

    const postContainer = document.getElementById('postCard');
aPosts.forEach(post => {
    console.log(post);
    const postCard = document.createElement('div');
    postCard.classList=`bg-[#797DFC] rounded-2xl`
    postCard.innerHTML=`<div class="space-x-4 space-y-4">
    <span># Music</span><p>Author : Awlad Hossain</p>
    <h3>10 Kids Unaware of Their Halloween Costume</h3>
    <p>It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
    <hr class="border-dashed">
    <i class="fa-solid fa-message"> 560</i> 
    <i class="fa-regular fa-eye"> 1,568</i>
    <i class="fa-regular fa-clock"> 5 min</i>
  </div>
  <div class="">
    <i class="fa-regular fa-envelope-open"></i>
  </div>`
  postContainer.appendChild(postCard);
});
    

}
loadpost();
