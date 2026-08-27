"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "Not provided");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Virtual Assistant opportunity from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nProject details:\n${message}`,
    );
    window.location.href = `mailto:lexarmatt@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Your name
          <Input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          Email address
          <Input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </label>
      </div>
      <label>
        Company <span>(optional)</span>
        <Input name="company" autoComplete="organization" placeholder="Company or business" />
      </label>
      <label>
        How can I help?
        <Textarea name="message" required rows={5} placeholder="Tell me about the tasks, schedule, and support you need." />
      </label>
      <Button type="submit" size="lg">
        Prepare email <Send aria-hidden="true" />
      </Button>
      <p className="form-note">This securely opens your email app with the message prepared for you.</p>
    </form>
  );
}
