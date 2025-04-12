"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PenSquare, Sparkles, TrendingUp } from "lucide-react"

// Mock data for recent entries
const mockEntries = [
  {
    id: 1,
    title: "Had a productive day",
    excerpt: "Today was really productive. I managed to complete all my tasks and even had time for a walk.",
    date: "2023-04-10",
    mood: "Happy",
  },
  {
    id: 2,
    title: "Feeling a bit stressed",
    excerpt: "Work has been piling up and I'm feeling the pressure. Need to take some time for self-care.",
    date: "2023-04-08",
    mood: "Stressed",
  },
  {
    id: 3,
    title: "Weekend plans",
    excerpt: "Looking forward to the weekend. Planning to catch up with friends and maybe see a movie.",
    date: "2023-04-05",
    mood: "Excited",
  },
]

export default function DashboardPage() {
  const [greeting, setGreeting] = useState("Good day")
  const [userName, setUserName] = useState("John")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good morning")
    else if (hour < 18) setGreeting("Good afternoon")
    else setGreeting("Good evening")
  }, [])

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            {greeting}, {userName}
          </h1>
          <p className="text-muted-foreground">Welcome to your emotional support diary. How are you feeling today?</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quick Add</CardTitle>
                <CardDescription>Create a new journal entry</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">
                  Record your thoughts, feelings, and experiences for today.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/dashboard/new-entry">
                    <PenSquare className="mr-2 h-4 w-4" />
                    New Entry
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mood Insights</CardTitle>
                <CardDescription>Your emotional patterns</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">
                  Track your emotional patterns and gain insights into your well-being.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/dashboard/analysis">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    View Analysis
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">AI Suggestions</CardTitle>
                <CardDescription>Personalized recommendations</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-muted-foreground">
                  Get personalized suggestions based on your journal entries.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Recent Entries</h2>
            <Button variant="outline" asChild>
              <Link href="/dashboard/journal">View All</Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeInOut" }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-500">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{entry.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">{entry.mood}</span>
                    </div>
                    <CardDescription>{new Date(entry.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-sm text-muted-foreground line-clamp-3">{entry.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" asChild className="w-full btn-hover">
                      <Link href={`/dashboard/journal/${entry.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
