"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full bg-transparent border-b border-offwhite/25 focus:border-gold outline-none py-3 text-offwhite placeholder:text-offwhite-dim/50 transition-colors duration-300";

const labelClasses =
  "block text-xs tracking-widest uppercase text-offwhite-dim mb-2";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/30 bg-charcoal-2 p-10 md:p-14 text-center">
        <CheckCircle2 size={40} className="text-gold mx-auto mb-6" strokeWidth={1.5} />
        <h3 className="font-display uppercase text-2xl mb-3">
          Quote Request Received
        </h3>
        <p className="text-offwhite-dim font-light max-w-md mx-auto">
          Thank you. A member of our logistics team will be in touch shortly
          to confirm the details of your transport request.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex items-center gap-2 border border-gold px-6 py-3 text-sm tracking-widest uppercase text-gold hover:bg-gold hover:text-ink transition-all duration-300"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gold/25 bg-charcoal-2 p-8 md:p-14"
    >
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <label className={labelClasses} htmlFor="pickupLocation">
            Pickup Location
          </label>
          <input
            required
            id="pickupLocation"
            name="pickupLocation"
            type="text"
            placeholder="e.g. Johannesburg, GP"
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="deliveryDestination">
            Delivery Destination
          </label>
          <input
            required
            id="deliveryDestination"
            name="deliveryDestination"
            type="text"
            placeholder="e.g. Durban, KZN"
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="cargoType">
            Cargo Type
          </label>
          <input
            required
            id="cargoType"
            name="cargoType"
            type="text"
            placeholder="e.g. Palletized FMCG goods"
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="estimatedWeight">
            Estimated Weight
          </label>
          <input
            required
            id="estimatedWeight"
            name="estimatedWeight"
            type="text"
            placeholder="e.g. 4.5 tonnes"
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="collectionDate">
            Preferred Collection Date
          </label>
          <input
            required
            id="collectionDate"
            name="collectionDate"
            type="date"
            className={`${inputClasses} [color-scheme:dark]`}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="fullName">
            Full Name
          </label>
          <input
            required
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your full name"
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="companyName">
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Your company (optional)"
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="phone">
            Phone Number
          </label>
          <input
            required
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +27 82 000 0000"
            className={inputClasses}
          />
        </div>

        <div>
          <label className={labelClasses} htmlFor="email">
            Email Address
          </label>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            className={inputClasses}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClasses} htmlFor="notes">
            Additional Information
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={4}
            placeholder="Anything else we should know about this shipment?"
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-6 text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-12 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-ink px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold-light transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Submitting
          </>
        ) : (
          <>
            Request a Transport Quote
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
