# CV PDF officiel

Depose ici le PDF officiel, avec exactement ces noms de fichier :

- `Taha_Ghadhab_CV_FR.pdf` — version francaise
- `Taha_Ghadhab_CV_EN.pdf` — version anglaise

Des qu'un fichier est present, tous les boutons "CV" de la langue concernee
pointent automatiquement dessus (telechargement direct) au lieu de la page
imprimable `/[lang]/cv`. Aucun code a modifier.

La resolution se fait au build : voir `src/lib/cv.ts`. Il faut donc relancer
un build (ou un deploiement) apres avoir ajoute le fichier.

Si une seule langue a son PDF, l'autre continue de servir la page imprimable.
