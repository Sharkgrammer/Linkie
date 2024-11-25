import data from "./assets/data/links.json";
import {LinkItem} from "./types/LinkItem.ts";
import {Section} from "./types/Section.ts";

function App() {

    return (
        <div className="px-2">

            {data.map((section: Section, index: number) =>
                (
                    <SectionPanel data={section} key={index}/>
                )
            )}

        </div>
    )
}

function SectionPanel({data}: { data: Section }) {

    return (
        <div className="py-2">

            <h1 className="py-1">{data.name}</h1>

            <div className="grid grid-cols-2 gap-2 w-full">
                {data.links.map((link: LinkItem, index: number) =>
                    (
                        <LinkPanel link={link} key={index}/>
                    )
                )}
            </div>

        </div>
    )

}

function LinkPanel({link}: { link: LinkItem }) {

    return (
        <div className="h-full w-full bg-red-100 border border-green-500 rounded-2xl max-w-32">
            <a href={link.link}>
                <p className="w-full text-center p-4 truncate">{link.name}</p>
            </a>
        </div>

    )

}

export default App
