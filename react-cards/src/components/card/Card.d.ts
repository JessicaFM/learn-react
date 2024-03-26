export type CardModel = {
    id: number,
    name: string,
    image: string,
    email: string,
    country: string
}

export interface CardProps {
    card: CardModel
}