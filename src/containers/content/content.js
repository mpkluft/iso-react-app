import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button'; 
import _take from 'lodash/take'; //взять несколько элементов из array
import './content.css';

export default class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {numbersOfNews: 5};
  }
	
  componentDidMount() {
  	console.log('mount');
  }

	showMoreNews(e){
		e.preventDefault();
		let addNews = 3,
				newsLength = this.props.news.length,
				numbersOfNews = this.state.numbersOfNews;

		console.log(numbersOfNews);

		if(newsLength > this.state.numbersOfNews) {

			this.setState({
				numbersOfNews: this.state.numbersOfNews + addNews
			});
			numbersOfNews += addNews;
			console.log(numbersOfNews);
		}  
		if(newsLength <= numbersOfNews) {
			let button = document.getElementsByClassName('content__button-show-more-news')[0];
			button.className = 'none animated bounceIn';
		}

//		if(newsLength - addNews < numbersOfNews) {
//				console.log(document.getElementsByClassName('content__button-show-more-news')[0]);
//			}

	}

	render() {
		var news = _take(this.props.news, this.state.numbersOfNews);

		var newsTemplate = news.map((item, index) => {
			return (
				<article className = 'content-article animated bounceIn' key = {index}>
					<header className = 'content-article__header'>
						<a className = 'content-article__a'>
							{item.header}
						</a>
					</header>
					<div className = 'content-article__description'>
						{item.description}
					</div>
				</article>
			)
		});

		return(
			<div className = 'content'>
				<Grid>
					<div className = 'row'>
						<div className = 'col-md-8'>
						{newsTemplate}
						</div>
					</div>
					<div className = 'row'>
						<div className = 'col-md-8'>
							<Button 
							className = 'content__button-show-more-news'
							onClick = {this.showMoreNews.bind(this)}>
								Показать больше записей
							</Button>
						</div>
					</div>
				</Grid>
			</div>
		);
	}
}