import { IconCalendar, IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import GraphData from "../ui/bar-chart-graph"


export type HeadingProperties = {
    title: string,
    count: number,
    increase: number
}

export type SectionCardsProperties = {
    title: string,
    count: number,
    increase: number
}

const headingData: HeadingProperties[] = [
    {
        title: "Today Page Views",
        count: 8224,
        increase: -23
    },
    {
        title: "New Accounts",
        count: 6,
        increase: 10
    },
    {
        title: "Today Revenue",
        count: 8224,
        increase: 80
    },
    {
        title: "Today Blog Reads",
        count: 13224,
        increase: 40
    },
]


export default function Dashboard() {
    return (
        <div className="flex flex-1 overflow-auto h-full pb-20">
            <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl bg-[#020b1a] p-2 md:p-10 ">
                <div className="flex w-full justify-between items-center text-white">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex gap-2">
                        <IconCalendar size={20} color="white" />
                        <h3 className="text-sm font-semibold text-white">{new Date().toDateString()}</h3>
                    </div>


                </div>
                <div className="flex gap-2 mt-2">
                    {headingData.map((i, idx) => (
                        <HeadingCard key={"heading-card-" + idx} {...i} />
                    ))}
                </div>
                <GraphData />
                <div className="flex flex-1 gap-2">
                    {[...new Array(2)].map((i, idx) => (
                        <SectionCards key={"section-card-" + idx} />
                    ))}
                </div>
                <div className="flex flex-1 gap-2">
                    {[...new Array(2)].map((i, idx) => (
                        <SectionCards key={"section-card-" + idx} />
                    ))}
                </div>
                <div className="flex flex-1 gap-2">
                    {[...new Array(2)].map((i, idx) => (
                        <SectionCards key={"section-card-" + idx} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export const HeadingCard = ({ title, count, increase }: HeadingProperties) => {
    return (
        <div className="group relative flex w-full flex-col rounded-xl bg-slate-950 p-2 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
            <div className="absolute inset-px rounded-[11px] bg-slate-950" />
            <div className="p-4 relative text-white">
                <div className="text-lg font-semibold">{title}</div>
                <div className="text-2xl font-bold">{count}</div>
                <div className="flex gap-2 ">
                    {
                        increase > 0 ? <IconTrendingUp size={20} color="green" /> : <IconTrendingDown size={20} color="red" />
                    }
                    <div className="text-sm text-gray-400">{increase}% {increase > 0 ? "more" : "less"} yesterday</div>
                </div>
            </div>
        </div>
    );
}



const SectionCards = () => {
    return (
        <div className="group relative flex w-full flex-col rounded-xl bg-slate-950 p-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
            <div className="absolute inset-px rounded-[11px] bg-slate-950" />
            <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                        </div>
                        <h3 className="text-sm font-semibold text-white">Performance Analytics</h3>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Live
                    </span>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-slate-900/50 p-3">
                        <p className="text-xs font-medium text-slate-400">Total Views</p>
                        <p className="text-lg font-semibold text-white">24.5K</p>
                        <span className="text-xs font-medium text-emerald-500">+12.3%</span>
                    </div>
                    <div className="rounded-lg bg-slate-900/50 p-3">
                        <p className="text-xs font-medium text-slate-400">Conversions</p>
                        <p className="text-lg font-semibold text-white">1.2K</p>
                        <span className="text-xs font-medium text-emerald-500">+8.1%</span>
                    </div>
                </div>
                <div className="mb-4 h-24 w-full overflow-hidden rounded-lg bg-slate-900/50 p-3">
                    <div className="flex h-full w-full items-end justify-between gap-1">
                        <div className="h-[40%] w-3 rounded-sm bg-indigo-500/30">
                            <div className="h-[60%] w-full rounded-sm bg-indigo-500 transition-all duration-300" />
                        </div>
                        <div className="h-[60%] w-3 rounded-sm bg-indigo-500/30">
                            <div className="h-[40%] w-full rounded-sm bg-indigo-500 transition-all duration-300" />
                        </div>
                        <div className="h-[75%] w-3 rounded-sm bg-indigo-500/30">
                            <div className="h-[80%] w-full rounded-sm bg-indigo-500 transition-all duration-300" />
                        </div>
                        <div className="h-[45%] w-3 rounded-sm bg-indigo-500/30">
                            <div className="h-[50%] w-full rounded-sm bg-indigo-500 transition-all duration-300" />
                        </div>
                        <div className="h-[85%] w-3 rounded-sm bg-indigo-500/30">
                            <div className="h-[90%] w-full rounded-sm bg-indigo-500 transition-all duration-300" />
                        </div>
                        <div className="h-[65%] w-3 rounded-sm bg-indigo-500/30">
                            <div className="h-[70%] w-full rounded-sm bg-indigo-500 transition-all duration-300" />
                        </div>
                        <div className="h-[95%] w-3 rounded-sm bg-indigo-500/30">
                            <div className="h-[85%] w-full rounded-sm bg-indigo-500 transition-all duration-300" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between">

                    <span className="text-xs font-medium text-slate-400">Last 7 days</span>

                    <button className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-xs font-medium text-white transition-all duration-300 hover:from-indigo-600 hover:to-purple-600">
                        View Details
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
