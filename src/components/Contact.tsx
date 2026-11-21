import { useState } from "react";
import { Phone, MapPin, Clock, Mail, MessageCircle, Send } from "lucide-react";
import { workshopInfo, whatsappLink } from "@/data/workshopInfo";

export default function Contact() {
  const w = workshopInfo;
  const waLink = whatsappLink();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    workType: "",
    measurements: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waLink) return;
    const text = `السلام عليكم، أرغب بطلب عرض سعر.
الاسم: ${form.name}
رقم الهاتف: ${form.phone}
نوع العمل: ${form.workType}
المقاسات أو التفاصيل: ${form.measurements}
رسالتي: ${form.message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const contactItems = [
    { icon: Phone, label: "الهاتف", value: w.phone },
    { icon: MessageCircle, label: "واتساب", value: w.whatsapp },
    { icon: MapPin, label: "العنوان", value: w.location },
    { icon: Clock, label: "ساعات العمل", value: w.workingHours },
    { icon: Mail, label: "البريد الإلكتروني", value: w.email },
  ].filter((item) => item.value);

  return (
    <section id="contact" className="bg-ivory py-20 sm:py-28">
      <div className="container-x">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="section-eyebrow">تواصل معنا</p>
          <h2 className="section-title">تواصل معنا أو اطلب عرض سعر</h2>
          <p className="mt-5 text-base leading-relaxed text-graphite-600 sm:text-lg">
            نحن جاهزون لتنفيذ فكرتك. تواصل عبر الهاتف أو واتساب، أو املأ النموذج وسنعود إليك في أقرب وقت.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-graphite-800 p-6 shadow-lg sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-ivory sm:text-2xl">معلومات التواصل</h3>
              {contactItems.length > 0 ? (
                <ul className="space-y-4">
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-graphite-700 text-wood-400">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-graphite-400">{item.label}</p>
                        <p className="truncate text-sm font-medium text-ivory sm:text-base" dir="ltr">
                          {item.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-graphite-400">سيتم إضافة معلومات التواصل لاحقاً.</p>
              )}

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {w.phone && (
                  <a href={`tel:${w.phone}`} className="btn-primary flex-1">
                    <Phone className="h-4 w-4" />
                    اتصل بنا
                  </a>
                )}
                {waLink && (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1"
                  >
                    <MessageCircle className="h-4 w-4" />
                    تواصل عبر WhatsApp
                  </a>
                )}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="flex min-h-[180px] items-center justify-center rounded-2xl border border-graphite-200 bg-graphite-100 p-6 text-center">
              {w.googleMapsUrl ? (
                <iframe
                  src={w.googleMapsUrl}
                  className="h-full min-h-[180px] w-full rounded-2xl"
                  loading="lazy"
                  title="موقع الورشة"
                />
              ) : (
                <div>
                  <MapPin className="mx-auto mb-2 h-8 w-8 text-graphite-400" />
                  <p className="text-sm font-medium text-graphite-500">
                    {w.location || "سيتم إضافة الموقع لاحقاً"}
                  </p>
                  <p className="mt-1 text-xs text-graphite-400">يمكن إضافة خريطة هنا لاحقاً</p>
                </div>
              )}
            </div>
          </div>

          {/* Quote form */}
          <div className="rounded-2xl border border-graphite-200 bg-white p-6 shadow-lg sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-graphite-900 sm:text-2xl">
              اطلب عرض سعر
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15">
                  <MessageCircle className="h-8 w-8 text-[#25D366]" />
                </div>
                <p className="mb-2 text-lg font-bold text-graphite-900">تم تجهيز طلبك!</p>
                <p className="mb-6 max-w-sm text-sm text-graphite-600">
                  تم تحويلك إلى واتساب لإرسال طلبك. إذا لم يفتح تلقائياً، اضغط الزر أدناه.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                >
                  إرسال طلب آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-graphite-700">الاسم</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-graphite-200 bg-graphite-50 px-4 py-3 text-sm text-graphite-900 outline-none transition-colors focus:border-graphite-500 focus:bg-white"
                    placeholder="اكتب اسمك"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-graphite-700">رقم الهاتف</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-graphite-200 bg-graphite-50 px-4 py-3 text-sm text-graphite-900 outline-none transition-colors focus:border-graphite-500 focus:bg-white"
                    placeholder="05XXXXXXXX"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-graphite-700">نوع العمل</label>
                  <select
                    required
                    value={form.workType}
                    onChange={(e) => setForm({ ...form, workType: e.target.value })}
                    className="w-full rounded-lg border border-graphite-200 bg-graphite-50 px-4 py-3 text-sm text-graphite-900 outline-none transition-colors focus:border-graphite-500 focus:bg-white"
                  >
                    <option value="">اختر نوع العمل</option>
                    <option value="أعمال الحديد">أعمال الحديد</option>
                    <option value="تشكيل ونقش الحديد">تشكيل ونقش الحديد</option>
                    <option value="أعمال الموبيليا والأخشاب">أعمال الموبيليا والأخشاب</option>
                    <option value="عمل مخصص آخر">عمل مخصص آخر</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-graphite-700">
                    المقاسات أو التفاصيل
                  </label>
                  <input
                    type="text"
                    value={form.measurements}
                    onChange={(e) => setForm({ ...form, measurements: e.target.value })}
                    className="w-full rounded-lg border border-graphite-200 bg-graphite-50 px-4 py-3 text-sm text-graphite-900 outline-none transition-colors focus:border-graphite-500 focus:bg-white"
                    placeholder="مثال: باب بعرض 120 سم وارتفاع 220 سم"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-bold text-graphite-700">رسالتك</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none rounded-lg border border-graphite-200 bg-graphite-50 px-4 py-3 text-sm text-graphite-900 outline-none transition-colors focus:border-graphite-500 focus:bg-white"
                    placeholder="اكتب تفاصيل طلبك هنا..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={!waLink}
                >
                  <Send className="h-4 w-4" />
                  إرسال الطلب عبر واتساب
                </button>
                <p className="text-center text-xs text-graphite-400">
                  {waLink
                    ? "سيتم تحويلك إلى واتساب لإكمال إرسال طلبك"
                    : "سيتم تفعيل الإرسال عند إضافة رقم واتساب"}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
