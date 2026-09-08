import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ArrowUpRight, X, FileText, ShieldCheck, Download, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { CertificationItem } from '../types';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const currentIndex = selectedCert ? certifications.findIndex((c) => c.id === selectedCert.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedCert(certifications[currentIndex - 1]);
    } else {
      setSelectedCert(certifications[certifications.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < certifications.length - 1) {
      setSelectedCert(certifications[currentIndex + 1]);
    } else {
      setSelectedCert(certifications[0]);
    }
  };

  // Keyboard navigation: ESC to close, Arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedCert, currentIndex]);

  return (
    <section id="certifications" className="relative py-28 md:py-36 overflow-hidden">
      {/* Giant Ghost Watermark Typography */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[18vw] sm:text-[16vw] font-black watermark-text opacity-35">
        ACCREDITATIONS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b00] tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
            <span>// 06. VERIFIED ACCREDITATIONS</span>
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tighter">
            CERTIFICATIONS<span className="text-[#ff6b00]">.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-slate-400 mt-2 max-w-xl">
            Verified credentials from Stanford University, DeepLearning.AI, IBM, and competitive programming organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-xl p-6 sm:p-7 border border-white/[0.08] hover:border-[#ff6b00]/40 transition-all flex flex-col justify-between group relative overflow-hidden shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ff6b00]/15 transition-colors" />

              <div>
                {/* Header: Issuer badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-[10px] text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#ff6b00]" />
                    {cert.badge || "VERIFIED"}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    {cert.date}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-orange-200 transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>
                
                <p className="font-mono text-xs text-[#ff8e3c] font-semibold mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                {cert.description && (
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {cert.description}
                  </p>
                )}

                {/* Skills Chips */}
                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                {cert.pdfUrl ? (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#ff6b00]/15 hover:bg-[#ff6b00]/25 text-[#ff9248] hover:text-[#ffaa6b] border border-[#ff6b00]/30 font-mono text-xs font-semibold transition-all group/btn"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                ) : (
                  <span className="font-mono text-xs text-slate-500">ID: {cert.credentialId}</span>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white font-mono text-xs transition-colors ml-auto group/link"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#070b13] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0a0f1c]">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#ff6b00]/20 flex items-center justify-center text-[#ff6b00] shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-white text-base sm:text-lg leading-tight truncate">
                      {selectedCert.title}
                    </h3>
                    <p className="font-mono text-xs text-[#ff8e3c] truncate">
                      {selectedCert.issuer} • {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-3">
                  {/* Next / Previous Controls */}
                  <div className="hidden sm:flex items-center gap-1 mr-2 border-r border-white/10 pr-2">
                    <button
                      onClick={handlePrev}
                      className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title="Previous Certificate (Left Arrow)"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-xs text-slate-500">
                      {currentIndex + 1}/{certifications.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="p-1.5 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title="Next Certificate (Right Arrow)"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title="Open in new tab / Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </a>
                  )}
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      download
                      className="p-2 rounded hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                    title="Close (ESC)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body: PDF Preview / Document Viewer */}
              <div className="flex-1 bg-[#05070a] p-2 sm:p-4 overflow-hidden flex flex-col items-center justify-center min-h-[380px] max-h-[68vh] relative">
                {selectedCert.pdfUrl ? (
                  <>
                    <iframe
                      src={`${selectedCert.pdfUrl}#toolbar=0&navpanes=0`}
                      title={selectedCert.title}
                      className="w-full h-full min-h-[440px] rounded-lg border border-white/10 bg-white hidden sm:block"
                    />
                    {/* Mobile optimized view fallback */}
                    <div className="sm:hidden text-center p-6 space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-[#ff6b00]/20 border border-[#ff6b00]/40 flex items-center justify-center text-[#ff6b00] mx-auto">
                        <FileText className="w-7 h-7" />
                      </div>
                      <h4 className="font-heading font-bold text-white text-base">
                        {selectedCert.title}
                      </h4>
                      <p className="font-mono text-xs text-slate-400">
                        {selectedCert.issuer}
                      </p>
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#ff6b00] text-black font-mono font-bold text-xs"
                      >
                        <span>TAP TO OPEN CERTIFICATE PDF</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </>
                ) : (
                  <div className="text-center p-8">
                    <Award className="w-16 h-16 text-[#ff6b00] mx-auto mb-4" />
                    <p className="text-white font-heading text-lg mb-2">{selectedCert.title}</p>
                    <p className="text-slate-400 font-mono text-sm">Credential ID: {selectedCert.credentialId}</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-3.5 sm:p-4 bg-[#0a0f1c] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="text-slate-400">
                  Credential ID: <span className="text-white">{selectedCert.credentialId || 'N/A'}</span>
                </div>
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff9248] hover:underline flex items-center gap-1.5"
                  >
                    <span>Verify Authenticity on Issuer Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

