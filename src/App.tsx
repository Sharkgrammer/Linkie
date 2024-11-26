import data from "./assets/data/links.json";
import settings from "./assets/data/settings.json";
import {LinkItem} from "./types/LinkItem.ts";
import {Section} from "./types/Section.ts";

function App() {

    return (
        <div className="flex justify-center w-full py-2">
            <div className="pb-5 flex flex-col gap-4 w-full max-w-[90%] lg:max-w-[70%]">

                {settings.profile && (
                    <div className="flex flex-col items-center">
                        <img src={settings.profile.img} className="w-48 h-48 rounded-full p-2"/>

                        <h1 className="font-bold">{settings.profile.name}</h1>
                        <h4 className="text-gray-200">{settings.profile.desc}</h4>
                    </div>
                )}

                <div className={`px-2 w-full flex flex-col items-center gap-10 text-center`}>

                    {data.map((section: Section, index: number) =>
                        (
                            <SectionPanel data={section} key={index}/>
                        )
                    )}

                </div>
            </div>
        </div>
    )
}

function SectionPanel({data}: { data: Section }) {

    return (
        <div className="w-full">

            <h1>{data.name}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-3 w-full">
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
        <div
            className="h-full w-full bg-pane-background hover:bg-pane-background-light rounded-2xl odd:last:col-span-2 text-gray-200 hover:text-white">
            <a href={link.link}>
                <p className="w-full p-4 truncate text-xl">{link.name}</p>
            </a>
        </div>

    )

}

export default App
