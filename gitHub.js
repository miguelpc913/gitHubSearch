class GitHubSearch{
	constructor(){
		this.clientId = "25b52a526fd3724e19c3";
		this.clientSecret ='7e935a594288ddee0d4438f62bc00e6aae1b078c';
		this.repoCount = 5;
		this.repoSort = 'created: asc';
	}
	async get(username){
		const response = await 
		fetch(`https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
		const repoResponse = await 
		fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repoCount}&sort=${this.repoSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);
		const resData = await response.json();
		const repos = await repoResponse.json();
		return {
			profile : resData,
			repos
		}
	}
}