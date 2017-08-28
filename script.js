$(function(){

	//sign in behance api wesite, register a project
	//fill in details then register project
	//copy and paste the api key below into a 'let'
	let key = 'uoaA2eb3T8Q4rUZL911G2bEzzHow5i6f';


	if($('#index').length>0){

			//from webiste https://www.behance.net/dev/api/endpoints/2
	//after users...put in the person you want to follow
	let urlProjects = 'https://api.behance.net/v2/users/boothehamster/projects?client_id='+key;


	//console log instruction below
	//google search 'chrome extension json viewer'
	//click add to chrome
	//then refresh your index.page
	// console.log(url);

	//ajax request using jquery
	$.ajax({
		url: urlProjects,
		dataType: 'jsonp',
		//res means response...which is response of your data
		success: function(res){
			// console.log(res);
		
			let projects = res.projects;
			_(projects).each(function(project){
				$('<li>'+project.name+'<img src="'+project.covers.original+'"><a href="project.html?projectid='+project.id+'">See More</a></li>').appendTo('ul.projects');
				

			});
		}
	});


	}

////////////////////////looking at single project by id //////////////////



	if($('#project').length>0){
			let pageURL = new URL(document.location);
			let params = pageURL.searchParams;
			let projectid = params.get('projectid');

			let urlProject = 'https://www.behance.net/v2/projects/'+projectid+'?api_key='+key;

			$.ajax({
				url:urlProject,
				dataType: 'jsonp',
				success: function(res){
					let project = res.project;

					$('<h1>'+project.name+'</h1>').appendTo('.container');
					$('<p>'+project.description+'</p>').appendTo('.container');
					$('<h3>'+moment.unix(project.published_on).fromNow()+'</h3>').appendTo('.container');
					$('<img src="'+project.covers.original+'"">').appendTo('.container');

				}

			});

	}



});