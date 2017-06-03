# Utilisation de Git
Pour pouvoir utiliser Git il faut d'abord initialiser un dépôt en 
selectionnant le dossier de travail puis en utilisant la commande 
`git init`.

Une fois le dépôt initialisé il se compse de 3 'arbres':

- l'espace de travail, où se situent les fichiers,
- l'`INDEX` qui est un espace de transit pour les fichiers,
- et `HEAD` qui pointe vers la dernière validation faite.

Ensuite, pour effectuer un commit il faudra tout abord ajouter le (ou 
les) fichier(s) modifié(s) à l'INDEX via la commande `git add 
<filename>` (ou `git add \*` pour ajouter tous 
les fichiers modifiés). 

Une fois que tous les fichiers concernés par le commit ont été ajouté à 
l'INDEX, on peut alors utiliser la commande `git commit -m "Titre du 
commit"`. Il faut prendre soin au titre du commit, en utilisant 
l'imperatif et en restant informatif et concis (essayer de ne pas 
dépasser 50 charactères, 72 au maximum). Ce set de modification 
deviendra la nouvelle HEAD du dépot.

## Quelques liens utiles
- [git - petit guide][1]
- [How to write a Git commit message][2] 
- [Gérez vos codes source avec Git][3]

<!-- References -->
[1]: <https://rogerdudler.github.io/git-guide/index.fr.html>
     (git - petit guide)
[2]: <https://chris.beams.io/posts/git-commit/>
     (How to write a Git commit message)
[3]: <https://openclassrooms.com/courses/gerez-vos-codes-source-avec-git>
     (Gérez vos codes source avec Git)
