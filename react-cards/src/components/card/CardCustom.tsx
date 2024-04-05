import { CardProps } from "./Card"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CardCustom(props: CardProps) {
    const card_data = props.card
    return (
        <Card variant="outlined">
             <CardMedia
                component="img"
                height="194"
                image={card_data.image}
                alt="User image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {card_data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap>                    {card_data.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {card_data.country}
                </Typography>
            </CardContent>
        </Card>
    )
}