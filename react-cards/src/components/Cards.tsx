import { JoinFullTwoTone } from '@mui/icons-material';
import * as card_example from '../cards_example.ts'
import CardCustom from './card/CardCustom.tsx'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Cards() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    { card_example.array_cards.map((data) => {
                        return (
                            <Grid item xs={6} md={3} key={data.id}>
                                <CardCustom
                                    card={data}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </>
    )
}JoinFullTwoTone