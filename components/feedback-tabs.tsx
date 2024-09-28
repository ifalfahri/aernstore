'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { StarRating } from './star-rating'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { CheckCircle, XCircle } from 'lucide-react'

export default function FeedbackTabs({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const isRatingTab = pathname === '/feedback/rating';
  
      // Tentukan sheet name berdasarkan tab yang dipilih
      const sheetName = isRatingTab ? 'Rating dan Pengaduan' : 'Request Barang';
  
      // Data yang akan dikirim
      const data = {
        sheet: sheetName,
        feedback,
        rating: isRatingTab ? String(rating) : '',
      };
  
      await fetch('https://script.google.com/macros/s/AKfycbx5wnt5fvKcLhyxKefIY3yjhgAkzdxyOn7b4sBcAtgVGuKxgwisZiAC_67opkm7-2v2/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data),
        mode: 'no-cors',
      });

      setIsSuccess(true);
      setIsSubmitting(false);
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      if (isSuccess) {
        setFeedback('');
        setRating(0);
      }
    };
  
    const getPlaceholder = () => {
      if (pathname !== '/feedback/rating') return 'Jelaskan permintaan atau saran Anda...';
      switch (rating) {
        case 1:
          return 'Kami sangat minta maaf atas pengalaman Anda. Tolong beri tahu kami lebih detail apa yang terjadi.';
        case 2:
          return 'Kami minta maaf atas ketidaknyamanannya. Bisakah Anda memberi tahu kami apa yang salah?';
        case 3:
          return 'Terima kasih atas masukan Anda. Bagaimana kami bisa meningkatkan layanan kami?';
        case 4:
          return 'Kami senang Anda cukup puas! Ada hal lain yang bisa kami tingkatkan?';
        case 5:
          return 'Kami senang Anda menikmatinya! Apa yang paling Anda sukai?';
        default:
          return 'Bagikan pengalaman Anda...';
      }
    };
  
    return (
      <div className="w-full max-w-3xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex space-x-1 rounded-lg bg-muted p-1 mb-4" role="tablist" aria-orientation="horizontal">
          <Link href="/feedback/rating" className={`flex-1 ${pathname === '/feedback/rating' ? 'bg-background text-foreground' : ''} px-3 py-1.5 text-sm font-medium text-center rounded-md transition-all`} role="tab">
            Rating
          </Link>
          <Link href="/feedback/request" className={`flex-1 ${pathname === '/feedback/request' ? 'bg-background text-foreground' : ''} px-3 py-1.5 text-sm font-medium text-center rounded-md transition-all`} role="tab">
            Request
          </Link>
        </div>
  
        {children}
  
        <Card className="mt-4">
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4 pt-6">
              {pathname === '/feedback/rating' && (
                <div className="space-y-2 flex flex-col items-center">
                  <Label htmlFor="rating" className="text-sm sm:text-base">Rating</Label>
                  <StarRating onChange={setRating} />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="feedback" className="text-sm sm:text-base">Pesan</Label>
                <Textarea
                  id="feedback"
                  placeholder={getPlaceholder()}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[100px] sm:min-h-[150px] text-sm sm:text-base"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button type="submit" className="w-full sm:w-auto sm:min-w-[100px]" disabled={isSubmitting}>
                {isSubmitting ? 'Mengirim...' : 'Kirim'}
              </Button>
            </CardFooter>
          </form>
        </Card>
  
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="w-80 rounded-lg sm:w-[500px]">
            <DialogHeader>
              <DialogTitle className="sm:mb-2">{isSuccess ? 'Berhasil!' : 'Error'}</DialogTitle>
              <DialogDescription>
                {isSuccess ? (
                  <div className="flex items-center sm:space-x-2 text-green-600">
                    <CheckCircle className="w-8 h-8 sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base">Pesan {pathname === '/feedback/rating' ? 'rating dan pengaduan' : 'request barang'}mu telah berhasil terkirim.</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-red-600">
                    <XCircle className="w-8 h-8 sm:w-6 sm:h-6" />
                    <span className="text-sm sm:text-base">Terjadi error saat ingin mengirim {pathname === '/feedback/rating' ? 'rating' : 'request'}. Coba lagi.</span>
                  </div>
                )}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={handleCloseModal} className="w-full sm:w-auto">Baiklah</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  