"use client";

import { FaDownload } from "react-icons/fa";

export default function StructureOrganization() {
  const pdfUrl = "/struktur-organisasi.pdf";

  return (
    <section id="struktur-organisasi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Struktur Organisasi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Lihat struktur organisasi perusahaan kami dalam dokumen lengkap di bawah ini.
          </p>
          <a
            href={pdfUrl}
            download="Struktur-Organisasi-PT-CIH.pdf"
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            <FaDownload />
            Unduh PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className="w-full"
            style={{ minHeight: "600px", height: "80vh" }}
            title="Struktur Organisasi"
            allowFullScreen
          />
        </div>

        {/* Mobile Friendly Download */}
        <div className="mt-8 text-center md:hidden">
          <p className="text-gray-600 mb-4">
            Untuk pengalaman terbaik, unduh dan buka PDF di aplikasi pembaca PDF Anda.
          </p>
          <a
            href={pdfUrl}
            download="Struktur-Organisasi-PT-CIH.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
          >
            <FaDownload />
            Unduh PDF Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
