"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Edit, Trash2 } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

// Mock data for journal entries
const mockEntries = [
  {
    id: 1,
    title: "Had a productive day",
    content:
      "Today was really productive. I managed to complete all my tasks and even had time for a walk. I felt energized and focused throughout the day. I think the new morning routine is really helping me stay on track. I should continue with it and see how it affects my productivity in the long run.\n\nI also had a good meeting with my team. We discussed the upcoming project and everyone seemed excited about it. I think we have a solid plan in place and I'm looking forward to getting started.\n\nIn the evening, I took some time to relax and read a book. It was nice to unwind and clear my mind before bed. I should make this a regular part of my evening routine.",
    date: "2023-04-10",
    mood: "Happy",
  },
  {
    id: 2,
    title: "Feeling a bit stressed",
    content:
      "Work has been piling up and I'm feeling the pressure. Need to take some time for self-care. Maybe I should schedule a day off next week to recharge. I've been pushing myself too hard lately and it's starting to take a toll on my mental health. I should remember that it's okay to take breaks.\n\nI've been having trouble sleeping as well, which isn't helping. I think I need to establish a better bedtime routine and maybe cut back on caffeine in the afternoon.\n\nTomorrow, I'll try to prioritize my tasks better and focus on the most important ones first. I think that will help me feel more in control and less overwhelmed.",
    date: "2023-04-08",
    mood: "Stressed",
  },
  {
    id: 3,
    title: "Weekend plans",
    content:
      "Looking forward to the weekend. Planning to catch up with friends and maybe see a movie. It's been a while since I've had some proper downtime. I'm excited to relax and enjoy some social time. I think this will really help me recharge for the coming week.\n\nI'm thinking of trying that new restaurant downtown that everyone's been talking about. It's supposed to have amazing food and a great atmosphere.\n\nI also want to spend some time outdoors if the weather is nice. Maybe a hike or just a walk in the park. Being in nature always helps me clear my mind and gain perspective.",
    date: "2023-04-05",
    mood: "Excited",
  },
]

export default function JournalEntryPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [entry, setEntry] = useState<(typeof mockEntries)[0] | null>(null)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  useEffect(() => {
    // Find the entry with the matching ID
    const foundEntry = mockEntries.find((e) => e.id === Number.parseInt(params.id))
    if (foundEntry) {
      setEntry(foundEntry)
    } else {
      // If no entry is found, redirect to the journal page
      router.push("/dashboard/journal")
    }
  }, [params.id, router])

  const handleDelete = () => {
    // Simulate deletion
    setTimeout(() => {
      router.push("/dashboard/journal")
    }, 500)
  }

  if (!entry) {
    return (
      <div className="container py-8">
        <div className="flex justify-center items-center h-64">
          <p>Loading entry...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl space-y-8"
      >
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Journal Entry</h1>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{entry.title}</CardTitle>
                <CardDescription>
                  {new Date(entry.date).toLocaleDateString()} • {entry.mood}
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" asChild>
                  <a href={`/dashboard/journal/edit/${entry.id}`}>
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </a>
                </Button>
                <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your journal entry.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm max-w-none dark:prose-invert">
              {entry.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" onClick={() => router.back()}>
              Back to Journal
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
