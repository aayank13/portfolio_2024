import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { X } from 'lucide-react';

type ResumePopupProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const ResumePopup = ({ isOpen, setIsOpen }: ResumePopupProps) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Aayan-Resume.pdf';
    link.download = 'Aayan-Resume.pdf';
    link.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-4xl h-[80vh]">
        <div className="relative h-full">
          <Button 
            onClick={handleDownload}
            className="absolute top-2 right-2 z-10"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <iframe
            src="/Aayan-Resume.pdf#toolbar=0"
            className="w-full h-full"
            title="Resume"
            allowFullScreen={true}
          />
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -right-6 -top-6 z-10 rounded-full p-2 bg-black text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumePopup;