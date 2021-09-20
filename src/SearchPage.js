import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import Response from './response';
import { Link } from '@material-ui/core';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();

    // Live Api Call
    const { data } = useGoogleSearch(term);
    
    // Mock Api Call
    //const data = Response;

    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header container">
                <div className="searchPage__headerTop">
                    <Link to='/'>
                    <img className="searchPage__logo" src="/images/logo.png" alt=""/>
                    </Link>
                    <div className="search">
                        <div className="search__input">
                        <SearchIcon className="search__inputIcon"/>
                        <input />
                        <MicIcon />
                    </div>
                </div>
                </div>
                <div className="searchPage__headerBody">
                   <div className="searchPage__options">
                       <div className="searchPage__optionsLeft">
                           <div className="searchPage__option">
                               <SearchIcon />
                               <Link to="/all">All</Link>
                           </div>
                           <div className="searchPage__option">
                               <DescriptionIcon />
                               <Link to="/news">News</Link>
                           </div>
                           <div className="searchPage__option">
                               <ImageIcon />
                               <Link to="/images">Images</Link>
                           </div>
                           <div className="searchPage__option">
                               <LocalOfferIcon />
                               <Link to="/shopping">Shopping</Link>
                           </div>
                           <div className="searchPage__option">
                               <RoomIcon />
                               <Link to="/maps">Maps</Link>
                           </div>
                           <div className="searchPage__option">
                               <MoreVertIcon />
                               <Link to="/more">More</Link>
                           </div>
                       </div>


                       <div className="searchPage__optionsRight">
                           <div className="searchPage__option">
                               <Link to="/settings">Settings</Link>
                           </div>
                           <div className="searchPage__option">
                               <Link to="/tools">Tools</Link>
                           </div>
                       </div>
                   </div>
                </div>
            
            </div>
            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultsCount">
                        About {data?.searchInformation.formattedTotalResults} results({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link} className="searchPage__resultImageLink">
                                {item.pagemap?.cse_image?.length>0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className="searchPage__resultImage" src={
                                        item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
                                    }
                                    alt="" />
                                )}
                                {item.displayLink} |
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">{item.snippet}</p>
                        </div>
                    ))}

                </div>
            )}
            
        </div>
    )
}

export default SearchPage
