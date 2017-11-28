import React from "react";
import {View, Text, ScrollView} from "react-native";
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
				<ScrollView>
					{this.props.articles.map((article, key) => {
						return (<Text key={key}>{article.slug}</Text>)
					})
					}
				</ScrollView>
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