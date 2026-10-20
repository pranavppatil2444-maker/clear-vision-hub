import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Clock3, Stethoscope } from "lucide-react";
import heroImage from "@/assets/doctor-consultation.jpg";
import { PageHero } from "@/components/page-hero";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Eye Treatments in Islampur | Haripriyaa Netralaya" },
      {
        name: "description",
        content:
          "Explore cataract, retina, glaucoma, screening and optical services at Haripriyaa Netralaya.",
      },
      {
        property: "og:title",
        content: "Eye Treatments — Haripriyaa Netralaya",
      },
      {
        property: "og:description",
        content:
          "Precision-led treatments with Dr. Neeta Ramesh Patil for clearer, healthier vision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TreatmentsPage,
});

const services = [
  {
    titleEn: "Phaco surgery without stitches", titleMr: "बिना टाक्यांची फॅको शस्त्रक्रिया",
    symptoms: [{ en: "Cloudy or blurred vision", mr: "धूसर किंवा अंधुक दृष्टी" }, { en: "Glare in bright light", mr: "तेज प्रकाशाचा त्रास" }, { en: "Difficulty seeing at night", mr: "रात्री दिसण्यास अडचण" }],
    steps: [{ en: "Complete cataract assessment", mr: "संपूर्ण मोतीबिंदू तपासणी" }, { en: "Stitchless Phaco procedure", mr: "बिना टाक्यांची फॅको प्रक्रिया" }, { en: "Planned follow-up review", mr: "नियोजित फॉलो-अप तपासणी" }],
    recovery: { en: "A small-incision, stitchless procedure designed for comfortable recovery.", mr: "लहान छेदातून केली जाणारी बिना टाक्यांची प्रक्रिया, आरामदायक पुनर्प्राप्तीसाठी उपयुक्त." },
    tech: { en: "Modern Phaco system", mr: "आधुनिक फॅको प्रणाली" },
  },
  {
    titleEn: "Painless and stitchless treatments", titleMr: "वेदनारहित व बिना टाक्यांचे उपचार",
    symptoms: [{ en: "Anxiety about eye procedures", mr: "डोळ्यांच्या उपचारांची भीती" }, { en: "Need for a gentler treatment option", mr: "सौम्य उपचार पर्यायाची गरज" }, { en: "Preference for faster recovery", mr: "लवकर बरे होण्याची अपेक्षा" }],
    steps: [{ en: "Detailed eye examination", mr: "सविस्तर नेत्रतपासणी" }, { en: "Suitability assessment", mr: "उपचार योग्यतेचे मूल्यांकन" }, { en: "Personalized treatment plan", mr: "वैयक्तिक उपचार आराखडा" }],
    recovery: { en: "Suitable procedures are planned to minimize discomfort and avoid stitches whenever possible.", mr: "योग्य प्रक्रियांमध्ये वेदना कमी ठेवून शक्य असल्यास टाके टाळण्याचे नियोजन केले जाते." },
    tech: { en: "Patient-focused techniques", mr: "रुग्णकेंद्रित उपचार पद्धती" },
  },
  {
    titleEn: "Pterygium treatment without injection or stitches", titleMr: "बिना इंजेक्शन व बिना टाक्यांचा टेरिजियम उपचार",
    symptoms: [{ en: "Fleshy growth on the eye", mr: "डोळ्यावर मांसल वाढ" }, { en: "Persistent redness or irritation", mr: "सतत लालसरपणा किंवा जळजळ" }, { en: "Growth affecting vision", mr: "दृष्टीवर परिणाम करणारी वाढ" }],
    steps: [{ en: "Surface examination", mr: "डोळ्याच्या पृष्ठभागाची तपासणी" }, { en: "Procedure suitability review", mr: "प्रक्रियेच्या योग्यतेचे मूल्यांकन" }, { en: "Stitchless treatment and follow-up", mr: "बिना टाक्यांचा उपचार व फॉलो-अप" }],
    recovery: { en: "For suitable patients, treatment is performed without injection or stitches.", mr: "योग्य रुग्णांमध्ये उपचार इंजेक्शन व टाक्यांशिवाय केला जातो." },
    tech: { en: "Suture-free surface treatment", mr: "बिना टाक्यांचे पृष्ठभाग उपचार तंत्र" },
  },
  {
    titleEn: "Vision screening and computerized refraction", titleMr: "दृष्टी तपासणी व संगणकीय चष्मा नंबर चाचणी",
    symptoms: [{ en: "Blurred distance or near vision", mr: "दूरचे किंवा जवळचे धूसर दिसणे" }, { en: "Headaches while reading", mr: "वाचताना डोकेदुखी" }, { en: "Eye strain after screen use", mr: "स्क्रीन वापरानंतर डोळ्यांवर ताण" }],
    steps: [{ en: "Vision screening", mr: "दृष्टी तपासणी" }, { en: "Computerized refraction test", mr: "संगणकीय चष्मा नंबर चाचणी" }, { en: "Accurate spectacle prescription", mr: "अचूक चष्मा नंबर देणे" }],
    recovery: { en: "Results are available immediately after the examination.", mr: "तपासणीनंतर निकाल त्वरित उपलब्ध होतात." },
    tech: { en: "Computerized auto-refractometer", mr: "संगणकीय ऑटो-रिफ्रॅक्टोमीटर" },
  },
  {
    titleEn: "Eye injury and trauma care", titleMr: "डोळ्यांच्या दुखापती व आघातांवर उपचार",
    symptoms: [{ en: "Sudden pain after an accident", mr: "अपघातानंतर अचानक वेदना" }, { en: "Redness, cuts or foreign-body sensation", mr: "लालसरपणा, जखम किंवा परकी वस्तूची जाणीव" }, { en: "Vision loss after injury", mr: "दुखापतीनंतर दृष्टी कमी होणे" }],
    steps: [{ en: "Urgent eye examination", mr: "तातडीची नेत्रतपासणी" }, { en: "Damage assessment", mr: "दुखापतीचे मूल्यांकन" }, { en: "Medical or surgical care", mr: "वैद्यकीय किंवा शस्त्रक्रियात्मक उपचार" }],
    recovery: { en: "Recovery and follow-up depend on the type and severity of the injury.", mr: "बरे होण्याचा कालावधी व फॉलो-अप दुखापतीच्या प्रकारावर आणि तीव्रतेवर अवलंबून असतो." },
    tech: { en: "Eye trauma assessment", mr: "नेत्र आघात मूल्यांकन" },
  },
  {
    titleEn: "Retina and diabetic eye care", titleMr: "रेटिना व मधुमेहाशी संबंधित नेत्रसेवा",
    symptoms: [{ en: "Diabetes-related vision changes", mr: "मधुमेहामुळे दृष्टीत बदल" }, { en: "Floaters or dark spots", mr: "तरंगते ठिपके किंवा काळे डाग" }, { en: "Sudden or gradual vision loss", mr: "अचानक किंवा हळूहळू दृष्टी कमी होणे" }],
    steps: [{ en: "Dilated retinal examination", mr: "बुबुळ मोठे करून रेटिना तपासणी" }, { en: "Retinal imaging", mr: "रेटिनाचे इमेजिंग" }, { en: "Monitoring and treatment plan", mr: "देखरेख व उपचार आराखडा" }],
    recovery: { en: "Regular monitoring helps detect retinal changes early and protect vision.", mr: "नियमित तपासणीमुळे रेटिनातील बदल लवकर ओळखून दृष्टीचे संरक्षण करता येते." },
    tech: { en: "Retinal imaging and diagnostics", mr: "रेटिना इमेजिंग व निदान" },
  },
  {
    titleEn: "YAG laser for secondary cataract", titleMr: "दुय्यम मोतीबिंदूसाठी YAG लेसर उपचार",
    symptoms: [{ en: "Blur after previous cataract surgery", mr: "पूर्वीच्या मोतीबिंदू शस्त्रक्रियेनंतर धूसर दिसणे" }, { en: "Glare or reduced contrast", mr: "प्रकाशाचा त्रास किंवा कमी कॉन्ट्रास्ट" }, { en: "Clouding behind the lens implant", mr: "कृत्रिम लेन्सच्या मागे पडदा येणे" }],
    steps: [{ en: "Eye and lens assessment", mr: "डोळा व लेन्स तपासणी" }, { en: "Scheduled YAG laser procedure", mr: "नियोजित YAG लेसर प्रक्रिया" }, { en: "Post-laser review", mr: "लेसरनंतर तपासणी" }],
    recovery: { en: "Available at selected timings on the second and fourth Friday of every month.", mr: "दर महिन्याच्या दुसऱ्या व चौथ्या शुक्रवारी निवडक वेळेत ही सेवा उपलब्ध आहे." },
    tech: { en: "YAG laser platform", mr: "YAG लेसर प्रणाली" },
  },
  {
    titleEn: "Glaucoma and vision screening", titleMr: "काचबिंदू व दृष्टी तपासणी",
    symptoms: [{ en: "Family history of glaucoma", mr: "कुटुंबात काचबिंदूचा इतिहास" }, { en: "Raised eye pressure", mr: "डोळ्यातील वाढलेला दाब" }, { en: "Reduced side vision", mr: "बाजूची दृष्टी कमी होणे" }],
    steps: [{ en: "Eye-pressure measurement", mr: "डोळ्यातील दाब मोजणे" }, { en: "Optic nerve examination", mr: "दृष्टी मज्जातंतू तपासणी" }, { en: "Visual-field screening", mr: "दृष्टिक्षेत्र तपासणी" }],
    recovery: { en: "Early screening supports timely monitoring and treatment.", mr: "लवकर तपासणीमुळे वेळेवर देखरेख व उपचार करता येतात." },
    tech: { en: "Tonometry and visual-field testing", mr: "टोनोमेट्री व दृष्टिक्षेत्र चाचणी" },
  },
  {
    titleEn: "Treatment and lenses for every age group", titleMr: "सर्व वयोगटांसाठी उपचार व विविध प्रकारच्या लेन्स",
    symptoms: [{ en: "Changing vision at any age", mr: "कोणत्याही वयात दृष्टीत बदल" }, { en: "Difficulty choosing the right lens", mr: "योग्य लेन्स निवडण्यात अडचण" }, { en: "Need for age-appropriate eye care", mr: "वयानुसार नेत्रसेवेची गरज" }],
    steps: [{ en: "Age-appropriate eye examination", mr: "वयानुसार नेत्रतपासणी" }, { en: "Treatment and lens counselling", mr: "उपचार व लेन्सविषयी मार्गदर्शन" }, { en: "Personalized recommendation", mr: "वैयक्तिक शिफारस" }],
    recovery: { en: "Treatment and lens options are selected according to age, eye health and daily needs.", mr: "वय, डोळ्यांचे आरोग्य व दैनंदिन गरजांनुसार उपचार आणि लेन्स निवडल्या जातात." },
    tech: { en: "Personalized lens planning", mr: "वैयक्तिक लेन्स नियोजन" },
  },
  {
    titleEn: "Ayurvedic eye therapies", titleMr: "आयुर्वेदिक नेत्रचिकित्सा",
    symptoms: [{ en: "Digital eye strain", mr: "डिजिटल डोळ्यांचा ताण" }, { en: "Dryness or eye fatigue", mr: "डोळ्यांचा कोरडेपणा किंवा थकवा" }, { en: "Need for supportive eye care", mr: "पूरक नेत्रसेवेची गरज" }],
    steps: [{ en: "Eye and general assessment", mr: "नेत्र व सर्वसाधारण तपासणी" }, { en: "Tarpana or Shirodhara planning", mr: "तर्पण किंवा शिरोधारा नियोजन" }, { en: "Therapy and lifestyle guidance", mr: "चिकित्सा व जीवनशैली मार्गदर्शन" }],
    recovery: { en: "Tarpana, Shirodhara and other therapies are recommended only after an appropriate assessment.", mr: "योग्य तपासणीनंतरच तर्पण, शिरोधारा व इतर चिकित्सा सुचवली जाते." },
    tech: { en: "Ayurvedic therapy protocols", mr: "आयुर्वेदिक चिकित्सा पद्धती" },
  },
];

function TreatmentsPage() {
  const { t, lang } = useLang();
  const mr = lang === "mr";
  return (
    <>
      <PageHero
        eyebrow={t("Treatments & services")}
        title={t("Precision care for every stage of vision.")}
        description={t("Understand your symptoms, your options and your path to recovery with Dr. Neeta Ramesh Patil—without medical jargon.")}
        image={heroImage}
      />

      <section className="py-24">
        <div className="page-shell space-y-6">
          {services.map((service, index) => (
            <article
              key={service.titleEn}
              className="rounded-lg border border-border bg-card p-6 sm:p-9"
            >
              <div className="grid gap-8 lg:grid-cols-[.8fr_1fr_1fr]">
                <div>
                  <p className="font-serif text-2xl text-secondary">
                    0{index + 1}
                  </p>
                  <h2 className="mt-4 font-serif text-2xl text-ice sm:text-3xl">
                    {mr ? service.titleMr : service.titleEn}
                  </h2>
                  <p className="mt-2 font-serif text-lg leading-snug text-secondary">
                    {mr ? service.titleEn : service.titleMr}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase text-secondary">
                    <Stethoscope className="size-4" />
                    {mr ? service.tech.mr : service.tech.en}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase text-secondary/80">
                    {mr ? service.tech.en : service.tech.mr}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase text-secondary">
                    {t("When to get checked")}
                  </h3>
                  <p className="text-xs font-bold uppercase text-secondary/80">
                    {mr ? "When to get checked" : "कधी तपासणी करावी"}
                  </p>
                  <div className="mt-4 space-y-3">
                    {service.symptoms.map((item) => (
                      <div key={item.en} className="flex gap-2 text-sm">
                        <Check className="mt-1 size-4 shrink-0 text-secondary" />
                        <div>
                          <p className="text-muted-foreground">{mr ? item.mr : item.en}</p>
                          <p className="text-secondary/80">{mr ? item.en : item.mr}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-7 flex gap-2 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
                    <Clock3 className="mt-1 size-4 shrink-0 text-secondary" />
                    <span>
                      {mr ? service.recovery.mr : service.recovery.en}
                      <br />
                      <span className="text-secondary/80">
                        {mr ? service.recovery.en : service.recovery.mr}
                      </span>
                    </span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase text-secondary">
                    {t("Your care pathway")}
                  </h3>
                  <p className="text-xs font-bold uppercase text-secondary/80">
                    {mr ? "Your care pathway" : "तुमच्या काळजीचा मार्ग"}
                  </p>
                  <ol className="mt-4 space-y-3">
                    {service.steps.map((item, i) => (
                      <li
                        key={item.en}
                        className="flex items-start gap-3 rounded-md bg-muted p-3 text-sm text-ice"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                          {i + 1}
                        </span>
                        <div>
                          <p>{mr ? item.mr : item.en}</p>
                          <p className="text-secondary/80">{mr ? item.en : item.mr}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                  <a
                    href={`https://wa.me/919173159195?text=${encodeURIComponent(
                      `I would like to consult Dr. Neeta Ramesh Patil about ${service.titleEn}.`
                    )}`}
                    className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground"
                  >
                    {t("Consult Dr. Neeta Patil")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border py-20 text-center">
        <div className="page-shell">
          <h2 className="display-serif text-4xl text-ice sm:text-5xl">
            {t("Not sure which service you need?")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            {t("Begin with a comprehensive eye evaluation. We’ll guide you from there.")}
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-full border border-border px-6 py-3 text-sm font-bold text-ice"
          >
            {t("Book an evaluation")}
          </Link>
        </div>
      </section>
    </>
  );
}
