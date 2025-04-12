"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mic, Save, Wand2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export default function NewEntryPage() {
  const router = useRouter()
  const [isRecording, setIsRecording] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [mood, setMood] = useState("")

  const handleVoiceInput = () => {
    setIsRecording(!isRecording)

    if (!isRecording) {
      toast({
        title: "Voice recording started",
        description: "Speak clearly into your microphone.",
      })

      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false)
        setContent(
          (prev) =>
            prev +
            " This text was added via voice input. It's a beautiful day today and I'm feeling quite optimistic about the future.",
        )
        toast({
          title: "Voice recording completed",
          description: "Your speech has been transcribed.",
        })
      }, 3000)
    } else {
      toast({
        title: "Voice recording stopped",
        description: "Processing your speech...",
      })
    }
  }

  const handleSave = () => {
    if (!title) {
      toast({
        title: "Title required",
        description: "Please add a title for your entry.",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)

    // Simulate saving
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Entry saved",
        description: "Your journal entry has been saved successfully.",
      })
      router.push("/dashboard/journal")
    }, 1500)
  }

  const handleAIAssist = () => {
    toast({
      title: "AI Assistance",
      description: "Analyzing your entry for emotional patterns...",
    })

    // Simulate AI processing
    setTimeout(() => {
      setMood("Hopeful")
      toast({
        title: "Analysis complete",
        description: "Your entry suggests a hopeful mood.",
      })
    }, 1500)
  }

  return (
    <div className="container py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl space-y-8"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">New Journal Entry</h1>
          <p className="text-muted-foreground">Record your thoughts, feelings, and experiences.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Entry</CardTitle>
            <CardDescription>Express yourself freely. Your entries are private and secure.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Give your entry a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="content">Your thoughts</Label>
                <Button
                  type="button"
                  variant={isRecording ? "destructive" : "outline"}
                  size="sm"
                  onClick={handleVoiceInput}
                >
                  <Mic className={`mr-2 h-4 w-4 ${isRecording ? "pulse" : ""}`} />
                  {isRecording ? "Recording..." : "Voice Input"}
                </Button>
              </div>
              <Textarea
                id="content"
                placeholder="What's on your mind today?"
                className="min-h-[200px] resize-y"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="flex items-end gap-4">
              <div className="space-y-2 flex-1">
                <Label htmlFor="mood">Mood</Label>
                <Select value={mood} onValueChange={setMood}>
                  <SelectTrigger id="mood">
                    <SelectValue placeholder="How are you feeling?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Happy">Happy</SelectItem>
                    <SelectItem value="Sad">Sad</SelectItem>
                    <SelectItem value="Anxious">Anxious</SelectItem>
                    <SelectItem value="Calm">Calm</SelectItem>
                    <SelectItem value="Excited">Excited</SelectItem>
                    <SelectItem value="Tired">Tired</SelectItem>
                    <SelectItem value="Hopeful">Hopeful</SelectItem>
                    <SelectItem value="Stressed">Stressed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="button" variant="secondary" onClick={handleAIAssist} className="mb-0.5">
                <Wand2 className="mr-2 h-4 w-4" />
                AI Detect Mood
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="button" onClick={handleSave} disabled={isSaving} className={isSaving ? "gentle-glow" : ""}>
              <Save className="mr-2 h-4 w-4" />
              {isSaving ? "Saving..." : "Save Entry"}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
      <Toaster />
    </div>
  )
}
