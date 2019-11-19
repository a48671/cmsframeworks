import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { getInstruments } from '../../helpers';
import { setInstrument } from '../../store/actions/instruments';
import InstrumentItem from '../InstrumentItem';

class Instruments extends PureComponent {
    render() {
        const { instruments } = this.props;
        return (
            <div className='instruments'>
                <div className="instruments__head">
                    <div className="instruments__head-item instruments__head-name">Название</div>
                    <div className="instruments__head-item instruments__head-projects">Проекты</div>
                    <div className="instruments__head-item instruments__head-projects">Партнеры</div>
                    <div className="instruments__head-item instruments__head-rating">Оценка пользователей</div>
                    <div className="instruments__head-item instruments__head-compare">Сравнить</div>
                </div>
                {instruments && instruments.map(item => <InstrumentItem key={item.id} data={item} active={false} />)}
            </div>
        );
    }

    componentDidMount() {
        const { setInstrument, instruments } = this.props;
        console.log(instruments)
        if(!Boolean(instruments)) {
            getInstruments(3)
                .then(response => {
                    const instruments = response.data;
                    setInstrument(instruments);
                }).catch(error => console.log(error));
        }
    }
}

const mapStateToProps = state => ({
    instruments: state.instruments.instruments.data
});

const mapDispatchToProps = dispatch => ({
    setInstrument: instrument => dispatch(setInstrument(instrument))
});

export default connect(mapStateToProps, mapDispatchToProps)(Instruments);