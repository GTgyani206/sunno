"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">Suno</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              Your <span className="text-primary">Emotional</span> Support Diary
            </motion.h1>
            <motion.p
              className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
            >
              Record your daily activities and emotions through text or voice input. Suno provides a safe space for your
              thoughts and feelings.
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            >
              <Link href="/signup">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
        <section className="container py-12 md:py-24 lg:py-32 bg-accent/50">
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Why Choose Suno?</h2>
              <p className="text-muted-foreground sm:text-lg">
                Suno provides a calm, private space for your thoughts and emotions. With a focus on user privacy and a
                soothing design, Suno helps you track your emotional journey.
              </p>
            </motion.div>
            <motion.div
              className="grid gap-6 sm:grid-cols-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Privacy First</h3>
                <p className="text-sm text-muted-foreground">
                  Your entries are private and secure. We prioritize your data privacy.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Voice Input</h3>
                <p className="text-sm text-muted-foreground">
                  Record your thoughts with voice input when typing feels too much.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Emotional Insights</h3>
                <p className="text-sm text-muted-foreground">Future updates will include emotional pattern analysis.</p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Calming Design</h3>
                <p className="text-sm text-muted-foreground">
                  A soothing interface designed to reduce anxiety and stress.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Suno. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline underline-offset-4">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline underline-offset-4">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
