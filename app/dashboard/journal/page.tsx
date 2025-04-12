"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PenSquare, Search } from "lucide-react"

// Mock data for journal entries
const mockEntries = [
  {
    id: 1,
    title: "Had a productive day",
    excerpt: "Today was really productive. I managed to complete all my tasks and even had time for a walk.",
    content:
      "Today was really productive. I managed to complete all my tasks and even had time for a walk. I felt energized and focused throughout the day. I think the new morning routine is really helping me stay on track. I should continue with it and see how it affects my productivity in the long run.",
    date: "2023-04-10",
    mood: "Happy",
  },
  {
    id: 2,
    title: "Feeling a bit stressed",
    excerpt: "Work has been piling up and I'm feeling the pressure. Need to take some time for self-care.",
    content:
      "Work has been piling up and I'm feeling the pressure. Need to take some time for self-care. Maybe I should schedule a day off next week to recharge. I've been pushing myself too hard lately and it's starting to take a toll on my mental health. I should remember that it's okay to take breaks.",
    date: "2023-04-08",
    mood: "Stressed",
  },
  {
    id: 3,
    title: "Weekend plans",
    excerpt: "Looking forward to the weekend. Planning to catch up with friends and maybe see a movie.",
    content:
      "Looking forward to the weekend. Planning to catch up with friends and maybe see a movie. It's been a while since I've had some proper downtime. I'm excited to relax and enjoy some social time. I think this will really help me recharge for the coming week.",
    date: "2023-04-05",
    mood: "Excited",
  },
  {
    id: 4,
    title: "Reflecting on goals",
    excerpt:
      "Took some time today to reflect on my yearly goals. I'm making progress but need to focus more on certain areas.",
    content:
      "Took some time today to reflect on my yearly goals. I'm making progress but need to focus more on certain areas. I'm doing well with my fitness goals, but I need to put more effort into my learning goals. I should set aside specific time each week for learning new skills.",
    date: "2023-04-03",
    mood: "Thoughtful",
  },
  {
    id: 5,
    title: "Family dinner",
    excerpt: "Had dinner with family tonight. It was nice to catch up and spend quality time together.",
    content:
      "Had dinner with family tonight. It was nice to catch up and spend quality time together. We talked about upcoming plans and shared stories. These moments are precious and I should make more effort to have regular family gatherings.",
    date: "2023-04-01",
    mood: "Content",
  },
  {
    id: 6,
    title: "New book",
    excerpt: "Started reading a new book today. It's been engaging so far and I'm looking forward to continuing it.",
    content:
      "Started reading a new book today. It's been engaging so far and I'm looking forward to continuing it. Reading has always been a good way for me to relax and learn new things. I should make it a habit to read a little bit every day.",
    date: "2023-03-28",
    mood: "Calm",
  },
]

export default function JournalPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [moodFilter, setMoodFilter] = useState("")

  const filteredEntries = mockEntries.filter((entry) => {
    const matchesSearch =
      entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMood = moodFilter ? entry.mood === moodFilter : true
    return matchesSearch && matchesMood
  })

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Your Journal</h1>
            <p className="text-muted-foreground">Browse and search through your past entries.</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/new-entry">
              <PenSquare className="mr-2 h-4 w-4" />
              New Entry
            </Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search entries..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={moodFilter} onValueChange={setMoodFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by mood" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Moods</SelectItem>
              <SelectItem value="Happy">Happy</SelectItem>
              <SelectItem value="Sad">Sad</SelectItem>
              <SelectItem value="Anxious">Anxious</SelectItem>
              <SelectItem value="Calm">Calm</SelectItem>
              <SelectItem value="Excited">Excited</SelectItem>
              <SelectItem value="Tired">Tired</SelectItem>
              <SelectItem value="Stressed">Stressed</SelectItem>
              <SelectItem value="Content">Content</SelectItem>
              <SelectItem value="Thoughtful">Thoughtful</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index, ease: "easeInOut" }}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow duration-500">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{entry.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">{entry.mood}</span>
                    </div>
                    <CardDescription>{new Date(entry.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2 flex-1">
                    <p className="text-sm text-muted-foreground line-clamp-4">{entry.content}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" asChild className="w-full btn-hover">
                      <Link href={`/dashboard/journal/${entry.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No entries found matching your search criteria.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
