"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, BarChart, PieChart } from "@/components/ui/chart"
import { Info } from "lucide-react"

export default function AnalysisPage() {
  // Mock data for charts
  const moodData = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 59 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 81 },
    { name: "May", value: 56 },
    { name: "Jun", value: 55 },
    { name: "Jul", value: 40 },
  ]

  const emotionDistribution = [
    { name: "Happy", value: 35 },
    { name: "Calm", value: 20 },
    { name: "Anxious", value: 15 },
    { name: "Stressed", value: 10 },
    { name: "Excited", value: 10 },
    { name: "Sad", value: 5 },
    { name: "Tired", value: 5 },
  ]

  const weeklyMoodData = [
    { name: "Mon", happy: 4, sad: 1, neutral: 2 },
    { name: "Tue", happy: 3, sad: 2, neutral: 1 },
    { name: "Wed", happy: 2, sad: 1, neutral: 3 },
    { name: "Thu", happy: 5, sad: 0, neutral: 1 },
    { name: "Fri", happy: 4, sad: 1, neutral: 1 },
    { name: "Sat", happy: 5, sad: 0, neutral: 0 },
    { name: "Sun", happy: 3, sad: 1, neutral: 2 },
  ]

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Mood Analysis</h1>
          <p className="text-muted-foreground">
            Visualize your emotional patterns and gain insights into your well-being.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-full lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Mood Trends</CardTitle>
                <CardDescription>Your emotional well-being over time</CardDescription>
              </CardHeader>
              <CardContent>
                <LineChart
                  data={moodData}
                  categories={["value"]}
                  index="name"
                  colors={["#a78bfa"]}
                  valueFormatter={(value) => `${value}%`}
                  showLegend={false}
                  showXAxis={true}
                  showYAxis={true}
                  showGridLines={true}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Emotion Distribution</CardTitle>
                <CardDescription>Breakdown of your recorded emotions</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={emotionDistribution}
                  index="name"
                  categories={["value"]}
                  valueFormatter={(value) => `${value}%`}
                  colors={["#a78bfa", "#c4b5fd", "#ddd6fe", "#ede9fe", "#f5f3ff", "#8b5cf6", "#7c3aed"]}
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Tabs defaultValue="weekly">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              <div className="flex items-center text-sm text-muted-foreground">
                <Info className="mr-1 h-4 w-4" />
                This is a placeholder for future emotional analysis
              </div>
            </div>
            <TabsContent value="weekly" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Mood Patterns</CardTitle>
                  <CardDescription>Your emotional patterns throughout the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart
                    data={weeklyMoodData}
                    index="name"
                    categories={["happy", "neutral", "sad"]}
                    colors={["#a78bfa", "#94a3b8", "#f87171"]}
                    valueFormatter={(value) => `${value} entries`}
                    showLegend={true}
                    showXAxis={true}
                    showYAxis={true}
                    showGridLines={true}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="monthly" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Mood Patterns</CardTitle>
                  <CardDescription>Your emotional patterns throughout the month</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Monthly analysis will be available soon.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="yearly" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Yearly Mood Patterns</CardTitle>
                  <CardDescription>Your emotional patterns throughout the year</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Yearly analysis will be available soon.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Insights & Recommendations</CardTitle>
              <CardDescription>Personalized suggestions based on your emotional patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg bg-accent/50 p-4">
                  <h3 className="text-lg font-medium">Mood Improvement</h3>
                  <p className="text-sm text-muted-foreground">
                    Your mood tends to be higher on weekends. Consider incorporating more weekend-like activities into
                    your weekdays.
                  </p>
                </div>
                <div className="rounded-lg bg-accent/50 p-4">
                  <h3 className="text-lg font-medium">Stress Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Your entries indicate higher stress levels mid-week. Try scheduling relaxation activities on
                    Wednesdays.
                  </p>
                </div>
                <div className="rounded-lg bg-accent/50 p-4">
                  <h3 className="text-lg font-medium">Sleep Quality</h3>
                  <p className="text-sm text-muted-foreground">
                    Entries mentioning good sleep correlate with more positive moods the following day. Focus on
                    improving sleep hygiene.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
