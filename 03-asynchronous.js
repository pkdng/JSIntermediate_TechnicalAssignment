import fetch from 'node-fetch';

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
}
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();
