import { TableRow, TableCell } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const convertMS = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const TrackRow = ({index, name, album, duration, playerState, uri, API, contextURI}) => {
    const [button, setButton] = useState();
    const [label, setLabel] = useState(index + 1);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        if (playerState.trackURI === uri && !playerState.paused) {
            setButton(<i className='fa fa-pause'></i>)
            setLabel(<EqualizerIcon fontSize='inherit' htmlColor=' #1ED760' />);
        } else {
            setButton(<i className='fa fa-play' style={{color: '#1ED760'}}></i>);
            setLabel(index + 1);
        }
    }, [index, playerState, uri]);

    const toggle = () => {
        if (playerState.paused || playerState.trackURI !== uri) {
            API.play({context_uri: contextURI, offset: {position: index}});
            setButton(<i className='fa fa-pause'></i>)
        } else {
            API.pause();
            setButton(<i className='fa fa-play'></i>);
        }
    }

    return(
        <TableRow key={index + " - " + name}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
            <TableCell onClick={() => toggle()}>{hover ? button : label}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{album}</TableCell>
            <TableCell align="center">{convertMS(duration)}</TableCell>
        </TableRow> 
    )
}

export default TrackRow;