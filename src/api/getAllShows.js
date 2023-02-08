let getAllShows = async (baseURL) => {
    // const baseURL = 'https://api.tvmaze.com/shows'
    try {
        let result = await fetch(baseURL)
        if (result.ok) {
            let data = await result.json()
            let datalength = data.length
            let realityGenre = data.filter((show) => show.type === "Reality"
            );
            let realityLength = realityGenre.length;
            let animationGenre = data.filter((show) => show.type === "Animation"
            );
            let animationLength = animationGenre.length;
            console.log([{ title: "Shows", data, datalength }, { title: "Reality", realityGenre, realityLength }, { title: "Animation", animationGenre, animationLength }
        ])
            return [{ title: "Shows", data, total:datalength }, { title: "Reality", realityGenre, total:realityLength }, { title: "Animation", animationGenre, total:animationLength }];
        }
    } catch (error) {
        throw new Error()
    }
}

export default getAllShows