import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './tracktable.scss';

const TrackTable = ({data}) => {
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
                {data.tracks.map((row, index) => {
                    return(
                        <TableRow>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.track.name}</TableCell>
                            <TableCell>{row.track.album.name}</TableCell>
                            <TableCell>{row.track.duration_ms}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default TrackTable;