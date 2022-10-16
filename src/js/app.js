window.onload = function () {
	const searchForm = document.getElementById("searchForm");
	const searchBar = document.getElementById("searchBar");
	const API_KEY = `k_t093su5o`;
	// k_t093su5o

	let filters = [
		search = "",
		type = ""
	]

	// Fetching the data from API
	async function fetchData() {
		let url = `https://imdb-api.com/en/API/SearchTitle/${API_KEY}`;

		if (filters.search) {
			url = `https://imdb-api.com/en/API/SearchTitle/${API_KEY}/${filters.search}`
		}
		if (filters.type) {
			url = `https://imdb-api.com/en/API/${filters.type}/${API_KEY}/${filters.search}`
		}

		return getMovies(url);
	}
	async function getMovies(url) {
		return fetch(url)
			.then(response => response.json())
			.catch(err => console.error(err));
	}
	async function updateSearchResults() {
		const data = await fetchData();
		console.log(data.results)

		movieSearchResults(data.results);
	}
	updateSearchResults();

	// Displaying the data after searching
	async function movieSearchResults(movieData) {

		// Display Movie
		let movieDisplay = "";

		movieData ? 
		movieData.slice(0, 15).map((item) => {

			movieDisplay += `
				<li class="movie-card flex flex-col justify-center items-start relative w-full max-w-[300px] max-h-[400px] rounded-lg mx-auto shadow-movieCard" id="cards">

					<img src=${item.image === "N/A" || item.image === "" || item.image === null ? 
					item.image = "https://i.ibb.co/h7Q936c/no-image-available.jpg" 
					: item.image} alt=${item.title} class="movie-img block mx-auto w-full bg-cover h-full rounded-lg" id="movieImg">

					<div class="movie-details flex flex-col justify-center items-start gap-2 absolute bottom-[0%] z-10 p-5 duration-100 ease-in-out">
						<div class="movie-rating ">
							<i class='bx bxs-star text-yellow-300'></i>
							<i class='bx bxs-star text-yellow-300'></i>
							<i class='bx bxs-star text-yellow-300'></i>
							<i class='bx bxs-star text-yellow-300'></i>
							<i class='bx bxs-star text-neutral-300'></i>
						</div>
						<h2 class="movie-name text-[20px] text-neutral-100 font-semibold" id="movieTitle">${item.title} ${item.description}</h2>
						
						<a href="" class="watch-now-btn-2 hidden relative duration-100 ease-in-out gap-1 text-[14px] flex-row justify-center items-center text-left text-neutral-100">Watch Now <i class='bx bx-chevron-right text-[18px] font-bold'></i></a>
					</div>

				</li>
				`;
		}) :  movieDisplay = `
		<h1 class="text-[20px] text-neutral-100 font-normal text-center w-full col-span-full gap-2">
		No Movies, Series or Games found for 
		<span class="gradient-hover-effect capitalize tracking-tight text-purple-400 font-semibold"> ${filters.search}.</span> 
		Please try another name.<h1> ` ;

		document.getElementById("cardsContainer").innerHTML = movieDisplay;
	}

	
	function updateType(type){
		filters.type = type;
		updateSearchResults();
	}

	function updateSearch(search){
		filters.search = search;
		updateSearchResults();

		document.querySelector('.hero-sec').classList.remove('hidden');
		document.querySelector('.hero-sec').classList.add('flex');
		document.querySelector('.hero-main').classList.add('hidden');
		document.body.style.backgroundImage = 'url("./src/img/transparent.png")';
		searchBar.value = "";

	}

	// Search For Movies
	searchForm.addEventListener('submit', (e) => {
		e.preventDefault();

		let searchTerm = searchBar.value;
		document.getElementById("searchedMovie").innerHTML = `
			<h1 class="section-title text-center text-[1.5rem] md:text-[2rem] font-bold dark:text-neutral-100 text-neutral-700 mr-3">
				Showing results for <span class="gradient-hover-effect capitalize tracking-tight text-purple-400">${searchTerm}</span>.
			</h1>
		`;

		updateSearch(searchTerm);
	})

	// Filter Buttons
	document.querySelector("#fm").addEventListener("click", () => {
		updateType("SearchMovie");
		document.querySelector("#fm").classList.toggle('active')
		document.querySelector("#fs").classList.remove('active')
		document.querySelector("#fclear").classList.remove('active')
	})
	document.querySelector("#fs").addEventListener("click", () => {
		updateType("SearchSeries");
		document.querySelector("#fm").classList.remove('active')
		document.querySelector("#fs").classList.toggle('active')
		document.querySelector("#fclear").classList.remove('active')
	})
	document.querySelector("#fclear").addEventListener("click", () => {
		updateType("SearchTitle");
		document.querySelector("#fm").classList.remove('active')
		document.querySelector("#fs").classList.remove('active')
	})

	
	// Search Bar Width Size Function 
	const searchBarIcon = document.querySelector("#searchForm form i");

	searchBarIcon.addEventListener('click', () => {

		searchBar.classList.toggle('w-full');
		searchBar.classList.toggle('w-0');
		searchBar.classList.toggle('ml-1');
		searchBar.classList.toggle('pl-1');

	})

}
