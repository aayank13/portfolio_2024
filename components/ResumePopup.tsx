"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

type ResumePopupProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const ResumePopup = ({ isOpen, setIsOpen }: ResumePopupProps) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Aayan-Resume.pdf";
    link.download = "Aayan-Resume.pdf";
    link.click();
  };

  const onDocumentLoadError = (err: Error) => {
    console.error("PDF Load Error:", err);
    setError(err.message);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <div className="relative h-full mx-auto overflow-auto">
          {error ? (
            <div className="w-full flex items-center justify-center text-red-500">
              {error}
            </div>
          ) : (
            <Document
              file="/Aayan-Resume.pdf"
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              onLoadError={onDocumentLoadError}
              className="flex justify-center"
              loading={
                <div className="w-full h-full flex items-center justify-center">
                  Loading PDF...
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                className="max-w-full"
                renderAnnotationLayer={false}
                renderTextLayer={false}
                scale={1.2}
              />
            </Document>
          )}
        </div>

        {numPages && numPages > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white">
            <Button
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              disabled={pageNumber <= 1}
              size="sm"
            >
              Previous
            </Button>
            <span className="flex items-center">
              {pageNumber} / {numPages}
            </span>
            <Button
              onClick={() =>
                setPageNumber((prev) => Math.min(prev + 1, numPages))
              }
              disabled={pageNumber >= numPages}
              size="sm"
            >
              Next
            </Button>
          </div>
        )}
        <Button onClick={handleDownload} className="absolute top-2 left-2 z-10">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePopup;
