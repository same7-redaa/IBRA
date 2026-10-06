import React from "react";
import styles from "./SocialConnect.module.css";

export default function SocialConnect() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 text-white border-t border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#FF8B2C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-[#FF8B2C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1200px] mx-auto text-center relative z-10">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">
          انضم إلى عائلة <span className="text-[#FF8B2C] drop-shadow-[0_0_20px_rgba(255,139,44,0.4)]">عسل زوين</span> للأعسال الطبيعية
        </h2>

        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed mb-8">
          تابعنا على منصات التواصل الاجتماعي لمعرفة مواسم قطف الأعسال الجديدة، والخلطات العلاجية، والتواصل المباشر مع خبرائنا.
        </p>

        {/* Buttons Row (Side by Side) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialButton} ${styles.btnFacebook}`}
            aria-label="فيسبوك"
          >
            <svg viewBox="0 0 26 26" fill="currentColor" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
              <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z" />
            </svg>
            <span>فيسبوك</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialButton} ${styles.btnInstagram}`}
            aria-label="انستجرام"
          >
            <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>انستجرام</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201023160657"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialButton} ${styles.btnWhatsApp}`}
            aria-label="واتساب"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" height={22} width={22}>
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.969.54 2.083.825 3.228.825 3.183 0 5.768-2.587 5.769-5.767.001-3.18-2.585-5.767-5.768-5.767zm3.391 8.211c-.147.414-.732.76-1.025.807-.291.045-.662.062-2.122-.524-1.606-.644-2.617-2.316-2.696-2.422-.078-.106-.647-.862-.647-1.644 0-.781.41-1.164.556-1.321.147-.156.324-.196.432-.196.108 0 .216.001.309.006.098.005.23-.037.36.275.137.33.468 1.142.509 1.226.041.084.068.181.014.288-.054.108-.081.176-.162.271-.081.095-.171.212-.245.284-.082.082-.168.172-.072.338.096.166.427.705.916 1.141.63.561 1.161.734 1.327.816.166.083.264.069.362-.042.098-.111.42-.489.532-.656.113-.166.226-.139.38-.083.156.056.985.464 1.155.549.17.085.284.127.325.197.042.07.042.408-.105.822z" />
            </svg>
            <span>واتساب</span>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialButton} ${styles.btnTikTok}`}
            aria-label="تيك توك"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.48 2.84 1.55-.02 2.96-.98 3.48-2.42.27-.67.36-1.4.35-2.12V.02h-2.52z" />
            </svg>
            <span>تيك توك</span>
          </a>

        </div>

      </div>
    </section>
  );
}
