# Portfolio — Niama Sakhr

Portfolio personnel premium construit avec Next.js 14 (App Router), TypeScript, Tailwind CSS et Framer Motion.

## Contenu

Le contenu (texte, expériences, projets, compétences...) est centralisé dans **`lib/data.ts`**.
C'est le seul fichier à modifier pour mettre à jour les informations du site — aucune donnée
n'est codée en dur dans les composants.

> Le contenu a été construit à partir du CV réel. Certaines technologies mentionnées dans un
> brief antérieur (Redis, PostGIS, Google OR-Tools, Django, GitHub Actions) n'apparaissaient pas
> dans le CV source et ont été volontairement omises. Ajoute-les dans `lib/data.ts` si tu les
> maîtrises réellement.

## Installation

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## Configuration du formulaire de contact (EmailJS)

1. Crée un compte sur [emailjs.com](https://www.emailjs.com/).
2. Récupère ton `Service ID`, `Template ID` et `Public Key`.
3. Copie `.env.example` vers `.env.local` et renseigne les valeurs :

```bash
cp .env.example .env.local
```

Le template EmailJS doit contenir les variables : `user_name`, `user_email`, `subject`, `message`.

## Fichiers à ajouter

- `public/cv-niama-sakhr.pdf` — ton CV à télécharger (référencé dans le bouton "Télécharger le CV").
- `public/avatar.png` — photo/avatar si tu veux remplacer l'illustration du hero.
- Captures d'écran des projets si tu veux remplacer les placeholders dans `components/Projects.tsx`.

## Déploiement sur Vercel

```bash
npm run build
```

Puis connecte le dépôt GitHub à [vercel.com](https://vercel.com) et ajoute les variables
d'environnement `NEXT_PUBLIC_EMAILJS_*` dans les paramètres du projet Vercel.

## Structure

```
app/            → pages, layout, metadata SEO, sitemap, robots, 404
components/     → composants réutilisables (une section = un composant)
lib/data.ts     → toutes les données du portfolio (source unique de vérité)
```

## Fonctionnalités incluses

- Thème clair par défaut + bascule sombre fluide
- Navbar sticky avec surbrillance de section active + menu mobile
- Hero avec animation de graphe de microservices (élément signature) + effet machine à écrire
- Timeline animée (expérience, formation)
- Cartes de compétences avec barres de progression animées
- Compteurs animés (stats)
- Formulaire de contact fonctionnel (EmailJS)
- Barre de progression de scroll, bouton retour en haut, écran de chargement
- Curseur personnalisé (desktop uniquement)
- SEO (Open Graph, sitemap, robots.txt)
- Page 404 personnalisée
- Respect de `prefers-reduced-motion` et focus clavier visible
