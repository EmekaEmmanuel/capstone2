let getAllShows = async (baseURL) => {
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
            return [{ title: "Shows", data, total: datalength }, { title: "Reality", realityGenre, total: realityLength }, { title: "Animation", animationGenre, total: animationLength }];
        }
    } catch (error) {
        throw new Error()
    }
}

export default getAllShows