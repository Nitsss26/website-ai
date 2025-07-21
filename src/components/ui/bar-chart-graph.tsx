"use client"
import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// If the above import fails, update the path below to the correct location of your Select component, for example:
// } from "../select"
// or
// } from "@/components/select"
// Make sure the Select component exists at the specified path.
export const description = "An interactive area chart"
const chartData = [
  { date: "2024-04-01", All: 372, desktop: 222, mobile: 150 },
  { date: "2024-04-02", All: 277, desktop: 97, mobile: 180 },
  { date: "2024-04-03", All: 287, desktop: 167, mobile: 120 },
  { date: "2024-04-04", All: 502, desktop: 242, mobile: 260 },
  { date: "2024-04-05", All: 663, desktop: 373, mobile: 290 },
  { date: "2024-04-06", All: 641, desktop: 301, mobile: 340 },
  { date: "2024-04-07", All: 425, desktop: 245, mobile: 180 },
  { date: "2024-04-08", All: 729, desktop: 409, mobile: 320 },
  { date: "2024-04-09", All: 169, desktop: 59, mobile: 110 },
  { date: "2024-04-10", All: 451, desktop: 261, mobile: 190 },
  { date: "2024-04-11", All: 677, desktop: 327, mobile: 350 },
  { date: "2024-04-12", All: 502, desktop: 292, mobile: 210 },
  { date: "2024-04-13", All: 722, desktop: 342, mobile: 380 },
  { date: "2024-04-14", All: 357, desktop: 137, mobile: 220 },
  { date: "2024-04-15", All: 290, desktop: 120, mobile: 170 },
  { date: "2024-04-16", All: 328, desktop: 138, mobile: 190 },
  { date: "2024-04-17", All: 806, desktop: 446, mobile: 360 },
  { date: "2024-04-18", All: 774, desktop: 364, mobile: 410 },
  { date: "2024-04-19", All: 423, desktop: 243, mobile: 180 },
  { date: "2024-04-20", All: 239, desktop: 89, mobile: 150 },
  { date: "2024-04-21", All: 337, desktop: 137, mobile: 200 },
  { date: "2024-04-22", All: 394, desktop: 224, mobile: 170 },
  { date: "2024-04-23", All: 368, desktop: 138, mobile: 230 },
  { date: "2024-04-24", All: 677, desktop: 387, mobile: 290 },
  { date: "2024-04-25", All: 465, desktop: 215, mobile: 250 },
  { date: "2024-04-26", All: 205, desktop: 75, mobile: 130 },
  { date: "2024-04-27", All: 803, desktop: 383, mobile: 420 },
  { date: "2024-04-28", All: 302, desktop: 122, mobile: 180 },
  { date: "2024-04-29", All: 555, desktop: 315, mobile: 240 },
  { date: "2024-04-30", All: 834, desktop: 454, mobile: 380 },
  { date: "2024-05-01", All: 385, desktop: 165, mobile: 220 },
  { date: "2024-05-02", All: 503, desktop: 293, mobile: 310 },
  { date: "2024-05-03", All: 437, desktop: 247, mobile: 190 },
  { date: "2024-05-04", All: 805, desktop: 385, mobile: 420 },
  { date: "2024-05-05", All: 871, desktop: 481, mobile: 390 },
  { date: "2024-05-06", All: 1018, desktop: 498, mobile: 520 },
  { date: "2024-05-07", All: 688, desktop: 388, mobile: 300 },
  { date: "2024-05-08", All: 359, desktop: 149, mobile: 210 },
  { date: "2024-05-09", All: 407, desktop: 227, mobile: 180 },
  { date: "2024-05-10", All: 563, desktop: 293, mobile: 330 },
  { date: "2024-05-11", All: 605, desktop: 335, mobile: 270 },
  { date: "2024-05-12", All: 437, desktop: 197, mobile: 240 },
  { date: "2024-05-13", All: 357, desktop: 197, mobile: 160 },
  { date: "2024-05-14", All: 938, desktop: 448, mobile: 490 },
  { date: "2024-05-15", All: 853, desktop: 473, mobile: 380 },
  { date: "2024-05-16", All: 738, desktop: 338, mobile: 400 },
  { date: "2024-05-17", All: 919, desktop: 499, mobile: 420 },
  { date: "2024-05-18", All: 655, desktop: 315, mobile: 350 },
  { date: "2024-05-19", All: 415, desktop: 235, mobile: 180 },
  { date: "2024-05-20", All: 407, desktop: 177, mobile: 230 },
  { date: "2024-05-21", All: 222, desktop: 82, mobile: 140 },
  { date: "2024-05-22", All: 201, desktop: 81, mobile: 120 },
  { date: "2024-05-23", All: 542, desktop: 252, mobile: 290 },
  { date: "2024-05-24", All: 514, desktop: 294, mobile: 220 },
  { date: "2024-05-25", All: 451, desktop: 201, mobile: 250 },
  { date: "2024-05-26", All: 383, desktop: 213, mobile: 170 },
  { date: "2024-05-27", All: 880, desktop: 420, mobile: 460 },
  { date: "2024-05-28", All: 423, desktop: 233, mobile: 190 },
  { date: "2024-05-29", All: 208, desktop: 78, mobile: 130 },
  { date: "2024-05-30", All: 518, desktop: 340, mobile: 280 },
  { date: "2024-05-31", All: 408, desktop: 178, mobile: 230 },
  { date: "2024-06-01", All: 408, desktop: 178, mobile: 200 },
  { date: "2024-06-02", All: 880, desktop: 470, mobile: 410 },
  { date: "2024-06-03", All: 263, desktop: 103, mobile: 160 },
  { date: "2024-06-04", All: 819, desktop: 439, mobile: 380 },
  { date: "2024-06-05", All: 228, desktop: 88, mobile: 140 },
  { date: "2024-06-06", All: 544, desktop: 294, mobile: 250 },
  { date: "2024-06-07", All: 693, desktop: 323, mobile: 370 },
  { date: "2024-06-08", All: 705, desktop: 385, mobile: 320 },
  { date: "2024-06-09", All: 918, desktop: 438, mobile: 480 },
  { date: "2024-06-10", All: 355, desktop: 155, mobile: 200 },
  { date: "2024-06-11", All: 242, desktop: 92, mobile: 150 },
  { date: "2024-06-12", All: 912, desktop: 492, mobile: 420 },
  { date: "2024-06-13", All: 211, desktop: 81, mobile: 130 },
  { date: "2024-06-14", All: 806, desktop: 426, mobile: 380 },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  All: {
    label: "All",
    color: "white",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig
export default function GraphData() {
  const [timeRange, setTimeRange] = React.useState("90d")
  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })
  return (<div className="group relative flex w-full flex-col rounded-xl bg-slate-950 p-2 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20">
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-30" />
    <div className="absolute inset-px rounded-[11px] bg-slate-950" />
    <Card className="relative pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Visitors OverView</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl bg-[#020024] text-white">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
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
            <CartesianGrid vertical={false} stroke="#374151" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />

            <Area
              dataKey="mobile"
              type="natural"
              fill="#13C29660"
              stroke="#13C296"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="#afc10760"
              stroke="#afc107"
              stackId="a"
             
            />
            <Area
              dataKey="All"
              type="natural"
              fill="#0066ff60"
              stroke="#0066ff"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  </div>
  )
}