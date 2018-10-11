const username = document.querySelector("#username");
const search = new GitHubSearch;
const ui = new UI();
username.addEventListener("keyup", function(){
	const user = username.value;
	if(user !== ''){
		search.get(user).
		then(function(data){
			if(data.profile.message ==="Not Found"){
				ui.makeError();
			}else{
			ui.makeProfile(data.profile);
			ui.makeRepos(data.repos);
		}
		}).
		catch(err => console.log(err));
	}else{
		ui.clear()
	}
});