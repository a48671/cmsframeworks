import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setFavorites } from "../../store/actions/instruments";
import InstrumentItem from '../InstrumentItem';
import './favorites.scss';

class Favorites extends Component {

    onClickDell = instrumentData => {
        const { setFavorites, favorites} = this.props;
        const newFavorites = {...favorites};
        delete newFavorites[instrumentData.id]
        setFavorites(newFavorites);
    };

    render() {

        const { onClickDell } =this;
        const { favorites } =this.props;
        const favoritesArray = Object.keys(favorites);

        return (
            <div className="favorites">
                <h1 className="favorites__title">Выбранные компании:</h1>
                {
                    favoritesArray.length
                        ?   favoritesArray.map(id => {
                                const item = favorites[id];
                                return(
                                    <InstrumentItem
                                        key={item.id}
                                        data={item}
                                        active={favorites[item.id]}
                                        onClickDell={() => onClickDell(item)}
                                        showDell
                                    />
                                );
                            })
                        :   <div className="favorites__text">Вы не выбрали ни одной компании</div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favorites: state.instruments.favorites
});

const mapDispatchToProps = dispatch => ({
    setFavorites: favorites => dispatch(setFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);