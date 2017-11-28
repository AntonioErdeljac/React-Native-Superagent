import React from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";
import agent from "../agent";

class Main extends React.Component{
	componentWillMount(){
		this.props.onLoad(agent.Articles.all())
	}
	render(){
		if(this.props.articles){
			return (
				<View>
					{this.props.articles.map(article => {
						return <Text>{article.slug}</Text>
					})
					}
				</View>
			);
		}
		return null;
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	onLoad: payload =>
		dispatch({type: 'MAIN_PAGE_LOADED', payload})
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);