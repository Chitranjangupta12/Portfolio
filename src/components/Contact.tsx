import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Github, Linkedin, Copy, Check, AlertCircle, MapPin, Clock, FileDown, ArrowDown, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData, profileConfig } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or opportunity summary.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      // Configurable endpoint: Formspree ID or custom endpoint via env, with secure default
      const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;
      const customEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

      let response: Response;

      if (customEndpoint) {
        response = await fetch(customEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            recipient: profileConfig.email,
          }),
        });
      } else if (formspreeId) {
        response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
          }),
        });
      } else {
        // Production-ready submission using FormSubmit.co standard AJAX API directed directly to Chitranjan's email
        response = await fetch(`https://formsubmit.co/ajax/${profileConfig.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            _subject: `New Portfolio Inquiry from ${formData.name.trim()}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });
      }

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === 'true' || result.success === true || result.ok || response.status === 200)) {
        setStatus('success');
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.7 },
            colors: ['#ff6b00', '#ff9248', '#ffffff', '#fb923c'],
          });
        } catch {
          // Safe fallback
        }
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to transmit message. Please try again or email directly.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err?.message || 'Transmission error. Please try again or click the direct email link on the left.'
      );
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form-block');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Ghost Watermark Typography */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[16vw] font-black watermark-text opacity-35">
        CONNECT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dramatic CTA Header Block */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            <span>// 08. COLLABORATION & REACH</span>
          </div>

          <h2 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tighter leading-none select-none mb-6">
            LET'S BUILD<br />
            <span className="text-slate-300">SOMETHING</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#ff7a1a]">
              GREAT.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-xl leading-relaxed mb-8">
            Have an idea, opportunity, collaboration or project in mind? Let's talk.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              onClick={scrollToForm}
              className="px-6 py-3.5 rounded bg-[#ff6b00] hover:bg-[#ff8533] text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(255,107,0,0.35)]"
            >
              <span>START A CONVERSATION</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={profileConfig.resumeUrl}
              download="Chitranjan_Kumar_Gupta_Resume.pdf"
              className="px-6 py-3.5 rounded border border-white/[0.12] hover:border-[#ff6b00]/60 bg-white/[0.04] hover:bg-[#ff6b00]/10 text-white font-mono text-xs tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <FileDown className="w-4 h-4 text-[#ff6b00]" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>

        {/* 2-Column Grid: Contact Info + Form */}
        <div id="contact-form-block" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-xl p-6 sm:p-8 border border-white/[0.08] space-y-6">
              <div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Direct Inquiries & Socials
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  I'm actively seeking software engineering internships, developer roles, and technical collaborations.
                </p>
              </div>

              {/* Email 1-Click Copy Box */}
              <div className="p-4 rounded-lg bg-[#070b13] border border-white/[0.06] space-y-2">
                <span className="font-mono text-[10px] text-slate-400 uppercase block">
                  DIRECT EMAIL //
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${profileConfig.email}`}
                    className="font-mono text-xs sm:text-sm text-white hover:text-[#ff9248] truncate transition-colors"
                  >
                    {profileConfig.email}
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-2 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="font-mono text-[10px] text-emerald-400 block">
                    Email copied to clipboard!
                  </span>
                )}
              </div>

              {/* Phone Box */}
              {profileConfig.phone && (
                <div className="p-4 rounded-lg bg-[#070b13] border border-white/[0.06] space-y-1">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">
                    PHONE //
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={`tel:${profileConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-mono text-xs sm:text-sm text-white hover:text-[#ff9248] transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#ff6b00]" />
                      <span>{profileConfig.phone}</span>
                    </a>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      AVAILABLE
                    </span>
                  </div>
                </div>
              )}

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-[#070b13] border border-white/[0.06] hover:border-[#ff6b00]/40 flex items-center gap-3 transition-all group"
                >
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-white">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-400">PROFILE</span>
                    <span className="font-mono text-xs text-white font-semibold group-hover:text-[#ff8e3c]">
                      GitHub
                    </span>
                  </div>
                </a>

                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-[#070b13] border border-white/[0.06] hover:border-[#ff6b00]/40 flex items-center gap-3 transition-all group"
                >
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-white">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-[10px] text-slate-400">NETWORK</span>
                    <span className="font-mono text-xs text-white font-semibold group-hover:text-[#ff8e3c]">
                      LinkedIn
                    </span>
                  </div>
                </a>
              </div>

              {/* Location and Telemetry */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ff6b00]" />
                  <span>Ghaziabad / Delhi NCR, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Response Time: Typically within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-xl p-6 sm:p-8 lg:p-10 border border-white/[0.08] relative">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    className="text-center py-10 space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                      <Check className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-black text-2xl text-white">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out. Your message has been dispatched to Chitranjan's inbox and he will respond shortly.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 px-6 py-2.5 rounded font-mono text-xs font-bold bg-[#ff6b00] text-black hover:bg-[#ff8533] transition-colors"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {status === 'error' && errorMessage && (
                      <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 flex items-start gap-2.5 text-xs font-mono">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold block">Transmission Failed</span>
                          <span>{errorMessage}</span>
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-xs text-slate-300 block">
                          YOUR NAME <span className="text-[#ff6b00]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: undefined });
                          }}
                          placeholder="e.g. Alex Morgan"
                          className={`w-full px-4 py-3 rounded-lg bg-[#070b13] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                            errors.name
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-white/[0.08] focus:border-[#ff6b00]'
                          }`}
                        />
                        {errors.name && (
                          <span className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email Input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-xs text-slate-300 block">
                          YOUR EMAIL <span className="text-[#ff6b00]">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="e.g. alex@company.com"
                          className={`w-full px-4 py-3 rounded-lg bg-[#070b13] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                            errors.email
                              ? 'border-red-500 focus:border-red-500'
                              : 'border-white/[0.08] focus:border-[#ff6b00]'
                          }`}
                        />
                        {errors.email && (
                          <span className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3 h-3" />
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-xs text-slate-300 block">
                        MESSAGE OR OPPORTUNITY <span className="text-[#ff6b00]">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Tell me about your project, team opportunity, or inquiry..."
                        className={`w-full px-4 py-3 rounded-lg bg-[#070b13] border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                          errors.message
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/[0.08] focus:border-[#ff6b00]'
                        }`}
                      />
                      {errors.message && (
                        <span className="font-mono text-[11px] text-red-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 rounded bg-[#ff6b00] hover:bg-[#ff8533] disabled:opacity-60 text-black font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_rgba(255,107,0,0.35)]"
                    >
                      {status === 'loading' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SEND MESSAGE</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2">
                      <span>• Client-side validated</span>
                      <span>• Fast response guaranteed</span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
