@echo off
rem npm install -g @angular/cli  // décommenté pour installé angular
SET title=
set /p title=Entrez le titre de votre projet :
ng new %title%
cd %title%
ng serve --open
echo "Projet angular créer avec succès"
pause