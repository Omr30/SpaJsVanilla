import Header from '../templates/Header'
import Home from '../pages/home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header()
}

export default router