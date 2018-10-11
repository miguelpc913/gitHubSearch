const space = document.querySelector("#userProfile");

class UI{
	async makeProfile(data){
		space.innerHTML = "";
		space.innerHTML = `
		<div class="row text-center">
			<div class="col-12 justify-content-between">
				<div class="d-flex justify-content-between mb-4">
					<span class="badge badge-primary ">Public repositories: ${data.public_repos}</span>
					<span class="badge badge-secondary ">Public gist: ${data.public_gists}</span>
					<span class="badge badge-success ">Followers: ${data.followers}</span>
					<span class="badge badge-secondary  ">Following: ${data.following}</span>
				</div>
			</div>
			<div class="card col-7">
				<img src="${data.avatar_url}" class="img-fluid py-4" >
				<a href="${data.html_url}" class="btn btn-primary mb-4" target="_blank">Click to see the profile!</a>
			</div>
			<div class="col-5 my-auto"> 
				<h1 class="mb-5">${data.name}</h1>
				<h3 >Company: ${data.company}</h1>
				<h3>Location: ${data.location}</h3>
			</div>
			</div>
		</div>
		<h3 class="page-heading my-3">Latest Repositories</h3>
		<div id="latestRepos">
		</div>
		`;
	}
	makeError(){
		space.innerHTML = "";
		space.innerHTML = `
		<div class="alert alert-primary" role="alert">
 		User Not Found
		</div>
		`;
		setTimeout(() =>{space.innerHTML = "";} , 5000 )

	}
	clear(){
		space.innerHTML= "";
	}
	makeRepos(repositories){
		const repos = document.querySelector("#latestRepos");
		let output = "";
		repositories.forEach(function(repository){
			console.log(repository.name);
			output += `
			<div class="card card-body mb-2">
				<div class= "row">
					<div class="col-6">
						<a target="_blank" href="${repository.html_url}">${repository.name}</a>
					</div>
					<div class="col-6">
						<span class="badge badge-primary ">Stars: ${repository.stargazers_count}</span>
						<span class="badge badge-secondary ">Watchers: ${repository.watchers_count}</span>
						<span class="badge badge-success ">Forks: ${repository.forks_count}</span>
					</div>
				</div>
			</div>
			`
		});
		repos.innerHTML = output;
	}
}