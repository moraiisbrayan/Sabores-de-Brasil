# Sabores de Brasil Madrid — Landing page

React + Vite + Tailwind CSS. Sem bibliotecas de animação (IntersectionObserver + CSS), fontes auto-hospedadas (Fontsource), imagens WebP otimizadas.

## Rodar
```bash
npm install
npm run dev          # desenvolvimento
npm run build        # produção → /dist (subir na Vercel/Netlify)
npm run build:single # um único index.html com tudo embutido → /dist-single
```

## Onde editar
Tudo em `src/data/site.js`:
- `whatsapp`, `phone`, `hours`, `googleRating` → hoje estão `null` e ficam ESCONDIDOS. Preencher só com dado confirmado pelo cliente.
- `REVIEWS` → colar apenas avaliações reais do Google (nome, nota, texto, data). Vazio = mostra botão "Leer reseñas en Google".
- `SABORES` / `GALLERY` → categorias e fotos (todas vêm das fotos reais do Google Maps).

## Idiomas (ES / PT)
- Todos os textos ficam em `src/data/translations.js` (`es` e `pt`). Fotos e sabores têm `{ es, pt }` em `src/data/site.js`.
- O site abre em PT se o navegador estiver em português, senão em ES. O botão ES | PT troca na hora e a escolha fica salva.
- Link direto para a versão em português: `?lang=pt` (bom para divulgar em grupos de brasileiros).

## Antes de publicar
- Descomentar as tags `hreflang` no `index.html` com o domínio final.
- Trocar `/og-image.jpg` no `index.html` pela URL absoluta do domínio final e adicionar `"url"` no JSON-LD.
- Pedir ao cliente fotos originais em alta resolução (as atuais são capturas do Google Maps) e a logo em vetor/PNG grande.

## Componentes
Navbar · Hero · About · Sabores · Experience · Gallery (+ Lightbox) · Reviews · Instagram · Location · FinalCTA · Footer · MobileCTA
