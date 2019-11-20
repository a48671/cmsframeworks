import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { getInstruments } from '../../helpers';
import {setFavorites, setInstrument} from '../../store/actions/instruments';
import InstrumentItem from '../InstrumentItem';
import Loader from "../Loader";
import Pagination from "../Pagination";
import './instruments.scss';

class Instruments extends PureComponent {

    state = {
        sort: null,
        sort_direction: 'asc',
        isLoading: false
    };

    onClickForSort = newSort => {
        const { setSortInstruments } = this;
        const { sort, sort_direction } = this.state;
        if (newSort === sort) {
            this.setState({sort_direction: sort_direction === 'asc' ? 'desc' : 'asc'}, setSortInstruments);
        } else {
            this.setState({sort: newSort}, setSortInstruments);
        }
    };

    setSortInstruments = () => {
        const { setInstrument, page } = this.props;
        const { sort, sort_direction } = this.state;
        this.setState({isLoading: true});
        getInstruments(page, sort, sort_direction)
            .then(response => {
                const instruments = response.data;
                setInstrument(instruments);
                this.setState({isLoading: false});
            }).catch(error => console.log(error));
    };

    onClickCheckbox = instrumentData => {
        const { setFavorites, favorites} = this.props;
        const newFavorites = {...favorites};
        if (newFavorites[instrumentData.id]) {
            delete newFavorites[instrumentData.id]
        } else {
            newFavorites[instrumentData.id] = {...instrumentData}
        }
        setFavorites(newFavorites);
    };

    changePage = type => {
        const { page, setInstrument } = this.props;
        const { sort, sort_direction } = this.state;
        this.setState({isLoading: true});
        const targetPage = type === 'next' ? page + 1 : page - 1;
        console.log('targetPage: ', targetPage)
        getInstruments(targetPage, sort, sort_direction)
            .then(response => {
                const instruments = response.data;
                setInstrument(instruments);
                this.setState({isLoading: false, page: targetPage});
            }).catch(error => console.log(error));
    };

    render() {
        const { onClickCheckbox, onClickForSort, changePage } = this;
        const { instruments, favorites, lastPage, page } = this.props;
        const { sort, sort_direction, isLoading } = this.state;

        console.log('page: ', page)

        return (
            <div className='instruments'>
                <div className="instruments__head">
                    <div className="instruments__head-item instruments__head-name">Название</div>
                    <div
                        className={`instruments__head-item instruments__head-projects ${sort === 'works_count' ? 'active ' + sort_direction : ''}`}
                        onClick={() => onClickForSort('works_count')}
                    >
                        Проекты
                    </div>
                    <div
                        className={`instruments__head-item instruments__head-projects ${sort === 'partners_count' ? 'active ' + sort_direction : ''}`}
                        onClick={() => onClickForSort('partners_count')}
                    >
                        Партнеры
                    </div>
                    <div
                        className={`instruments__head-item instruments__head-rating ${sort === 'rate' ? 'active '  + sort_direction : ''}`}
                        onClick={() => onClickForSort('rate')}
                    >
                        Оценка пользователей
                    </div>
                    <div className="instruments__head-item instruments__head-compare">Сравнить</div>
                </div>
                {
                    instruments && instruments.map(item => (
                        <InstrumentItem
                            key={item.id}
                            data={item}
                            active={favorites[item.id]}
                            onClickCheckbox={onClickCheckbox}
                            showSponsor
                            showRating
                            showCompare
                        />
                    ))
                }
                <Pagination
                    page={page}
                    nextHandler={() => changePage('next')}
                    prevHandler={() => changePage('prev')}
                    lastPage={lastPage}
                />
                {isLoading && <Loader />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    page: state.instruments.instruments.current_page,
    lastPage: state.instruments.instruments.last_page,
    instruments: state.instruments.instruments.data,
    favorites: state.instruments.favorites
});

const mapDispatchToProps = dispatch => ({
    setInstrument: instrument => dispatch(setInstrument(instrument)),
    setFavorites: favorites => dispatch(setFavorites(favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Instruments);