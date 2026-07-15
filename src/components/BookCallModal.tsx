import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiBriefcase, FiCheck, FiMail, FiMessageSquare, FiUser, FiX } from "react-icons/fi";

export function BookCallModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const show = () => { setSubmitted(false); setOpen(true); };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("predictbyte:book-call", show);
    window.addEventListener("keydown", onKeyDown);
    return () => { window.removeEventListener("predictbyte:book-call", show); window.removeEventListener("keydown", onKeyDown); };
  }, []);

  return <AnimatePresence>{open && (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]/70 p-4 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
      <motion.form className="book-call-form relative" initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }} onSubmit={(event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); }}>
        <button type="button" onClick={() => setOpen(false)} className="book-call-close" aria-label="Close booking form"><FiX size={20} /></button>
        {submitted ? <div className="flex min-h-[310px] flex-col items-center justify-center text-center"><span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#151717] text-white"><FiCheck size={26} /></span><h2 className="text-3xl font-semibold text-[#151717]">Thanks for reaching out.</h2><p className="mt-3 max-w-sm text-sm leading-relaxed text-[#59616a]">We received your details and will contact you within one business day.</p></div> : <>
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2d79f3]">Start a project</p><h2 className="mt-2 text-3xl font-semibold text-[#151717]">Book a call</h2><p className="mt-2 text-sm text-[#59616a]">Tell us a little about what you need.</p></div>
          <label className="book-call-label">Full name</label><div className="book-call-input"><FiUser /><input required name="name" placeholder="Enter your name" /></div>
          <label className="book-call-label">Email</label><div className="book-call-input"><FiMail /><input required type="email" name="email" placeholder="Enter your email" /></div>
          <label className="book-call-label">Company</label><div className="book-call-input"><FiBriefcase /><input name="company" placeholder="Company name (optional)" /></div>
          <label className="book-call-label">Project details</label><div className="book-call-input book-call-textarea"><FiMessageSquare /><textarea required name="details" placeholder="What would you like to build?" /></div>
          <button className="book-call-submit" type="submit">Send enquiry</button>
        </>}
      </motion.form>
    </motion.div>
  )}</AnimatePresence>;
}
