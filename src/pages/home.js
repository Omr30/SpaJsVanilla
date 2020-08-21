import getData from '../utils/getData'

const Home = async () => {
    const Characters = await getData()
    const view = `
        <div class="Characters">
            ${Characters.results.map(Character => `
                <article class="Character-item">
                    <a href="#/${Character.id}/">
                        <img src="${Character.image}" alt="${Character.name}">
                        <h2>${Character.name}</h2>
                    </a>
                </article>
            `).join('')}
            
        </div>
    `;
    return view
}

export default Home