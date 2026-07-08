"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, XCircle, Send } from "lucide-react";
import Button from "@/components/ui/Button";
import FormField from "@/components/forms/FormField";
import SelectField from "@/components/forms/SelectField";
import { contactFormSchema } from "@/lib/schemas/contactFormSchema";
import { SERVICES } from "@/constants/services";

const inputClasses =
  "h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-secondary-900 outline-none transition-colors duration-200 placeholder:text-text-light/70 focus:border-primary-400 focus:ring-2 focus:ring-primary-100";

const SERVICE_OPTIONS = SERVICES.map((service) => ({ value: service.id, label: service.title }));

const FALLBACK_ERROR_MESSAGE = "Something went wrong. Please try again or call us directly.";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | success | error
  const [errorMessage, setErrorMessage] = useState(FALLBACK_ERROR_MESSAGE);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        if (response.status === 400 && result?.errors) {
          Object.entries(result.errors).forEach(([field, messages]) => {
            if (messages?.[0]) {
              setError(field, { type: "server", message: messages[0] });
            }
          });
        }
        setErrorMessage(result?.message || FALLBACK_ERROR_MESSAGE);
        setStatus("error");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setErrorMessage(FALLBACK_ERROR_MESSAGE);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={inputClasses}
            placeholder="John Smith"
            {...register("name")}
          />
        </FormField>

        <FormField label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClasses}
            placeholder="(555) 123-4567"
            {...register("phone")}
          />
        </FormField>
      </div>

      <FormField label="Email Address" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={inputClasses}
          placeholder="john@example.com"
          {...register("email")}
        />
      </FormField>

      <FormField label="Project Address" htmlFor="address" error={errors.address?.message}>
        <input
          id="address"
          type="text"
          autoComplete="street-address"
          className={inputClasses}
          placeholder="123 Main St, Austin, TX"
          {...register("address")}
        />
      </FormField>

      <FormField label="Service Needed" htmlFor="service" error={errors.service?.message}>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <SelectField
              name="service"
              options={SERVICE_OPTIONS}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder="Select a service"
            />
          )}
        />
      </FormField>

      <FormField label="Project Details" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          className={`${inputClasses} h-auto resize-none py-3`}
          placeholder="Tell us about your space, timeline, and goals..."
          {...register("message")}
        />
      </FormField>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        icon={isSubmitting ? undefined : Send}
        className="w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>

      {status === "success" && (
        <p
          role="status"
          className="flex items-center gap-2 rounded-lg bg-success/10 px-4 py-3 text-sm font-medium text-success"
        >
          <CheckCircle2 className="size-5 shrink-0" aria-hidden="true" />
          Thanks! Your request has been sent. We&apos;ll be in touch shortly.
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="flex items-center gap-2 rounded-lg bg-danger/10 px-4 py-3 text-sm font-medium text-danger"
        >
          <XCircle className="size-5 shrink-0" aria-hidden="true" />
          {errorMessage}
        </p>
      )}
    </form>
  );
}
