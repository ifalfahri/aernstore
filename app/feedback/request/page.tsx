import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Request Barang',
  description: 'Pelanggan Aern Store dapat melakukan request barang apa yang ingin dijual oleh Aern Store',
}

export default function RequestPage() {
  return (
    <div className="mb-6 text-center">
      <p className="text-muted-foreground">
        Ada barang yang kamu ingin kami menjualnya? Silahkan ketikkan requestnya di bawah ini.
      </p>
    </div>
  )
}