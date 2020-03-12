import Search from './models/Search';
import * as searchViews from './views/searchView';
import {elements} from './views/base';
/**
 * Global State of the app
 * Search Object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */
const state = { };
const controlSearch = async () => {
    const query = 'pizza';
    if (query) {

        state.search = new Search(query)

        await state.search.getResults()
        state.search.getResults();
        console.log(state.search.result)
    }

}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});