import { TableRow, TableCell } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const convertMS = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const TrackRow = ({index, name, album, albumURI, duration, playerState, uri, API, contextURI, changeContextURI}) => {
    const [button, setButton] = useState();
    const [label, setLabel] = useState(index + 1);
    const [hover, setHover] = useState(false);
    const [playing, setPlaying] = useState('');

    useEffect(() => {
        if (playerState) {
            if ((playerState.trackURI === uri || playerState.linkedFrom === uri) && !playerState.paused) {
                setButton(<i className='fa fa-pause' style={{color: '#1ED760'}}></i>)
                setLabel(<EqualizerIcon fontSize='inherit' htmlColor=' #1ED760' />);
                setPlaying('playing');
            } else {
                setButton(<i className='fa fa-play'></i>);
                setLabel(index + 1);
                setPlaying('');
            }
        } else {
            setButton(<i className='fa fa-play'></i>);
            setLabel(index + 1);
            setPlaying('');
        }
    }, [index, playerState, uri]);

    const toggle = () => {
        if (playerState) {
            if (playerState.paused || (playerState.trackURI !== uri && playerState.linkedFrom !== uri)) {
                API.play({context_uri: contextURI, offset: {position: index}});
                setButton(<i className='fa fa-pause'></i>)
            } else {
                API.pause();
                setButton(<i className='fa fa-play'></i>);
            }
        }
    }

    return(
        <TableRow 
        key={index + " - " + name}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <TableCell onClick={() => toggle()}>{hover ? button : label}</TableCell>
            <TableCell><span className={playing + ' link'} onClick={() => toggle()}>{name}</span></TableCell>
            <TableCell><span className={playing + ' link'} onClick={() => changeContextURI(albumURI)}>{album}</span></TableCell>
            <TableCell align="center"><span className={playing}>{convertMS(duration)}</span></TableCell>
        </TableRow> 
    )
}

export default TrackRow;