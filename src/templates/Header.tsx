import { Navigation } from "./Navigation"

export const Header = () => {
    return (
        <header className="m-0 p-10 bg-green-800 grid grid-flow-col justify-between">
            <h1 className="text-6xl text-beige-100">Tienda online</h1>
            <Navigation />
        </header>
    )
}