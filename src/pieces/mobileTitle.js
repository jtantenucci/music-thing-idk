import { React } from 'react';
import CardHeader from '@material-ui/core/CardHeader';

export default function MobileTitle({ title, artist }) {
    return (
        <>
          <CardHeader title={title} subheader={artist} />
        </>
    );
}