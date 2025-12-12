import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

const Contact5 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Ľavá strana - Formulár */}
          <div>
            <h2 className="mb-8 text-3xl font-semibold">Napíšte nám správu</h2>
            <div className="flex flex-col gap-6">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="name">
                  Meno a priezvisko <span className="text-red-500">*</span>
                </Label>
                <Input type="text" id="name" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input type="email" id="email" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="phone">Telefón</Label>
                <Input type="tel" id="phone" />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="message">
                  Správa <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  placeholder="Opíšte vašu otázku alebo požiadavku..."
                  id="message"
                  rows={6}
                />
              </div>
              <Button className="w-full">Odoslať správu</Button>
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-3xl font-semibold">Kontaktné informácie</h2>
            <div className="flex flex-col gap-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Email</h3>
                  <p className="text-sm text-primary">info@dentalweb.sk</p>
                  <p className="text-sm text-primary">podpora@dentalweb.sk</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Telefón</h3>
                  <p className="text-sm text-primary">+421 123 456 789</p>
                  <p className="text-sm text-primary">Pondelok - Piatok: 9:00 - 17:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Adresa</h3>
                  <p className="text-sm text-primary">Hlavná 123</p>
                  <p className="text-sm text-primary">010 01 Žilina</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">Pracovné hodiny</h3>
                  <p className="text-sm text-primary">Pondelok - Piatok: 9:00 - 17:00</p>
                  <p className="text-sm text-primary">Sobota - Nedeľa:</p>
                  <p className="text-sm text-primary">Zatvorené</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 w-full bg-muted py-16">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-semibold">Naša poloha</h2>
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.5!2d18.7408!3d49.2232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDEzJzIzLjUiTiAxOMKwNDQnMjYuOSJF!5e0!3m2!1ssk!2ssk!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Contact5 }
