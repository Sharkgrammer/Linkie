import links from "./assets/data/links.json";
import {LinkItem} from "./types/LinkItem.ts";

function App() {

    return (
        <div>

            {links.map((link: LinkItem, index: number) =>
                (
                    <LinkPanel link={link} key={index}/>
                )
            )}

        </div>
    )
}

function LinkPanel({link}: { link: LinkItem }) {

    return (
        <>
            <h1>{link.name}</h1>
            <h1>{link.link}</h1>
        </>
    )

}

export default App
