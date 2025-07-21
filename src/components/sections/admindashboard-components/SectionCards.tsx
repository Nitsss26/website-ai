// import { UserInfo } from "./DashboardHeader";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../../ui/chart";
import {  CartesianGrid, XAxis, Area, AreaChart } from "recharts";

const SectionCards = () => {
  // const user = {
  //   created_at: "-",
  //   team: "No Team",
  //   ...userInfo,
  // };
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

const chartData = [
    { month: "January", desktop: 186, users: 100, newUsers: 50 },
    { month: "February", desktop: 305, users: 120, newUsers: 70 },
    { month: "March", desktop: 237, users: 80, newUsers: 30 },
    { month: "April", desktop: 73, users: 90, newUsers: 40 },
    { month: "May", desktop: 209, users: 110, newUsers: 60 },
    { month: "June", desktop: 214, users: 130, newUsers: 90 },
]

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
            <h3 className="text-sm font-semibold text-white">Users Growth</h3>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Live
          </span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-slate-900/50 p-3">
            <p className="text-xs font-medium text-slate-400">Total Users</p>
            <p className="text-lg font-semibold text-white">24.5K</p>
            <span className="text-xs font-medium text-emerald-500">+12.3%</span>
          </div>
          <div className="rounded-lg bg-slate-900/50 p-3">
            <p className="text-xs font-medium text-slate-400">New Users</p>
            <p className="text-lg font-semibold text-white">1.2K</p>
            <span className="text-xs font-medium text-emerald-500">+8.1%</span>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-lg bg-slate-900/50 p-3 text-white">

          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <AreaChart data={chartData}>
              <defs>

                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  return value.substring(0, 3);
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return value.substring(0, 3);
                    }}
                    indicator="dot"
                  />
                }
              />

              <Area
                dataKey="newUsers"
                type="natural"
                fill="#0066ff40"
                stroke="#0066ff"
                stackId="a"
              />
              <Area
                dataKey="users"
                type="natural"
                fill="#13C29640"
                stroke="#13C296"
                stackId="a"

              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </div>
        <span className="text-xs font-medium text-slate-400">Last 7 days</span>


      </div>
    </div>
  );
};

export default SectionCards;
