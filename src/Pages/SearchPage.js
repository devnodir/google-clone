import React from 'react';
import {connect} from "react-redux";
import useGoogleSearch from "../Components/useGoogleSearch";
import {Link} from "react-router-dom";
import Search from "../Components/Search";
import SearchIcon from "@material-ui/icons/Search";
import {Description, Image, LocalOffer, Room, MoreVert} from "@material-ui/icons";


const SearchPage = ({term}) => {

    const {data} = useGoogleSearch(term)

    return (
        <div className={'searchPage'}>

            <div className="searchPage__header">
                <Link to={'/'}>
                    <img className={'search__logo'}
                         src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                         alt=""/>
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons term={term}/>
                    <div className="search-options">
                        <div className="left">
                            <div className="option">

                                <Link to={'/all'}><SearchIcon/> All</Link>
                            </div>
                            <div className="option">

                                <Link to={'/news'}><Description/> News</Link>
                            </div>
                            <div className="option">

                                <Link to={'/images'}><Image/> Images</Link>
                            </div>
                            <div className="option">

                                <Link to={'/shopping'}><LocalOffer/> Shopping</Link>
                            </div>
                            <div className="option">

                                <Link to={'/maps'}><Room/> Maps</Link>
                            </div>
                            <div className="option">

                                <Link to={'/more'}><MoreVert/> More</Link>
                            </div>
                        </div>
                        <div className="right">
                            <div className="option">
                                <Link to={'/settings'}>Settings</Link>
                            </div>
                            <div className="option">
                                <Link to={'/tools'}>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                term && (
                    <div className="searchPage__results">
                        <p className="result-count">About {data?.searchInformation.formattedTotalResults} results
                            ({data?.searchInformation.formattedSearchTime} seconds) for {term} </p>

                        {
                            data?.items?.map(item => (
                                <div className={'result'}>
                                    <a href={item.link}>
                                        {
                                            item.pagemap?.cse_image ? (
                                                <img className={'result-img'} src={item.pagemap.cse_image[0].src}
                                                     alt=""/>
                                            ) : ''
                                        }
                                        {item.displayLink}</a>
                                    <a href={item.link} className="result-title">
                                        <h2>{item.title}</h2>
                                    </a>
                                    <p className="result-snippet">{item.snippet}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
};

export default connect(({myReducer: {term}}) => ({term}))(SearchPage);
