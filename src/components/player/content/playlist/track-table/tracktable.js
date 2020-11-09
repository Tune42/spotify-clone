import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './tracktable.scss';
import TrackRow from './trackrow/trackrow';

const TrackTable = ({tracks, album, playerState, API, contextURI}) => {
    return(
        <Table className='track-table' stickyHeader={true}>
            <TableHead>
                <TableRow>
                    <TableCell width="10%">#</TableCell>
                    <TableCell width="40%">Title</TableCell>
                    <TableCell width="40%">Album</TableCell>
                    <TableCell width="10%">Duration</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tracks.map((row, index) => {
                    if (row.track) {
                        return(
                            <TrackRow key={index + row.track.name}
                            index={index} 
                            name={row.track.name} 
                            album={row.track.album.name} 
                            duration={row.track.duration_ms}
                            playerState={playerState}
                            uri={row.track.uri}
                            API={API}
                            contextURI={contextURI} />
                        )
                    } else {
                        return(
                            <TrackRow key={index + row.name}
                            index={index} 
                            name={row.name} 
                            album={album} 
                            duration={row.duration_ms} 
                            playerState={playerState}
                            uri={row.uri}
                            API={API}
                            contextURI={contextURI} />
                        )
                    }
                })}
            </TableBody>
        </Table>
    )
}

export default TrackTable;