'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Label } from '../ui/label'

export default function ContactBody() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('Message sent successfully!')
        setForm({ firstName: '', lastName: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('Error sending message.')
    }
  }

  return (
    <section className="w-full bg-monochrome00 text-monochrome90">
      <div className="container px-[190px] pt-[48px] pb-[64px] flex items-start justify-between gap-[84px] ">
        <Image
          src="/contact.png"
          width={276}
          height={670}
          alt="contact-placeholder"
          className="py-[35px]"
        />
        <div className=" flex flex-col items-start justify-center gap-8 ">
          <h2 className=" font-medium text-[60px] leading-[75.6px]">
            Say <span className=" text-matcha60">Hello</span>!
          </h2>
          <p className=" text-[20px] leading-[27px] tracking-[1.5%]">
            Want to get in touch? Drop me a letter and I’ll get in touch with
            you shortly!
          </p>
          <form
            onSubmit={handleSubmit}
            className=" w-full flex flex-col gap-8 items-start justify-center"
          >
            <div className="w-full flex flex-col justify-center gap-2">
              <Label
                htmlFor={`${'firstName' + 'lastName'}`}
                className="font-medium text-[20px] leading-[27px] tracking-[1.5%]"
              >
                Name *
              </Label>
              <div className=" flex items-start gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First"
                  value={form.firstName}
									onChange={handleChange}
                  helperText="Looks good."
                  className="rounded-none px-4 py-3 h-[46px] focus:border-matcha60"
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  value={form.lastName}
									onChange={handleChange}
                  helperText="Perfect, Thank you!"
                  className="rounded-none px-4 py-3 h-[46px] focus:border-matcha60"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-2">
              <Label
                htmlFor="email"
                className="font-medium text-[20px] leading-[27px] tracking-[1.5%]"
              >
                Email *
              </Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
								onChange={handleChange}
                helperText="I'll reach out to you soon!"
                required
                className=" rounded-none px-4 py-3 h-[46px] focus:border-matcha60"
              />
            </div>

            <div className="w-full flex flex-col justify-center gap-2">
              <Label
                htmlFor="message"
                className="font-medium text-[20px] leading-[27px] tracking-[1.5%]"
              >
                Message *
              </Label>
              <Textarea
                name="message"
                placeholder="Enter your message"
                value={form.message}
								onChange={handleChange}
								helperText="Thank you for sharing."
                required
                className=" rounded-none px-4 py-3 h-[234px] focus:border-matcha60"
              />
            </div>

            <Button
              type="submit"
              className="w-fit px-9 py-3 h-11 rounded-none hover:bg-matcha20 self-center bg-[#CEE9BF] text-monochrome110 font-semibold tracking-[5%] text-base font-plusJakartaSans"
            >
              SEND!
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
