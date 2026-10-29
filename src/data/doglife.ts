import type { ImageMetadata } from 'astro';
import pack15Img from '@/assets/images/pack-15.jpg';
import pack500gImg from '@/assets/images/pack-500g.jpg';
import pack1kgImg from '@/assets/images/pack-1kg.jpg';

export const SITE_CONFIG = {
  brandName: 'DogLife Store',
  phoneDisplay: '994 821 349',
  secondaryPhoneDisplay: '981 234 567',
  whatsappPrimary: '51994821349',
  whatsappSecondary: '51981234567',
  email: 'hola@doglifestore.pe',
  ruc: '20601234567',
  schedule: 'Lunes a Sábado: 9:00 am - 7:00 pm',
  expressDistricts: 'Miraflores, San Isidro, Surco, Barranco y San Borja',
} as const;

export function buildWhatsAppUrl(message: string, phone: string = SITE_CONFIG.whatsappPrimary): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export interface BenefitItem {
  id: 'joint' | 'tooth' | 'leaf' | 'calm';
  title: string;
  mobileTitle: string;
  description: string;
  mobileDescription: string;
  badge: string;
}

export const BENEFITS: BenefitItem[] = [
  {
    id: 'joint',
    title: 'Colágeno & Articulaciones',
    mobileTitle: 'Colágeno Puro',
    description:
      'Regenera el tejido cartilaginoso en perros senior y refuerza ligamentos en cachorros de razas grandes y medianas.',
    mobileDescription: 'Articulaciones elásticas, cartílagos fuertes y pelaje sedoso.',
    badge: 'Alta biodisponibilidad',
  },
  {
    id: 'tooth',
    title: 'Cepillo Dental Natural',
    mobileTitle: 'Dientes Sanos',
    description:
      'La fricción mecánica al triturar el cartílago remueve el sarro acumulado y reduce drásticamente el mal aliento (halitosis).',
    mobileDescription: 'Textura crocante natural que remueve el sarro y cuida encías.',
    badge: 'Prevención de gingivitis',
  },
  {
    id: 'leaf',
    title: '100% Natural, 0% Químicos',
    mobileTitle: '100% Natural',
    description:
      'Libre de colorantes, saborizantes artificiales, glicerina o conservantes BHA/BHT. Solo pollo peruano criado bajo control sanitario.',
    mobileDescription: 'Cero químicos, sin saborizantes ni conservantes artificiales.',
    badge: 'Sin harinas ni rellenos',
  },
  {
    id: 'calm',
    title: 'Alivio del Estrés & Ansiedad',
    mobileTitle: 'Calma & Energía',
    description:
      '15 a 20 minutos de masticación activa liberan endorfinas y serotonina, calmando conductas destructivas por aburrimiento en casa.',
    mobileDescription: 'Masticación entretenida que relaja y aporta proteína de alto valor.',
    badge: 'Enriquecimiento ambiental',
  },
];

export interface PackItem {
  slug: string;
  tag: string;
  mobileTag: string;
  featuredBanner?: string;
  name: string;
  mobileSubtitle: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  features: string[];
  price: number;
  priceNote: string;
  oldPrice?: number;
  stockNote: string;
  featured?: boolean;
  ctaLabel: string;
  whatsappMessage: string;
}

export const PACKS: PackItem[] = [
  {
    slug: 'pack-15',
    tag: 'Pack Degustación',
    mobileTag: 'Iniciación',
    name: 'Pack 15 Patitas',
    mobileSubtitle: 'Bolsa x15 patitas seleccionadas',
    description:
      'Ideal para perritos que van a probar el snack por primera vez o razas pequeñas.',
    image: pack15Img,
    imageAlt:
      'Bolsa artesanal de papel kraft con 15 patitas de pollo deshidratadas crujientes sobre madera natural',
    features: [
      'Patitas crujientes seleccionadas',
      'Bolsa resellable con cierre hermético',
      'Ideal para probar el snack o razas pequeñas',
    ],
    price: 10,
    priceNote: 'bolsa',
    stockNote: 'Stock Diario',
    ctaLabel: 'Pedir',
    whatsappMessage: 'Hola DogLife, deseo pedir el Pack 15 Patitas a S/ 10',
  },
  {
    slug: 'pack-500g',
    tag: 'Mejor Relación / Precio',
    mobileTag: 'Rendimiento Semanal',
    featuredBanner: '★ El Favorito de la Manada',
    name: 'Pack ½ Kilogramo',
    mobileSubtitle: 'Aprox. 35 a 40 patitas deshidratadas (500g)',
    description:
      'Ración mensual equilibrada para 1 perro mediano (1 patita interdiaria).',
    image: pack500gImg,
    imageAlt:
      'Empaque kraft de medio kilogramo DogLife Store lleno de patitas de pollo deshidratadas doradas',
    features: [
      'Ahorro del 25% frente a bolsas individuales',
      'Deshidratación lenta para máxima crocancia',
      'Uñas retiradas y envase triple capa contra humedad',
    ],
    price: 25,
    priceNote: 'aprox. 35–40 patitas',
    oldPrice: 29,
    stockNote: 'Ahorro Medio',
    featured: true,
    ctaLabel: 'Pedir',
    whatsappMessage: 'Hola DogLife, deseo pedir el Pack 1/2 kg (500g) a S/ 25',
  },
  {
    slug: 'pack-1kg',
    tag: 'Pack Familiar / Multiperro',
    mobileTag: 'Multi-perros • Mes completo',
    name: 'Pack 1 Kilogramo',
    mobileSubtitle: 'Aprox. 75 a 85 patitas crujientes (1000g)',
    description:
      'Para hogares con dos o más mascotas o perros grandes (Labradores, Golden, Pastores).',
    image: pack1kgImg,
    imageAlt:
      'Bolsa familiar de 1 kilogramo de patitas de pollo deshidratadas artesanales sobre lienzo de yute',
    features: [
      'Mejor precio por patita del catálogo',
      'Ideal para hogares con varios perros o razas grandes',
      'Despacho preferencial prioritario',
    ],
    price: 35,
    priceNote: 'aprox. 75–85 patitas',
    oldPrice: 48,
    stockNote: 'Máximo Ahorro',
    ctaLabel: 'Pedir',
    whatsappMessage: 'Hola DogLife, deseo pedir el Pack Familiar de 1 kg a S/ 35',
  },
];

export interface CompositionMetric {
  label: string;
  percentage: string;
  barColorClass: string;
  note?: string;
  icon?: 'chart' | 'joint';
}

export const COMPOSITION_METRICS: CompositionMetric[] = [
  {
    label: 'Proteína Cruda Natural',
    percentage: '52.4%',
    barColorClass: 'bg-primary',
    note: 'Músculo magro y elastina de origen animal puro.',
    icon: 'chart',
  },
  {
    label: 'Colágeno Tipo II & Glucosamina',
    percentage: '30.1%',
    barColorClass: 'bg-honey',
    note: 'Proveniente de cartílagos, tendones y cápsulas articulares.',
    icon: 'joint',
  },
  {
    label: 'Grasa Natural (Ácidos Grasos)',
    percentage: '11.2%',
    barColorClass: 'bg-secondary-fixed-dim',
  },
  {
    label: 'Humedad Residual Segura',
    percentage: '6.3%',
    barColorClass: 'bg-surface-tint',
    note: 'Nivel idóneo para evitar hongos y garantizar crujido sin astillarse.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Desde qué edad puede comer patitas deshidratadas mi cachorro?',
    answer:
      'A partir de los 4 meses de edad, cuando ya inició el cambio dental. Recomendamos supervisar sus primeras sesiones y comenzar con el Pack Degustación.',
  },
  {
    question: '¿Cómo debo conservar las patitas en casa y cuánto tiempo duran?',
    answer:
      'Mantén la bolsa cerrada con su sello hermético ziploc en un lugar fresco y seco, lejos del sol directo. Se conservan crujientes hasta por 6 meses sin refrigeración.',
  },
  {
    question: '¿Hacen envíos a todo Lima Metropolitana y provincias?',
    answer:
      'Sí. Contamos con delivery el mismo día en Miraflores, San Isidro, Surco, Barranco y San Borja, envíos en 24h al resto de Lima y Callao, y despachos por agencia a todo el Perú.',
  },
];

export interface OrderStep {
  id: 'whatsapp' | 'delivery' | 'payment';
  step: number;
  shortLabel: string;
  title: string;
  description: string;
  highlightBadge?: string;
  badgeText?: string;
  footerIcon?: 'whatsapp' | 'truck';
  paymentTags?: string[];
}

export const ORDER_STEPS: OrderStep[] = [
  {
    id: 'whatsapp',
    step: 1,
    shortLabel: 'WhatsApp',
    title: 'Escríbenos por WhatsApp',
    description:
      'Elige tu pack (S/ 10, S/ 25 o S/ 35) y compártenos tu distrito y dirección de entrega.',
    badgeText: 'Respuesta inmediata',
    footerIcon: 'whatsapp',
  },
  {
    id: 'delivery',
    step: 2,
    shortLabel: 'Entrega',
    title: 'Recibe en tu Puerta',
    description:
      'Coordinamos el motorizado con seguimiento en tiempo real hasta tu domicilio o veterinaria.',
    badgeText: 'Todo Lima y Callao',
    footerIcon: 'truck',
  },
  {
    id: 'payment',
    step: 3,
    shortLabel: 'Pago',
    title: 'Paga con Yape, Plin o Transferencia',
    description:
      'Aceptamos todos los canales digitales sin comisiones ni recargos adicionales.',
    highlightBadge: 'Contraentrega',
    paymentTags: ['Yape', 'Plin', 'BCP / BBVA'],
  },
];

export interface TestimonialItem {
  initials: string;
  avatarBgClass: string;
  name: string;
  subtitle: string;
  quote: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    initials: 'CV',
    avatarBgClass: 'bg-secondary-fixed',
    name: 'Camila Valdivia',
    subtitle: "Mamá de 'Rocky' • Surco",
    quote:
      'Mi Golden de 8 años tenía mucha rigidez en las patas traseras por las mañanas. Desde que le doy una patita después de su paseo mañanero se para mucho más ágil. Además, sus dientes huelen súper limpios.',
  },
  {
    initials: 'JP',
    avatarBgClass: 'bg-primary-fixed',
    name: 'Juan Pablo R.',
    subtitle: 'Papá de 3 rescatados • Miraflores',
    quote:
      'El pack de 1 kg a S/ 35 es el mejor ahorro. Tengo tres perritos adoptados en casa y es el único snack que no les da alergias ni diarreas porque no tiene químicos. Llega súper rápido en Miraflores.',
  },
  {
    initials: 'MS',
    avatarBgClass: 'bg-tertiary-fixed',
    name: 'María Stefany',
    subtitle: "Mamá de 'Toby' • San Borja",
    quote:
      'Tenía miedo de que se astille pero nada que ver, se vuelve polvito crujiente mientras mastica. Es ideal para cuando hago home office y necesito que esté entretenido y tranquilo.',
  },
];
