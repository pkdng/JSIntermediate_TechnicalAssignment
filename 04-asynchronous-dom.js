const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async (username) => {
    try {
        if(!username) return null;

        const link = await fetch(`https://api.github.com/users/${username}`);
        let result = await link.json();

        if(result.id) return result;

        return "Not Found";
    } catch (error) {
        throw (error);
    }
};

elFormUsername.onsubmit = async (e) => {
  e.preventDefault();

  const user = await getGitHubUser(elFormUsername.firstElementChild.value);
  
  if(user.id){
      elCardBtn.classList.remove("d-none");
      elCardImg.classList.remove("d-none");
      elCardTitle.innerHTML = user.login
      elCardImg.src = user.avatar_url;
      elCardBtn.href = user.html_url;
  }else{
      elCardBtn.classList.add("d-none");
      elCardImg.classList.add("d-none");
      elCardTitle.innerHTML = "Not Found";
  }
  elCard.classList.remove("d-none");
};
