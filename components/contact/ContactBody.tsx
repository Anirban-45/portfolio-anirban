'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Label } from '../ui/label'
import Modal from '@/components/ui/Modal'
import { Check, X, AlertCircle } from 'lucide-react'
import { sendContactMessage } from '@/lib/contact'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

const EMPTY_FORM = { firstName: '', lastName: '', email: '', message: '' }

export default function ContactBody() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  // Held separately so the greeting survives resetting the form on success.
  const [sentName, setSentName] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

    setSentName(form.firstName.trim())
    setStatus('sending')
    setErrorMessage('')

    try {
      const result = await sendContactMessage(form)

      if (result.success) {
        setStatus('success')
        setForm(EMPTY_FORM)
      } else {
        setErrorMessage(result.error)
        setStatus('error')
      }
    } catch {
      setErrorMessage('Could not reach the server. Check your connection.')
      setStatus('error')
    }
  }

  const closeModal = () => {
    if (status === 'sending') return
    setStatus('idle')
  }

  const isSending = status === 'sending'

  return (
    <section className="w-full bg-monochrome00 text-monochrome90">
      <div className="container px-[190px] pt-[48px] pb-[64px] flex items-start justify-between gap-[84px]">
        <Image
          src="/contact.png"
          width={276}
          height={670}
          alt="contact-placeholder"
          className="py-[35px] scroll-in scroll-d1"
        />
        <div className=" flex flex-col items-start justify-center gap-8 scroll-in scroll-d2">
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
            <fieldset
              disabled={isSending}
              className="w-full flex flex-col gap-8 items-start justify-center border-0 p-0 m-0 disabled:opacity-60 transition-opacity"
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
                aria-busy={isSending}
                className="w-fit px-9 py-3 h-11 rounded-none hover:bg-matcha20 self-center bg-[#CEE9BF] text-monochrome110 font-semibold tracking-[5%] text-base font-plusJakartaSans disabled:cursor-not-allowed"
              >
                {isSending ? 'SENDING…' : 'SEND!'}
              </Button>
            </fieldset>
          </form>
        </div>
      </div>

      <Modal
        open={status !== 'idle'}
        onClose={closeModal}
        dismissible={!isSending}
        labelledBy="contact-modal-title"
      >
        <div className="flex flex-col items-center text-center px-10 py-12">
          {!isSending && (
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 p-1 text-monochrome90/50 hover:text-monochrome90 transition-colors"
            >
              <X width={18} height={18} />
            </button>
          )}

          {status === 'sending' && (
            <>
              <div className="h-px w-[120px] overflow-hidden bg-monochrome110/15 mb-8">
                <div className="h-full w-1/3 bg-matcha60 animate-indeterminate motion-reduce:animate-none" />
              </div>
              <h3
                id="contact-modal-title"
                className="font-medium text-[20px] leading-[28px]"
              >
                Sending your letter…
              </h3>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-matcha20">
                <Check width={26} height={26} className="text-monochrome110" />
              </div>
              <h3
                id="contact-modal-title"
                className="font-medium text-[28px] leading-[36px] mb-3"
              >
                Message sent!
              </h3>
              <p className="text-[16px] leading-[24px] text-gray-600 max-w-[320px] mb-3">
                {sentName ? `Thanks, ${sentName}. ` : 'Thank you. '}
                Your letter is on its way, I’ll get back to you shortly.
              </p>
              <Button
                type="button"
                onClick={closeModal}
                className="mt-8 w-fit px-9 py-3 h-11 rounded-none hover:bg-monochrome90 bg-monochrome110 text-monochrome00 font-semibold tracking-[5%] text-base font-plusJakartaSans"
              >
                LOVELY!
              </Button>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#F3D9D4]">
                <AlertCircle
                  width={26}
                  height={26}
                  className="text-[#9A7E6F]"
                />
              </div>
              <h3
                id="contact-modal-title"
                className="font-medium text-[28px] leading-[36px] mb-3"
              >
                That didn’t send
              </h3>
              <p className="text-[16px] leading-[24px] text-monochrome90/75 max-w-[340px]">
                {errorMessage || 'Something went wrong along the way.'} Your
                message is still in the form, so nothing is lost. You can also
                email me directly.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Button
                  type="button"
                  onClick={closeModal}
                  className="w-fit px-9 py-3 h-11 rounded-none hover:bg-matcha20 bg-[#CEE9BF] text-monochrome110 font-semibold tracking-[5%] text-base font-plusJakartaSans"
                >
                  TRY AGAIN
                </Button>
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  )
}
