import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './tracktable.scss';

const convertMS = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const getTableRow = (index, name, album, duration) => {
    return(
        <TableRow key={index + " - " + name}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{album}</TableCell>
            <TableCell align="center">{convertMS(duration)}</TableCell>
        </TableRow>
    )
}

const TrackTable = ({tracks, album}) => {
    return(
        <Table className='track-table' stickyHeader={true}>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell width="40%">Title</TableCell>
                    <TableCell width="40%">Album</TableCell>
                    <TableCell>Duration</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tracks.map((row, index) => {
                    if (row.track) {
                        return(
                            getTableRow(index, row.track.name, row.track.album.name, row.track.duration_ms)
                        )
                    } else {
                        return(
                            getTableRow(index, row.name, album, row.duration_ms)
                        )
                    }
                })}
            </TableBody>
        </Table>
    )
}

export default TrackTable;