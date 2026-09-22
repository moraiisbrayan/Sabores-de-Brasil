import pastel from '../assets/img/pastel.webp'
import coxinhas from '../assets/img/coxinhas.webp'
import esfihas from '../assets/img/esfihas.webp'
import boloCenoura from '../assets/img/bolo-cenoura.webp'
import caldo from '../assets/img/caldo-de-cana.webp'
import tarta from '../assets/img/tarta-fresas.webp'
import vitrine from '../assets/img/vitrine.webp'
import salon from '../assets/img/salon.webp'
import mesa from '../assets/img/mesa-pasteles.webp'
import logo from '../assets/img/logo.png'
import logoGreen from '../assets/img/logo-green.webp'
import logoCream from '../assets/img/logo-cream.webp'
import bolosPote from '../assets/img/bolos-de-pote.webp'

export const IMG = { pastel, coxinhas, esfihas, boloCenoura, caldo, tarta, vitrine, salon, mesa, logo, logoGreen, logoCream, bolosPote }

/* ------------------------------------------------------------------
   DADOS DO NEGÓCIO
   Tudo o que estiver `null` fica ESCONDIDO na página automaticamente.
   Preencher somente com informação confirmada pelo cliente.
------------------------------------------------------------------- */
export const SITE = {
  name: 'Sabores de Brasil Madrid',
  address: {
    street: 'C. de Castrojeriz, 7, Local 43',
    district: 'Carabanchel',
  },
  mapsUrl:
    'https://www.google.com/maps/place/Sabores+de+Brasil+Madrid+%7C+cafeter%C3%ADa+brasile%C3%B1a/@40.3866925,-3.7389883,17z/data=!4m6!3m5!1s0xd42274117b65fa1:0x722441a709a005be!8m2!3d40.3866925!4d-3.7389883!16s%2Fg%2F11n9cns66t',
  instagram: {
    handle: '@saboresdebrasil.madrid',
    url: 'https://www.instagram.com/saboresdebrasil.madrid/',
  },

  // PENDENTE DE CONFIRMAÇÃO
  whatsapp: null, // ex.: '34600000000' (só números, com código do país)
  phone: null, // ex.: '+34 600 000 000'
  hours: null, // ex.: [{ days: { es: 'Lunes a viernes', pt: 'Segunda a sexta' }, time: '9:00 – 20:00' }]
  googleRating: null, // ex.: { value: '4,9', count: 120 } — copiar do Google Maps
}

// Textos com duas versões usam { es, pt } — o componente escolhe pelo idioma ativo.

export const NAV = [
  { href: '#inicio', label: { es: 'Inicio', pt: 'Início' } },
  { href: '#nosotros', label: { es: 'Nosotros', pt: 'Sobre nós' } },
  { href: '#sabores', label: { es: 'Sabores', pt: 'Sabores' } },
  { href: '#galeria', label: { es: 'Galería', pt: 'Galeria' } },
  { href: '#instagram', label: { es: 'Instagram', pt: 'Instagram' } },
  { href: '#contacto', label: { es: 'Contacto', pt: 'Contato' } },
]

// Categorias confirmadas pelas fotos reais do local (Google Maps).
export const SABORES = [
  {
    img: pastel,
    hand: 'Pastel',
    name: { es: 'Pasteles', pt: 'Pastéis' },
    alt: {
      es: 'Pastel brasileño abierto con relleno de jamón, queso y tomate sobre tabla de madera',
      pt: 'Pastel aberto com recheio de presunto, queijo e tomate sobre tábua de madeira',
    },
    desc: {
      es: 'Masa fina que cruje al primer bocado y un relleno generoso. El clásico de las ferias brasileñas.',
      pt: 'Massa fininha que estala na primeira mordida e recheio generoso. O clássico das feiras brasileiras.',
    },
  },
  {
    img: coxinhas,
    pos: 'center 72%',
    hand: 'Coxinha',
    name: { es: 'Coxinhas', pt: 'Coxinhas' },
    alt: {
      es: 'Dos coxinhas doradas sobre una bandeja de madera junto a una lata de guaraná',
      pt: 'Duas coxinhas douradas numa bandeja de madeira ao lado de uma lata de guaraná',
    },
    desc: {
      es: 'Crujiente por fuera y cremosa por dentro. El salado más querido de Brasil.',
      pt: 'Crocante por fora e cremosa por dentro. O salgado mais querido do Brasil.',
    },
  },
  {
    img: esfihas,
    pos: 'center 78%',
    hand: 'Esfiha',
    name: { es: 'Esfihas', pt: 'Esfihas' },
    alt: { es: 'Dos esfihas abiertas con relleno dorado y queso cremoso', pt: 'Duas esfihas abertas com recheio dourado e queijo cremoso' },
    desc: {
      es: 'Masa suave y horneada, abierta y con el relleno a la vista.',
      pt: 'Massa macia e assada, aberta e com o recheio à mostra.',
    },
  },
  {
    img: boloCenoura,
    pos: 'center 82%',
    hand: 'Bolo caseiro',
    name: { es: 'Bolos y tartas', pt: 'Bolos e tortas' },
    alt: {
      es: 'Bolo de zanahoria con cobertura de chocolate, cortado, frente a la pared del local',
      pt: 'Bolo de cenoura com cobertura de chocolate, cortado, em frente à parede do local',
    },
    desc: {
      es: 'Tartas de casa y bolos de pote, como el de zanahoria con su cobertura de chocolate.',
      pt: 'Bolos caseiros e bolos de pote, como o de cenoura com cobertura de chocolate.',
    },
  },
  {
    img: caldo,
    hand: 'Caldo de cana',
    name: { es: 'Caldo de caña', pt: 'Caldo de cana' },
    alt: { es: 'Vasos de caldo de caña de azúcar con espuma servidos en una bandeja', pt: 'Copos de caldo de cana com espuma servidos numa bandeja' },
    desc: {
      es: 'Zumo de caña de azúcar: dulce, fresco y muy brasileño.',
      pt: 'Caldo de cana: docinho, refrescante e muito brasileiro.',
    },
  },
]

export const GALLERY = [
  { src: salon, w: 716, h: 852, alt: { es: 'Salón de Sabores de Brasil Madrid con pérgola de madera, plantas y mesas', pt: 'Salão do Sabores de Brasil Madrid com pérgola de madeira, plantas e mesas' } },
  { src: mesa, w: 700, h: 860, alt: { es: 'Mesa con dos pasteles, vinagreta y zumos de colores', pt: 'Mesa com dois pastéis, vinagrete e sucos coloridos' } },
  { src: tarta, w: 544, h: 850, alt: { es: 'Tarta de chocolate con fresas frente a la frase de la pared', pt: 'Bolo de chocolate com morangos em frente à frase da parede' } },
  { src: caldo, w: 960, h: 840, alt: { es: 'Caldo de caña recién servido', pt: 'Caldo de cana servido na hora' } },
  { src: boloCenoura, w: 542, h: 850, alt: { es: 'Bolo de zanahoria con chocolate', pt: 'Bolo de cenoura com chocolate' } },
  { src: bolosPote, w: 675, h: 905, alt: { es: 'Tres bolos de pote apilados frente a la frase de la pared', pt: 'Três bolos de pote empilhados em frente à frase da parede' } },
]

/* Reseñas: añadir SOLO reseñas reales copiadas de Google Maps, con permiso/fuente.
   Mientras esté vacío, la sección muestra un enlace a las reseñas de Google.
   Formato:
   { name: 'Nombre', rating: 5, text: 'Texto literal de la reseña', date: 'hace 2 meses' }
*/
export const REVIEWS = [
  {
    name: 'Jessica Cardoso',
    rating: 5,
    text: 'Amei, o espaço está super bonito, sem cheiro de gordura, a comida super saborosa, realmente mato a saudade do Brasil, tudo muito fresquinho, atendimento excelente. Parabéns pelo espaço.',
  },
  {
    name: 'Shawany Mata',
    rating: 5,
    text: 'Simplesmente o melhor estabelecimento de comida brasileira! Sou completamente apaixonada por esse lugar. Já experimentei várias coisas do cardápio, como pastel e esfirra, e tudo estava maravilhoso, muito bem feito e com aquele gostinho de comida do Brasil que dá até saudade. O atendimento também é excelente, as pessoas são super atenciosas e simpáticas, te fazem sentir em casa.',
  },
  {
    name: 'Sige Almeida',
    rating: 5,
    text: 'Ambiente acolhedor, equipe super atenciosa e muita coisa gostosa de verdade pra comer. Da pra matar aquela saudade do Brasil.',
  },
]
