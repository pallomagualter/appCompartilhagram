import React, { Componet } from 'react';
import Header from './src/components/Header';
import { View } from 'react-native';
import Post from './src/components/Post';

export default class App extends Componet {
	render() {
		const comments = [{
			nickname: 'Palloma Gualter',
			comment: 'Excelente foto!'
		}, {
			nickname: 'Rafael Pereira',
			comment: 'Muito ruim! Faço melhor...'
		}]

		return (
			<View style={{ flex: 1 }}>
				<Header />
				<Post 
					image={require('./assets/imgs/fence.jpg')} 
					comments={comments}
				/>
			</View>
		)
	}
}