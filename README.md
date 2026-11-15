# Pit Wall Manager

Jeu de management d'écurie de Formule 1 dans le navigateur : choix de l'écurie et des pilotes, sponsors, développement de la voiture, qualifications, course en direct (stratégie, arrêts aux stands, météo, Safety Car), presse et conseil d'administration.

Application React (un seul composant `src/App.jsx`), construite avec Vite. Aucune API ni backend : la progression est enregistrée dans le `localStorage` du navigateur.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:5173
```

Build de production :

```bash
npm run build      # génère dist/
npm run preview    # sert dist/ en local
```

## Déployer sur Vercel

1. Pousser ce dossier dans un dépôt GitHub.
2. Sur vercel.com : **Add New → Project**, importer le dépôt.
3. Vercel détecte Vite automatiquement (`vercel.json` fixe aussi les réglages) : **Deploy**.

Chaque push sur la branche principale redéploie le site ; chaque pull request obtient une URL de prévisualisation.

## Structure

```
├── index.html          page hôte (viewport mobile, titre, favicon)
├── public/favicon.svg
├── src/
│   ├── main.jsx        point d'entrée React
│   └── App.jsx         le jeu
├── package.json
├── vite.config.js
└── vercel.json
```
