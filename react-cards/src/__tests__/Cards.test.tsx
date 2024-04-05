import { render } from '@testing-library/react';
import CardCustom from '../components/card/CardCustom.tsx';

const card = {
    id: 1,
    name: "John Doe 1",
    image: "https://randomuser.me/api/portraits/med/men/1.jpg",
    email: "augusta.edland@example.com",
    country: "Norway"
}

describe('CardCustom tests image', () => {
    test('alt contains correct value', () => {
        render(<CardCustom card={card} />)
        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(testImage.alt).toContain("User image");
    })

    test('src contains correct value', () => {
        render(<CardCustom card={card} />)
        const testImage = document.querySelector("img") as HTMLImageElement;
        expect(testImage.src).toContain("https://randomuser.me/api/portraits/med/men/");
    })
});