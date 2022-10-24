	const API_KEY = `k_t093su5o`;



	// Fetching the data from API
	async function fetchTopMoviesData() {
		let url = `https://imdb-api.com/en/API/MostPopularMovies/${API_KEY}`;

		return getMovies(url);
	}
	async function getMovies(url) {
		return fetch(url)
			.then(response => response.json())
			.catch(err => console.error(err));
	}
	async function updateResults() {
		const data = await fetchTopMoviesData();
		console.log(data.items)

		topMovies(data.items);
	}
	updateResults();

	// Displaying the data after searching
	async function topMovies(movieData) {

		// Display Movie
		let movieDisplay = "";


		movieData.slice(0, 4).map((item) => {

			movieDisplay += `
			<li class="movie-card flex flex-col justify-center items-start relative w-full max-w-[300px] rounded-lg mx-auto shadow-movieCard"
			id="topMoviesCard">

			<img src=${item.image === "N/A" || item.image === "" || item.image === null ? 
			item.image = "https://i.ibb.co/h7Q936c/no-image-available.jpg" 
			: item.image} alt=${item.title}
				class="block mx-auto w-full bg-cover h-full rounded-lg" id="movieImg">

				<div
				class="movie-details flex flex-col justify-between items-start gap-2 absolute bottom-[0%] z-10 p-5 duration-100 ease-in-out h-full w-full">
				<div class="top-details mb-auto w-full flex flex-row justify-between items-center gap-3">
					<p class="movie-tag px-2 py-1 text-[14px] text-primary-teal bg-primary-bg50 rounded-lg capitalize"
					id="movieGenre">
						Movie
					</p>
					<p class="text-[16px] text-neutral-100 font-normal flex flex-row justify-center items-center gap-1"><i class='text-yellow-200 text-[1.1em] font-bold bx bxs-medal' ></i>${item.rank}</p>

				</div>
				
				<div class="movie-rating flex flex-row justify-center items-center gap-1">
					<i class='bx bxs-star text-yellow-300'></i>
					<p class="text-[16px] text-neutral-100 font-normal">${item.imDbRating}</p>
					<p class="text-[16px] text-neutral-100 font-normal">(${item.imDbRatingCount})</p>
				</div>
				<h2 class="movie-name text-[20px] text-neutral-100 font-semibold" id="movieTitle">${item.fullTitle}
				</h2>

				<a href=""
					class="watch-now-btn-2 hidden relative duration-100 ease-in-out gap-1 text-[14px] flex-row justify-center items-center text-left text-neutral-100">Watch
					Now <i class='bx bx-chevron-right text-[18px] font-bold'></i></a>
			</div>

		</li>
		`;
		})

		document.getElementById("topMoviesContainer").innerHTML = movieDisplay;



		

	// Fetching the data from API
	async function fetchTopTVs() {
		let url = `https://imdb-api.com/en/API/MostPopularTVs/${API_KEY}`;

		return getTVs(url);
	}
	async function getTVs(url) {
		return fetch(url)
			.then(response => response.json())
			.catch(err => console.error(err));
	}
	async function updateResults() {
		const data = await fetchTopTVs();
		console.log(data.items)

		topTVs(data.items);
	}
	updateResults();

	// Displaying the data after searching
	async function topTVs(shows) {

		// Display Movie
		let showDisplay = "";


		shows.slice(0, 4).map((item) => {

			showDisplay += `
			<li class="movie-card flex flex-col justify-center items-start relative h-full w-full max-w-[300px] rounded-lg mx-auto shadow-movieCard"
			id="topTVsCard">

			<img src=${item.image === "N/A" || item.image === "" || item.image === null ? 
			item.image = "https://i.ibb.co/h7Q936c/no-image-available.jpg" 
			: item.image} alt=${item.title}
				class="block mx-auto w-full h-full rounded-lg" id="movieImg">

				<div
				class="tv-details flex flex-col justify-between items-start gap-2 absolute bottom-[0%] z-10 p-5 duration-100 ease-in-out h-full w-full">
				<div class="top-details mb-auto w-full flex flex-row justify-between items-center gap-3">
					<p class="tv-tag px-2 py-1 text-[14px] text-primary-teal bg-primary-bg50 rounded-lg capitalize"
					id="tvGenre">
						TV Series
					</p>
					<p class="text-[16px] text-neutral-100 font-normal flex flex-row justify-center items-center gap-1"><i class='text-yellow-200 text-[1.1em] font-bold bx bxs-medal' ></i>${item.rank}</p>

				</div>
				
				<div class="tv-rating flex flex-row justify-center items-center gap-1">
					<i class='bx bxs-star text-yellow-300'></i>
					<p class="text-[16px] text-neutral-100 font-normal">${item.imDbRating}</p>
					<p class="text-[16px] text-neutral-100 font-normal">(${item.imDbRatingCount})</p>
				</div>
				<h2 class="tv-name text-[20px] text-neutral-100 font-semibold" id="movieTitle">${item.fullTitle}
				</h2>

				<a href=""
					class="watch-now-btn-2 hidden relative duration-100 ease-in-out gap-1 text-[14px] flex-row justify-center items-center text-left text-neutral-100">Watch
					Now <i class='bx bx-chevron-right text-[18px] font-bold'></i></a>
			</div>

		</li>
		`;
		})

		document.getElementById("topTVsContainer").innerHTML = showDisplay;
	}

}

	
