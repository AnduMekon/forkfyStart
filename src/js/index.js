import Search from './models/Search';
import * as searchView from './views/searchView'
import {elements, renderLoader, clearLoader} from './views/base'
/**
 * Global State of the app
 * Search Object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */
const state = { };
const controlSearch = async () => {
    const query = searchView.getInput();
   
    
    if (query) {

        state.search = new Search(query)

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) Search for recipes
            await state.search.getResults();
    
            // 5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
            clearLoader();
        }

        await state.search.getResults()
        
        searchView.renderResults(state.search.result);
        
    }

}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
