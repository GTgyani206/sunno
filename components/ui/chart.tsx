"use client"
import {
  Line,
  Bar,
  Pie,
  LineChart as RechartsLineChart,
  BarChart as RechartsBarChart,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  type TooltipProps,
  Cell,
} from "recharts"
import { cn } from "@/lib/utils"

interface ChartProps {
  data: any[]
  index: string
  categories: string[]
  colors?: string[]
  valueFormatter?: (value: number) => string
  showLegend?: boolean
  showXAxis?: boolean
  showYAxis?: boolean
  showGridLines?: boolean
  className?: string
}

const ChartTooltip = ({
  active,
  payload,
  label,
  valueFormatter,
}: TooltipProps & { valueFormatter?: (value: number) => string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="font-medium">{label}</div>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
              <span className="text-sm text-muted-foreground">{entry.name}:</span>
            </div>
            <span className="text-sm font-medium">
              {valueFormatter ? valueFormatter(entry.value as number) : entry.value}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export function LineChart({
  data,
  index,
  categories,
  colors = ["#a78bfa", "#c4b5fd", "#ddd6fe"],
  valueFormatter = (value: number) => value.toString(),
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
  className,
}: ChartProps) {
  return (
    <div className={cn("w-full h-[300px]", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
          {showXAxis && <XAxis dataKey={index} />}
          {showYAxis && <YAxis />}
          <Tooltip content={(props) => <ChartTooltip {...props} valueFormatter={valueFormatter} />} />
          {showLegend && <Legend />}
          {categories.map((category, i) => (
            <Line
              key={category}
              type="monotone"
              dataKey={category}
              stroke={colors[i % colors.length]}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function BarChart({
  data,
  index,
  categories,
  colors = ["#a78bfa", "#c4b5fd", "#ddd6fe"],
  valueFormatter = (value: number) => value.toString(),
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
  className,
}: ChartProps) {
  return (
    <div className={cn("w-full h-[300px]", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
          {showXAxis && <XAxis dataKey={index} />}
          {showYAxis && <YAxis />}
          <Tooltip content={(props) => <ChartTooltip {...props} valueFormatter={valueFormatter} />} />
          {showLegend && <Legend />}
          {categories.map((category, i) => (
            <Bar key={category} dataKey={category} fill={colors[i % colors.length]} radius={[4, 4, 0, 0]} />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PieChart({
  data,
  index,
  categories,
  colors = ["#a78bfa", "#c4b5fd", "#ddd6fe", "#ede9fe", "#f5f3ff"],
  valueFormatter = (value: number) => value.toString(),
  className,
}: ChartProps) {
  return (
    <div className={cn("w-full h-[300px]", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <Tooltip content={(props) => <ChartTooltip {...props} valueFormatter={valueFormatter} />} />
          <Pie
            data={data}
            dataKey={categories[0]}
            nameKey={index}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Legend />
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}
