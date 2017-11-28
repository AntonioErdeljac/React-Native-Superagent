import {createStore, combineReducers, applyMiddleware} from "redux";
import {promiseMiddleware} from "./middleware";

const initalState = {
	articles: [
		{
            "title": "test",
            "slug": "test-ed6jb9",
            "body": "Well we are testing",
            "createdAt": "2017-11-27T22:17:40.395Z",
            "updatedAt": "2017-11-27T22:18:17.431Z",
            "tagList": [],
            "description": "About testing",
            "author": {
                "username": "disjfa",
                "bio": "Ut avitae aliquam erat, eget porttitor quam. Aliquam pellentesque tortor vel mattis mattis. Cras auctor efficitur fringilla. Donec in euismod ex. Nulla id dolor eros. Quisque ipsum nibh, lacinia quis nisl ac, mattis imperdiet magna. Curabitur interdum vestibulum magna, ut vehicula sapien placerat maximus. Cras sit amet rhoncus tellus, sit amet varius libero. Aliquam commodo urna ullamcorper, convallis risus a, maximus orci. Suspendisse sem ipsum, lacinia ac metus quis, tincidunt auctor lorem. Mauris malesuada nisl arcu, sagittis finibus diam facilisis sed. Suspendisse quam mauris, interdum nec diam ut, tristique malesuada urna. Donec id laoreet mauris.",
                "image": "https://images.unsplash.com/photo-1494256997604-768d1f608cac?dpr=1&auto=format&fit=crop&w=200&h=200&q=60&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "following": false
            },
            "favorited": false,
            "favoritesCount": 0
        }
	]
};

const reducer = (state=initalState, action) => {
	switch(action.type){
		case 'MAIN_PAGE_LOADED':
			return {
				...state,
				articles: action.payload.articles
			}
	}
	return state;
}

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

export default store;